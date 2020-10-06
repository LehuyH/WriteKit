<template>
	<div>
		<GlobalEvents @keydown.tab="onEnter" />
		<div class="mt-3 mx-1 columns app">
			<section class="column is-one-quarter rightBar has-text-light">
				<h1 class="title has-text-light">WriteKit</h1>
				<b-tabs :multiline="true">
					<b-tab-item label="Focus">
						<section v-if="selected !== null">
							<h2 class="title has-text-light">
								{{ selected.name }}
							</h2>
							<p style="white-space: pre-wrap">
								{{ selected.desc }}
							</p>
							<br />
							<h2 class="subtitle has-text-light">Templates</h2>
							<section
								style="
									max-height: 30vh;
									overflow-y: scroll;
									overflow-x: hidden;
								"
							>
								<div
									@click="addText(starter)"
									v-for="(starter, i) in selected.starters"
									:key="`${i}`"
								>
									<p
										class="light-link menu box has-background-black"
									>
										{{ starter }}
									</p>
								</div>
							</section>
						</section>
					</b-tab-item>
					<b-tab-item label="Settings">
						<div class="field">
							<b-switch v-model="settings.borders"
								>Borders</b-switch
							>
						</div>
						<div class="field">
							<b-switch v-model="settings.box">Box</b-switch>
						</div>
						<div class="field">
							<b-switch v-model="settings.tooltip"
								>Tooltips</b-switch
							>
						</div>
					</b-tab-item>
					<b-tab-item label="Setup">
						<section>
							<h2 class="subtitle has-text-light">
								Installed Blocks
							</h2>
							<div
								v-for="(block, i) in blocks"
								:key="`block-${i}`"
								@click="menus.selectedBlock = block"
								class="box has-background-black has-text-light block-box"
							>
								{{ block.name }}
							</div>
						</section>
						<br />
						<section>
							<h2 class="subtitle has-text-light">
								Type Explorer
							</h2>
							<div v-if="menus.selectedBlock !== null">
								<p
									v-for="(type, i) in menus.selectedBlock
										.types"
									:key="`${type.name}-${i}`"
									:style="`color: ${type.color};`"
								>
									{{ type.name }}
								</p>
							</div>
						</section>
					</b-tab-item>
					<b-tab-item label="Marketplace">
						<h1 class="title has-text-light">Marketplace</h1>
						<p class="subtitle has-text-light">
							Installed Block Packs
						</p>
						<b-collapse
							aria-id="contentIdForA11y2"
							class="panel"
							animation="slide"
						>
							<div
								slot="trigger"
								class="panel-heading"
								role="button"
								aria-controls="contentIdForA11y2"
							>
								<strong>Standard Essay Blocks</strong>
							</div>
							<div
								style="background-color: #3c4042"
								class="panel-block has-text-light"
							>
								Comes pre-installed with every version of
								WriteKit. Contains three standard blocks for
								writing essays.
							</div>
						</b-collapse>

						<b-collapse
							aria-id="contentIdForA11y2"
							class="panel"
							animation="slide"
						>
							<div
								slot="trigger"
								class="panel-heading"
								role="button"
								aria-controls="contentIdForA11y2"
							>
								<strong>Standard Essay Blocks</strong>
							</div>
							<div
								style="background-color: #3c4042"
								class="panel-block has-text-light"
							>
								Comes pre-installed with every version of
								WriteKit. Contains three standard blocks for
								writing essays.
							</div>
						</b-collapse>
					</b-tab-item>
				</b-tabs>
			</section>
			<section
				class="column container has-text-light margin"
				style="margin: 2%"
			>
				<h1 class="title has-text-light">Untilted Document</h1>

				<TextInput
					v-for="(item, i) in tree"
					:key="`text-${i}`"
					@click.native="selected = item"
					:settings="settings"
					:data="item"
				/>
				<span><a @click="newBlock">+</a></span>

				<section v-if="index == null">
					<h3 class="subtitle has-text-light">Create a new..</h3>
					<p
						v-for="(block, i) in blocks"
						:key="`${block.name}-${i}`"
						@click="
							index = i;
							tree.push(blocks[index].types[subindex]);
						"
						class="light-link"
					>
						{{ block.name }}
					</p>
				</section>
				<section v-if="special !== null">
					<h3 class="subtitle has-text-light">What's next?</h3>
					<p
						class="light-link"
						@click="
							tree.push(
								special.types[special.types[subindex + 1].index]
							);
							subindex = special.types[subindex + 1].index;
							special = null;
						"
					>
						{{
							special.types[special.types[subindex + 1].index]
								.name
						}}
					</p>
					<p
						class="light-link"
						v-if="special.types[subindex + 2]"
						@click="
							tree.push(special.types[subindex + 2]);
							subindex = subindex + 2;
							special = null;
						"
					>
						{{ special.types[subindex + 2].name }}
					</p>
					<br />
					<p
						class="light-link"
						@click="
							index = null;
							special = null;
							subindex = 0;
						"
					>
						End block
					</p>
				</section>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			blocks: [
				{
					name: "Introduction",
					types: [
						{
							name: "Broad Statement",
							color: "#fdcb6e",
							desc:
								"The first sentence of your introduction is the first chance a writer has to capture the attention of the reader. It is important to consider who your reader or audience is before you decide which type of attention grabber you will use for your essay.",
							prompt:
								"Try to think of what you find most interesting about the topic you are writing about and communicate that to your reader in a sentence or two.",
							starters: [
								"A definition",
								"A quotation or paraphrase",
								"A statement of opinion that you intend to challenge",
								"An interesting incident or anecdote related to your subject",
								"An explanation of why the topic is worth writing/reading about",
								"A question that will be answered by your thesis",
							],
						},
						{
							name: "Ideas to Introduce Thesis",
							color: "#d63031",
							desc:
								"A sentence that deals with your specific topic. Getting less broad with each statement",
							prompt: "Discuss the importance of..",
							starters: [],
						},
						{
							name: "Thesis ",
							color: "#fdcb6e",
							desc: `Topic sentences and thesis statements are sentences that writers use to focus their ideas and express the main point of their writing. Help to let the reader know what the purpose or main idea of an essay is \n\n Outline how you will support that main idea \n\nUse a path statement to refer to supporting points you will be using.\n\n A path statement is like a sneak peak at your main supporting ideas. \n\nParagraphs supporting these points in your essay will appear in the same order as they are listed in the path statement.`,
							prompt: "Discuss the importance of..",
							starters: [],
						},
					],
				},

				{
					name: "Body Paragraph",
					types: [
						{
							name: "Topic",
							color: "#ffeaa7",
							starters: [
								"This essay discusses",
								"In this essay",
								"Consider",
								"Imagine",
								"Take a moment to",
							],
							desc:
								"When creating a topic sentence, ask yourself what‟s going on in your paragraph. Why you chosen to include the information you have? Why is the paragraph important in the context of your argument or thesis statement? What point are your trying to make?",
							prompt: "What is the main idea of the paragraph?",
						},
						{
							name: "Evidence",
							color: "#ff7979",
							starters: ["An example that shows this well"],
							desc:
								"This is how you support, or back up, your claims. The evidence will help to 'prove' each claim to the reader.",
							prompt: "What evidence proves the claim?",
						},
						{
							name: "Reasoning",
							color: "#ffbe76",
							starters: ["An example that shows this well"],
							desc:
								"Reasoning is the process for making clear how your evidence supports your claim. In scientific argumentation, clear reasoning includes using scientific ideas or principles to make logical connections to show how the evidence supports the claim.",
							prompt: "How does this evidence support the claim?",
						},
						{
							special: "loop",
							index: 1,
						},
						{
							name: "Conclusion",
							color: "#f1c40f",
							starters: ["To conclude"],
							desc:
								"End your paragraph with a concluding sentence or sentences that reasserts how your paragraph contributes to the development of your argument as a whole.",
							prompt: "Condlu",
						},
					],
				},
				{
					name: "Transition",
					types: [
						{
							name: "Transition Sentence",
							color: "#00b894",
							prompt:
								"What does the sentence before this one say? How does this sentence relate to that one?",
							starters: [
								"however",
								"additionally",
								"accordingly",
								"admittedly",
								"although",
								"moreover",
								"as a result",
								"above all",
								"conversely",
								"furthermore",
								"because",
								"as a rule",
								"in contrast",
								"as well as",
								"consequently",
								"as usual",
								"instead",
								"another reason",
								"due to",
								"assuredly",
								"in comparison",
								"along with",
								"for this reason",
								"certainly",
								"nevertheless",
								"also",
								"for this purpose",
								"chiefly",
								"whereas",
								"coupled with",
								"hence",
								"especially",
								"yet",
								"correspondingly",
								"otherwise",
								"granted",
								"on the one hand…on the other hand",
								"for example",
								"since",
								"generally speaking",
								"on the contrary",
								"in addition",
								"so then",
								"for the most part",
								"other than",
								"indeed",
								"subsequently",
								"in this situation",
								"outside of",
								"in fact",
								"therefore",
								"no doubt (undoubtedly)",
								"rather",
								"identically",
								"thereupon",
								"obviously",
								"still",
								"likewise",
								"this is why",
								"of course",
								"besides",
								"again",
								"thus",
								"ordinarily",
								"comparatively",
								"similarly",
								"wherefore",
								"particularly",
								"different from",
								"whereas",
								"following this",
								"singularly",
								"even though",
								"likewise",
								"as you can see",
								"unquestionably",
								"otherwise",
								"one other thing",
								"for all of those reasons",
								"usually",
							],
							desc:
								"Transition-sentences bring out the logical relation between ideas. Words like 'however', 'so', 'additionally' do indicate a logical relation between paragraphs, but they are weak. ... A strong transition makes the relation explicit.",
						},
					],
				},
			],
			tree: [],
			index: null,
			subindex: 0,
			selected: null,
			special: null,
			menus: {
				selectedBlock: null,
			},
			settings: {
				borders: false,
				templateOpen: false,
				box: false,
				tooltip: false,
			},
		};
	},
	methods: {
		newBlock(event) {
			//DEBUG REMOVE LATER
			this.tree.push("s");
		},
		onEnter() {
			//HANDLE NEW BLOCK
			const currentBlock = this.blocks[this.index]; //Get the current block
			//Do nothing if waiting for user to choose one
			if (this.index == null) {
				return;
			}
			//Move the type index up by one
			this.subindex = this.subindex + 1;

			//If there are no more types, prompt user to choose new block
			if (currentBlock.types[this.subindex] == null) {
				this.index = null;
				this.subindex = 0;
				return;
			}
			//If the next type is special, do special option
			if (currentBlock.types[this.subindex].special) {
				//Special types like looping

				switch (currentBlock.types[this.subindex].special) {
					case "loop":
						this.special = currentBlock;
						break;
				}
				this.subindex = this.subindex - 1;
			} else {
				// ELSE - add next type to doc tree
				const item = currentBlock.types[this.subindex];
				this.tree.push(item);
				this.$buefy.toast.open({
					type: "is-success",
					message: `Writing ${item.name}`,
				});
				this.selected = item;
			}
		},
		addText(text) {
			const textarea = document.createElement("textarea");
			textarea.style.opacity = 0;
			textarea.style.width = 0;
			textarea.style.height = 0;
			textarea.style.position = "absolute";
			textarea.style.bottom = "-100%";
			textarea.style.left = "-100%";
			textarea.style.margin = 0;
			document.body.appendChild(textarea);
			textarea.value = text;
			textarea.select();
			document.execCommand("copy");
			textarea.parentNode.removeChild(textarea);
			this.$buefy.toast.open({
				message: "Copied to clipboard",
				type: "is-light",
			});
		},
	}
};
</script>

<style>
html {
	background-color: #2d3436;
}
.light-link {
	color: white;
	text-decoration: underline;
}
.light-link:hover {
	color: yellow;
	cursor: auto;
}
.light-link.menu {
	font-size: 1em;
	padding: 1%;
	background-color: #7957d5;
	text-decoration: none;
	border: 1px solid black;
	transition: 0.2s ease-in-out;
}
.light-link.menu:hover {
	transform: translate(25px, 0px);
}
.tabs a {
	color: white;
}
.block-box {
	cursor: pointer;
	border: 1px solid rgba(0, 0, 0, 1);
}
.block-box:hover {
	border: 1px solid white;
}
.secondaryTitle {
	font-family: Times New Roman;
}
</style>