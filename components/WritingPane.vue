<template>
  <div class="writing-pane section">
    <!-- Title -->
    <p>Currently editing...</p>
    <input
      class="disguised-input title is-3"
      @input="updateTitle"
      :value="title"
      placeholder="Your document's title"
    />

    <!-- Writing Portion -->
    <BlockInput v-for="(block, i) in document" :key="i" :block="block" />

    <section v-if="currentBlock == null">
      <h3 class="subtitle has-text-light">Create a new..</h3>
      <p
        v-for="(block, i) in blocks"
        :key="i"
        @click="addItem"
        class="light-link"
      >
        {{ block.name }}
      </p>
    </section> 
  </div>
</template>

<script>
export default {
    computed: {
        document() { return this.$store.state.document; },
        title() { return this.$store.state.title; },
        blocks() { return this.$store.state.blocks; }
        //can u import blocks here
    },
    methods: {
        updateTitle(newTitle) {
            this.$store.commit("updateTitle", newTitle.target.value);
        }
    },
    data() {
        return {
            currentBlock: null, // Position where the current BLOCK is
            typeIndex: 0  // POSITION of the current TYPE in the BLOCK Block = Introduction parapgh, type = Topic sentnce, etc, i see
        }
    }
}
</script>

<style scoped>
.writing-pane {
  flex: 2;
  background: var(--light);
}

.disguised-input {
  background: transparent;
  border: none;
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
</style>