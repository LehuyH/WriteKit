<template>
	<div>
		<div class="hero is-primary">
			<div class="hero-body container has-text-left">
				<h1 class="title is-3 level">
					Your
					<select v-model="page" class="change-display title is-3">
						<option value="Documents">Documents</option>
						<option value="Block Packs">Block Packs</option>
						<option value="Themes">Themes</option>
					</select>
				</h1>
			</div>
		</div>

		<div class="section container" v-if="state.user">
			<template v-if="page === 'Documents'">
				<div
					class="box"
					v-for="(document, i) in state.user.documents"
					:key="i"
				>
					<div>
						<strong class="title is-5">{{
							document.metadata.title
						}}</strong>

						<div style="float: right">
							<a
								class="active-link"
								@click="changeSelectedDocument(i)"
								><b-icon icon="pencil-outline"
							/></a>
							<a
								class="active-link"
								@click="state.deleteDocument(i)"
								><b-icon icon="delete"
							/></a>
						</div>

						<div class="tag-group">
							<span class="tag is-success"
								>{{
									stitchContent(document.content).split(" ")
										.length
								}}
								Words</span
							>
							<span class="tag is-info"
								>{{
									stitchContent(document.content).length
								}}
								Characters</span
							>
						</div>

						<p class="writing-preview">
							{{
								stitchContent(document.content) ||
								"This document is currently empty."
							}}
						</p>
					</div>
				</div>

				<div style="margin: 1rem;">
                    <div v-if="state.user.documents.length === 0">
                        <h3 class="subtitle is-3">You have no documents!</h3>
                        <br />
                    </div>

                    <b-button @click="createDocument" type="is-info is-medium">
                        Add a document <b>+</b>
                    </b-button>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
import state from "../state";
export default {
	data() {
		return {
			open: true,
			page: "Documents",
		};
	},

	computed: {
		state() {
			return state;
		},
	},

	methods: {
		stitchContent(content) {
			return content
				.map((block) => block.map((e) => e.content).join(" "))
				.join(" ")
				.split("\n")
				.join(" ");
		},
		changeSelectedDocument(i) {
			state.selectedDocument = i;
			this.$router.push("/write");
		},
		async createDocument() {
			const res = await state.createDocument();

			if (res === false) {
				this.$buefy.toast.open(
					"Unable to create document. Reload and retry?"
				);
			} else {
				state.selectedDocument = res;
				this.$router.push("/write");
			}
		},
	},
};
</script>

<style scoped>
.box {
	width: 30rem;
	display: inline-block;
    overflow: hidden;
    margin: 1rem;
    height: 12.5rem;
    border-right: 1rem solid white;
}

.writing-preview {
    margin-top: 1rem;
    margin-right: 1rem;
    overflow: hidden;
}

.hero .level > * {
	margin: 0 0.5rem;
}

.tag-group {
	margin: 0.5rem 0;
}
.change-display {
	background: none;
	border: none;
}

.change-display option {
	color: var(--dark);
	font-size: 1rem;
}

.active-link {
	margin: 0 0.5rem;
}
</style>