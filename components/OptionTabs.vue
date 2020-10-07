<template>
  <div class="option-tabs section">
    <style v-if="selectedTheme !== null">
      {{selectedTheme}}
    </style>
    <b-tabs>
       <b-tab-item label="Focus">
         <section v-if="state.selected !== null">
							<h2 class="title">
								{{ state.selected.name }}
							</h2>
							<p style="white-space: pre-wrap; text-align:left;">{{ state.selected.desc }}</p>
							<br />
              <b v-if="state.selected.starters.length == 0">No Templates Available</b>
							<b-collapse v-else class="panel" animation="slide">
							  <b-button :open="false" slot="trigger" type="is-light" class="subtitle">Templates</b-button>
							  <section style="
									max-height: 30vh;
									overflow-y: scroll;
									overflow-x: hidden;
								">
							    <div @click="addText(starter)" v-for="(starter, i) in state.selected.starters" :key="`${i}`">
							      <p class="template-btn box has-background-black has-text-light">
							        {{ starter }}
							      </p>
							    </div>
							  </section>
							</b-collapse>
						</section>
			</b-tab-item>
			<b-tab-item label="Explorer">
				<b-collapse
					animation="slide"
					v-for="(block, i) in state.blocks"
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
									<h1 class="subtitle is-4">
										{{ type.name }}
									</h1>
									<h2 class="subtitle is-6">
										{{ type.desc }}
									</h2>
								</div>
							</div>

							<div class="level-right">
								<b-button @click="addBlock(type)" type="is-dark"
									>Add this type</b-button
								>
							</div>
						</div>
					</div>
				</b-collapse>
			</b-tab-item>
			<b-tab-item label="Settings">
				<div class="field">
					<b-switch v-model="state.settings.borders"
						>Borders</b-switch
					>
				</div>
				<div class="field">
					<b-switch v-model="state.settings.box">Box</b-switch>
				</div>
				<div class="field">
					<b-switch v-model="state.settings.titles">Titles</b-switch>
				</div>
			</b-tab-item>
			<b-tab-item label="Setup">
				<section>
					<h2 class="subtitle">Themes</h2>
             <b-field
            label="Theme">
            <b-select v-model="selectedTheme" placeholder="Select a theme" expanded>
                <option
                    v-for="option in state.themes"
                    :value="option.css"
                    :key="option.name">
                    {{ option.name }}
                </option>
            </b-select>
            </b-field>
				</section>
				<br />
			</b-tab-item>
			<b-tab-item label="Marketplace">
				<h1 class="title">Marketplace</h1>
				<p class="subtitle">Installed Block Packs</p>
				<b-collapse class="panel" animation="slide" :open="false">
					<div slot="trigger" class="panel-heading" role="button">
						<strong>Standard Essay Blocks</strong>
					</div>
					<div class="panel-block">
						Comes pre-installed with every version of WriteKit.
						Contains three standard blocks for writing essays.
					</div>
				</b-collapse>
			</b-tab-item>
		</b-tabs>
	</div>
</template>

<script>
import state from "../state/index.js";
export default {
  computed: {
    state(){return state
    }
  },
  data:function(){
    return {
    selectedTheme :null
    }
  },
  methods: {
    addBlock(type) {
      let newType = JSON.parse(JSON.stringify(type))
      newType.content =""
       state.document.content[state.selectionIndex.blockIndex].push(newType);
    },
    addText(text){
      state.document.content[state.selectionIndex.blockIndex][state.selectionIndex.typeIndex].content = `${text} ${state.document.content[state.currentBlockIndex][state.typeIndex].content}`
    }
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