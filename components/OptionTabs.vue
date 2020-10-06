<template>
    <div class="option-tabs section">
        <b-tabs>
            <b-tab-item label="Write">
                <div 
                    v-for="(block, blockName, i) in blocks" :key="i" 
                    class="add-block-card level" :style="`border-color: ${block.theme}; align-items: end;`"
                >
                    <div class="level-left" style="width: 75%;"><div>
                        <h1 class="title is-4">{{ blockName }}</h1>
                        <h2 class="subtitle is-5">{{ block.prompt }} </h2>

                        <details>
                            <summary class="title is-6" style="margin-bottom: 0.5rem;">Helpful Hints</summary>
                            <ul>
                                <li class="bullet" v-for="(tip, i) in block.tips" :key="i">{{ tip }}</li>
                            </ul>
                        </details>
                    </div></div>

                    <div class="level-right">
                        <b-button @click="addBlock(blockName)" type="is-dark">Add this block</b-button>
                    </div>
                </div>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
export default {
   computed: {
       blocks() { return this.$store.state.blocks; },
       document() { return this.$store.state.document;}
   },
   methods: {
        addBlock(blockName) {
            this.$store.commit("updateDocument", [...this.document, { name: blockName, content: "" }])
        }
   }
};
</script>

<style scoped>
.option-tabs {
    flex: 1;
}

.add-block-card {
    border-left: solid 5px transparent;
    padding: 1rem;
}
</style>