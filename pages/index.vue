<template>
  <div>
    <GlobalEvents @keydown.tab="onEnter"/>
    <section class="rightBar has-text-light">
      <h1 class="title has-text-light">WriteKit</h1>
      <b-tabs :multiline="true">
        <b-tab-item  label="Focus">
          <section v-if="selected !== null">
            <h2 class="subtitle has-text-light"> {{selected.name}}</h2>
            <p> {{selected.desc}}</p>
            <br>
             <h2 class="subtitle has-text-light">Templates</h2>
              <section  style="max-height: 30vh; overflow-y:scroll; overflow-x: hidden;">
             <div @click="addText(starter)" v-for="(starter,i) in selected.starters" :key="`${i}`">
              <p class="light-link menu box has-background-black" >{{starter}}</p>
               
             </div>
            </section>
          </section>
        </b-tab-item>
        <b-tab-item label="Visuals">
          <div class="field">
            <b-switch v-model="settings.borders">Borders</b-switch>
          </div>
          <div class="field">
            <b-switch v-model="settings.box">Box</b-switch>
          </div>
        </b-tab-item>
        <b-tab-item label="Settings">
          <div class="field">
            <h2 class="subtitle has-text-light">Installed Blocks</h2>
            <div v-for="(block,i) in blocks" :key="`block-${i}`" class="box has-background-black has-text-light">
              {{block.name}}
            </div>
            <div class="box has-background-info has-text-light">
              Add more <i class='bx bx-plus-medical'></i>
            </div>
          </div>
        </b-tab-item>
      </b-tabs>

    </section>
    <section class="container has-text-light">
      <h1 class="title has-text-light">Untilted Document</h1>
      
      <TextInput v-for="(item,i) in tree" :key="`text-${i}`" @click.native="selected = item" :settings="settings" :data="item"></TextInput>
      <span><a @click="newBlock">+</a></span>

       <section v-if="index == null">
        <h3 class="subtitle has-text-light">Create a new..</h3>
        <p v-for="(block,i) in blocks" :key="`${block.name}-${i}`" @click="index = i; tree.push(blocks[index].types[subindex])" class="light-link">{{block.name}}</p>
      </section>
      
    </section>

  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

    components: {
      Card
    },
    data: function () {
      return {
        blocks: [{
            name: "Body Paragraph",
            types: [{
                name: "Topic",
                color: "#ffeaa7",
                starters: ["This essay discusses", "In this essay", "Consider", "Imagine", "Take a moment to"],
                desc: "When creating a topic sentence, ask yourself what‟s going on in your paragraph. Why you chosen to include the information you have? Why is the paragraph important in the context of your argument or thesis statement? What point are your trying to make?",
                prompt: "What is the main idea of the paragraph?"
              },
              {
                name: "Evidence",
                color: "#ff7979",
                starters: ["An example that shows this well"],
                desc: "This is how you support, or back up, your claims. The evidence will help to 'prove' each claim to the reader.",
                prompt: "What evidence proves the claim?"
              },
              {
                name: "Reasoning",
                color: "#ffbe76",
                starters: ["An example that shows this well"],
                desc: "Reasoning is the process for making clear how your evidence supports your claim. In scientific argumentation, clear reasoning includes using scientific ideas or principles to make logical connections to show how the evidence supports the claim.",
                prompt: "How does this evidence support the claim?"
              }
            ]
          },
          {
            name: "Transition",
            types: [{
              name: "Transition Sentence",
              color: "#00b894",
              prompt: "What does the sentence before this one say? How does this sentence relate to that one?",
              starters: ["however", "additionally", "accordingly", "admittedly", "although", "moreover", "as a result", "above all", "conversely", "furthermore", "because", "as a rule", "in contrast", "as well as", "consequently", "as usual", "instead", "another reason", "due to", "assuredly", "in comparison", "along with", "for this reason", "certainly", "nevertheless", "also", "for this purpose", "chiefly", "whereas", "coupled with", "hence", "especially", "yet", "correspondingly", "otherwise", "granted", "on the one hand…on the other hand", "for example", "since", "generally speaking", "on the contrary", "in addition", "so then", "for the most part", "other than", "indeed", "subsequently", "in this situation", "outside of", "in fact", "therefore", "no doubt (undoubtedly)", "rather", "identically", "thereupon", "obviously", "still", "likewise", "this is why", "of course", "besides", "again", "thus", "ordinarily", "comparatively", "similarly", "wherefore", "particularly", "different from", "whereas", "following this", "singularly", "even though", "likewise", "as you can see", "unquestionably", "otherwise", "one other thing", "for all of those reasons", "usually"],
              desc: "Transition-sentences bring out the logical relation between ideas. Words like 'however', 'so', 'additionally' do indicate a logical relation between paragraphs, but they are weak. ... A strong transition makes the relation explicit."
            }]
          }
        ],
        tree: [

        ],
        index: null,
        subindex: 0,
        selected: null,
        settings: {
          borders: false,
          templateOpen: false,
          box: false,
        }
      }
    },
    methods: {
      newBlock(event) {
        this.tree.push("s")
      },
      onEnter: function () {
        if (this.index == null) {
          return
        }
        this.subindex = this.subindex + 1
        if (this.blocks[this.index].types[this.subindex]) {
          const item = this.blocks[this.index].types[this.subindex]
          this.tree.push(item)
          this.$buefy.toast.open({
            type: "is-success",
            message: `Writing ${item.name}`
          })
          this.selected = item
        } else {
          this.index = null
          this.subindex = 0
        }
      },
      addText: function (text) {

        const textarea = document.createElement('textarea')
        // hide the textarea (since we can't use display: none, it's a bit long)
        textarea.style.opacity = 0
        textarea.style.width = 0
        textarea.style.height = 0
        textarea.style.position = 'absolute'
        textarea.style.bottom = '-100%'
        textarea.style.left = '-100%'
        textarea.style.margin = 0
        document.body.appendChild(textarea)
        textarea.value = text
        textarea.select()
        document.execCommand('copy')
        textarea.parentNode.removeChild(textarea)
        this.$buefy.toast.open({
          message: "Copied to clipboard",
          type: "is-light"
        })
      }

    },
    mounted: function () {

    }

  }
</script>

<style>
html{
  background-color:#2d3436;
}
.rightBar{
  position:fixed;
  padding:1%;
  max-width:12vw;
  resize:both;
}
.light-link{
  color:white;
  text-decoration: underline;
}
.light-link:hover{
  color:yellow;
  cursor: auto;
}
.light-link.menu{
  font-size: 1em;
  padding:1%;
  background-color:#7957D5;
  text-decoration: none;
  border:1px solid black;
  transition:0.2s ease-in-out;
}
.light-link.menu:hover{
  transform:translate(25px,0px)
}
.tabs a{
  color:white;
}
</style>