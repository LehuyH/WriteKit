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
                <div class="box" v-for="(document, i) in state.user.documents" :key="i">
                    <div class="level">
                        <div class="level-left">
                            <strong class="title is-5">{{ document.metadata.title }}</strong>
                        </div>
                        <div class="level-right">
                            <a class="active-link"  @click="changeSelectedDocument(i)"><b-icon icon="pencil-outline" /></a>
                            <a class="active-link" @click="state.deleteDocument(i)"><b-icon icon="delete" /></a>
                        </div>
                    </div>
                    
                    <div class="tag-group">
                        <span class="tag is-success">{{ stitchContent(document.content).split(" ").length }} Words</span>
                        <span class="tag is-info">{{ stitchContent(document.content).length }} Characters</span>
                    </div>
                    
                <p>{{ stitchContent(document.content) || "This document is currently empty." }}</p>
                </div>

                <b-button @click="createDocument" type="is-info is-medium">Add a document <b>+</b></b-button>
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
        state() { return state; },
    },
    
    methods: {
        stitchContent(content) {
            return content.map(block => block.map(e => e.content).join(" ")).join(" ").split("\n").join(" ");
        },
        changeSelectedDocument(i) {
            state.selectedDocument = i;
            this.$router.push("/write");
        },
        async createDocument() {
            const res = await state.createDocument();

            if (!res) {
                this.$buefy.toast.open("Unable to create document. Reload and retry?");
            }

            else {
                state.selectedDocument = res;
                this.$router.push("/write");
            }
        }
    }
};
</script>

<style>
.box {
	height: 12rem;
	overflow: hidden;
	border-bottom: white 1rem solid;
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