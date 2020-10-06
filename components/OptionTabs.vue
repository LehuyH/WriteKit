<template>
  <div class="option-tabs section">
    <b-tabs>
      <b-tab-item label="Explorer">
        <b-collapse
          animation="slide"
          v-for="(block, i) in blocks"
          :key="i"
          :open="false"
        >
          <h3 slot="trigger" class="title is-3 block-list">
            {{ block.name }}
          </h3>
          <div>
            <div
              class="level add-block-card"
              v-for="(type, i) in block.types"
              :key="i"
              :style="`border-color: ${type.color}; align-items: end;`"
            >
              <div class="level-left" style="width: 75%">
                <div>
                  <h1 class="subtitle is-4">{{ type.name }}</h1>
                  <h2 class="subtitle is-6">
                    {{ type.desc }}
                  </h2>
                </div>
              </div>

              <div class="level-right">
                <b-button
                  @click="addBlock(block, type)"
                  type="is-dark"
                  >Add this block</b-button
                >
              </div>
            </div>
          </div>
        </b-collapse>
      </b-tab-item>
      <b-tab-item label="Settings">
        <div class="field">
          <b-switch v-model="settings.borders">Borders</b-switch>
        </div>
        <div class="field">
          <b-switch v-model="settings.box">Box</b-switch>
        </div>
        <div class="field">
          <b-switch v-model="settings.tooltip">Tooltips</b-switch>
        </div>
      </b-tab-item>
      <b-tab-item label="Setup">
        <section>
          <h2 class="subtitle">Installed Blocks</h2>
          <div
            v-for="(block, i) in blocks"
            :key="i"
            class="add-block-card has-background-dark has-text-light level"
            :style="` align-items: end;`"
          >
            <div class="level-left" style="width: 75%">
              <div>
                <h1 class="title is-4 has-text-light">{{ block.name }}</h1>
                <h2 class="subtitle is-5">{{ block.desc }}</h2>
              </div>
            </div>

            <div class="level-right m-2">
              <b-button @click="addBlock(blockName)" type="is-light"
                >Add this type</b-button
              >
            </div>
          </div>
        </section>
        <br />
        <section>
          <h2 class="subtitle">Type Explorer</h2>
          <div v-if="menus.selectedBlock !== null">
            <p
              v-for="(type, i) in menus.selectedBlock.types"
              :key="`${type.name}-${i}`"
              :style="`color: ${type.color};`"
            >
              {{ type.name }}
            </p>
          </div>
        </section>
      </b-tab-item>
      <b-tab-item label="Marketplace">
        <h1 class="title">Marketplace</h1>
        <p class="subtitle">Installed Block Packs</p>
        <b-collapse class="panel" animation="slide" :open="false">
          <div slot="trigger" class="panel-heading" role="button">
            <strong>Standard Essay Blocks</strong>
          </div>
          <div class="panel-block">
            Comes pre-installed with every version of WriteKit. Contains three
            standard blocks for writing essays.
          </div>
        </b-collapse>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  props: {
    settings: Object,
    menus: Object,
  },
  computed: {
    blocks() {
      return this.$store.state.blocks;
    },
    document() {
      return this.$store.state.document;
    },
  },
  methods: {
    addBlock(block, type) {
      this.$store.commit("updateDocument", [
        ...this.document,
        { block, type, content: "" },
      ]);
    },
  },
};
</script>

<style scoped>
.option-tabs {
  flex: 1;
}

.add-block-card {
  border-left: solid 5px transparent;
  padding: 1rem;
  margin: 0;
}

.block-list {
  padding: 1rem 0;
}
</style>