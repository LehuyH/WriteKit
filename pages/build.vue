<template>
	<div>
		<div class="hero is-success">
			<div class="hero-body">
				<h1 class="title is-1">WriteKit Build</h1>
				<h2 class="subtitle is-4">
					Create block packs to structure your writing.
				</h2>
			</div>
		</div>

		<form @submit.prevent="createBlockPack" class="section">
			<h1 class="title is-4">Pack Name</h1>
			<b-field>
				<b-input
					v-model="pack.name"
					placeholder="What is your block pack called?"
				/>
			</b-field>
			<br />

			<h1 class="title is-4">Blocks</h1>

			<b-button type="is-success" @click="addBlock"
				>Create block</b-button
			>

			<br /><br />

			<div
				v-for="block in pack.blocks"
				:key="block.staticIndex"
				class="box editor-box"
			>
				<input
					class="input title is-5 title-input"
					placeholder="Block Title"
					v-model="block.title"
				/>

				<h4 class="title is-5">Types</h4>

				<b-button
					type="is-success"
					@click="addTypeTo(block.staticIndex)"
					>Add type</b-button
				>
				<br><br>

				<section
					class="type-editor"
					v-for="(type, i) in block.types"
					:key="i"
				>
					<div>
						<input
							class="input title is-6 title-input"
							placeholder="Type Title"
							v-model="type.title"
						/>
					</div>

					<div class="columns">
						<div class="column">
							<h4 class="subtitle is-6">Description</h4>
							<textarea-autosize
								class="input"
								placeholder="Describe your block."
								v-model="type.description"
							/>
						</div>

						<div class="column">
							<h4 class="subtitle is-6">Prompt</h4>
							<textarea-autosize
								class="input"
								placeholder="Provide a starting point, how do we use it?"
								v-model="type.prompt"
							/>
						</div>
					</div>

					<div class="columns">
						<div class="column">
							<h4 class="subtitle is-6">Accent Color</h4>
							<input type="color" v-model="type.color" />
						</div>

						<div class="column">
							<h4 class="subtitle is-6">Templates</h4>
							<textarea-autosize
								class="input"
								placeholder="Separate your templates by a newline (hit ENTER/RETURN)."
								v-model="type.templates"
							/>
						</div>
					</div>
				</section>
			</div>
		</form>
	</div>
</template>

<script>
let staticIndex = -1;
export default {
	data() {
		return {
			pack: {
				name: null,
				blocks: [],
			},
		};
	},
	methods: {
		addBlock() {
			staticIndex++;
			this.pack.blocks.push({
				staticIndex,
				title: "New Block",
				types: [],
			});
		},
		addTypeTo(index) {
			const i = this.pack.blocks.findIndex(
				(block) => block.staticIndex === index
			);
			this.pack.blocks[i].types.push({
				title: "New Type",
				description: "a new description",
				prompt: "a brand-new prompt",
				color: "#000000",
				templates: "Template 1\nTemplate 2",
			});
		},
	},
};
</script>

<style scoped>
.box * {
	color: white;
}

.editor-box {
	background: rgb(54, 57, 63);
}

input[type=color] {
	transform: scale(2) translateX(0.75rem);
}

.type-editor {
	margin: 1rem 0;
}
</style>

<style>
.editor-box input,
.editor-box textarea {
	background: #1f2024;
	border: none;
}

.editor-box input.title-input {
	background: royalblue;
}
</style>			