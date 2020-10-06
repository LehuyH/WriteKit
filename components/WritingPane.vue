<template>
  <div class="writing-pane section">
    <GlobalEvents @keydown.tab="onTab" />
    <!-- Title -->
    <p>Currently editing...</p>
    {{state.typeIndex}}
    <input
      class="disguised-input title is-3"
      v-model="state.document.metadata.title"
      placeholder="Your document's title"
    />

    <!-- Writing Portion -->
    <BlockInput v-for="(block, i) in document.content" :key="i" :block="block" :index="i" />

    <section v-if="currentBlockIndex == null">
      <h3 class="subtitle">Create a new..</h3>
      <p
        v-for="(block, i) in blocks"
        :key="i"
        @click="createNewBlock(block)"
        class="link"
      >
        {{ block.name }}
      </p>
    </section> 
    <section v-if="state.special !== null">
					<h3 class="subtitle">What's next?</h3>
          <p v-for="(option,i) in state.special.options" :key="`${option.name}%${i}`" class="link" @click="handleOption(option)">{{option.name}}</p>
				
		</section>
  </div>
</template>

<script>
import state from '../state';
export default {
    computed: {
        document() { return state.document; },
        blocks() { return state.blocks; },
        state(){return state;},
        currentBlockIndex(){return state.currentBlockIndex;},
        typeIndex(){return state.typeIndex;},
    
    },
    methods: {
      handleOption(option) {
        var newType = JSON.parse(JSON.stringify(option));
      newType.content = '';
      state.document.content[state.currentBlockIndex].push(newType);
      console.log(newType)
      state.typeIndex = option.newIndex;
      state.special = null;
      },
      updateTitle(newTitle) {
        this.$store.commit("updateTitle", newTitle.target.value);
      },
      createNewBlock(block) {
        //Reset indexs
        this.typeIndex = 0
        let nextType = JSON.parse(JSON.stringify(block.types[this.typeIndex]))
        nextType.content = ""
        state.document.content.push([nextType])
        this.currentBlock = block;
        state.currentBlockIndex = state.document.content.length - 1
        console.log(state.document)
      },
      onTab() {
        //User pressed enter, determine next action
        
        //Do nothing if waiting for user to choose one
        if (this.currentBlockIndex === null) {
          this.$buefy.toast.open({
            message: "Please choose a block",
            type: "is-light",
          });
          return
        }

        //Move the type index up by one
        console.log(this.currentBlockIndex )
        state.typeIndex = state.typeIndex + 1;

        //If there are no more types, prompt user to choose new block
        if (this.currentBlock.types[state.typeIndex] == null) {
          state.currentBlock = null;
          state.currentBlockIndex = null;
          state.typeIndex = 0;
          return;
        }
        //If the next type is special, do special option
        if (this.currentBlock.types[this.typeIndex].special) {
          //Special types like looping

          switch (this.currentBlock.types[this.typeIndex].special) {
            case "loop":
              //Calc options
              let options = []
              let last = this.currentBlock.types[this.currentBlock.types[this.typeIndex].index]
              let next = this.currentBlock.types[this.typeIndex+1]

              //Format to special
              last.newIndex = this.currentBlock.types[this.typeIndex].index
              next.newIndex = this.typeIndex+1
              //Add to menu
              options.push(last)
              options.push(next)
              let specialObj = JSON.parse(JSON.stringify({
                block:this.currentBlock,
                options
              
              }))
              console.log(specialObj)
              state.special = specialObj
              break;
          }

        } else {
          // ELSE - add next type to doc state.document.content[state.currentBlockIndex]
          let item = this.currentBlock.types[this.typeIndex];
          item.content = ""
          state.document.content[this.currentBlockIndex].push(item);
          this.$buefy.toast.open({
            type: "is-success",
            message: `Writing ${item.name}`,
          });
          this.selected = item;
        }
      }
    },
    data() {
        return {
            special: null, //Handle special cases
            currentBlock: null, // Stores current block DATA
        }
    }
}
</script>

<style>
.writing-pane {
  flex: 2;
  background: var(--light);
}

.disguised-input {
  background: transparent;
  outline: none;
  border:none;
  padding-left: 0;
  width: 100%;
  height: 3rem;
  
}

.no-blocks-indicator {
  background: var(--primary);
  color: white;
  padding: 1rem;
  display: inline-block;
  border-radius: 10px;
}
.link:hover{
  text-decoration: underline;
}
.template-btn{
transition: 0.1s all ease-in-out;
}
.template-btn:hover {
	transform: translate(25px, 0px);
}

</style>