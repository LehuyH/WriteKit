<template>
	<div class="is-page">
		<div class="hero is-primary">
			<div class="hero-body">
				<h1 class="title is-1">WriteKit</h1>
				<h2 class="subtitle is-4">Keep your writing crystal clear.</h2>
			</div>
		</div>
		<b-modal v-model="state.menus.export" :width="640" scroll="keep">
			<div class="card">
				<div class="card-header">
					<h1 class="title card-header-title">Export Document</h1>
				</div>
				<div class="card-content">
					<div class="content">
						<textarea
							class="disguised-input"
							style="min-height: 7vh"
							:value="
								state.document.content
									.map((block) =>
										block.map((e) => e.content).join(' ')
									)
									.join(`\n`)
							"
						></textarea>
					</div>
				</div>
			</div>
		</b-modal>
		<section class="main-content">
			<OptionTabs />
			<WritingPane />
		</section>
	</div>
</template>

<script>
import state from "../state";
export default {
	computed: {
		state() {
			return state;
		},
	},
};
</script>
<style scoped>
.main-content {
	display: flex;
	flex: 1;
	align-items: stretch;
}
</style>