<template>
	<div>
		<b-tooltip
			position="is-left"
			:active="settings.tooltip"
			:auto-close="['outside', 'escape']"
		>	
		<h2 v-if="settings.titles" class="subtitle has-text-light">{{data.name}}</h2>
			<textarea
				v-model="value"
				:placeholder="`${data.prompt}`"
				:class="{ border: settings.borders, background: settings.box }"
				:style="`
          border-left: ${this.data.color} inset 3px; 
          color:${this.data.color}; min-height: 25px;height:${(value.split(`\n`).length*30) - value.split(`\n`).length * 12}px`
      ">
			</textarea>

			<template #content>
				<p>{{ data.name }}</p>
			</template>
		</b-tooltip>
	</div>
</template>

<script>
export default {
	props: {
		data: Object,
		settings: Object,
	},
	data() {
		return {
			value: "",
		};
	},
};
</script>

<style scoped>
textarea {
	background-color: transparent;
	font-size: 1em;
	border: none;
	overflow: auto;
	outline: none;
	transition: all 0.5s ease-in-out;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	 width:80vw;
	resize: none;
	height: auto;
}
.border {
	border-style: solid;
	border-width: 0.5px;
	margin: 1%;
}
.background {
	background-color: black;
	margin: 1%;
}
</style>