<template>
	<div class="is-page">
		<div class="hero is-info">
			<div class="hero-body">
				<h1 class="title is-1">WriteKit</h1>
				<h2 class="subtitle is-4">Keep your writing crystal clear.</h2>
			</div>
		</div>

		<section class="main-content">
			<OptionTabs />
			<WritingPane />
		</section>
	</div>
</template>

<style scoped>
.main-content {
	display: flex;
	flex: 1;
	align-items: stretch;
}
</style>