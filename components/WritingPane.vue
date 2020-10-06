<template>
    <div class="writing-pane section">
        <!-- Title -->
        <p>Currently editing...</p>
        <input class="disguised-input title is-3" @input="updateTitle" :value="title"  placeholder="Your document's title"/>

        <!-- Writing Portion -->
        <BlockInput v-for="(block, i) in document" :key="i" :block="block" />

        <div v-if="document.length === 0" class="no-blocks-indicator">
            You have no blocks yet, add one on the left.
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        document() { return this.$store.state.document; },
        title() { return this.$store.state.title; }
    },
    methods: {
        updateTitle(newTitle) {
            this.$store.commit("updateTitle", newTitle.target.value);
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