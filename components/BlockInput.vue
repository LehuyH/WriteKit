<template>
	<div :class="{ box: state.settings.box }">
		<section v-for="(type, i) in block" :key="`${type.name}-${i}`">
			<h2 v-if="state.settings.titles" class="subtitle">
				{{ type.name }}
			</h2>
			<textarea-autosize
				v-model="type.content"
				:class="{ 'disguised-input': true }"
				:placeholder="type.prompt"
				:style="`color:${type.color};`"
				@focus.native="handleFocus(type, i)"
			></textarea-autosize>
		</section>
	</div>
</template>

<script>
import state from "../state";
export default {
    props: { block: Array,index:Number },
    computed:{ state(){return state} },
    methods:{
        handleFocus: function(type,i){

            state.selected = type;
            state.selectionIndex.blockIndex = this.index;
            state.selectionIndex.typeIndex = i;

        }
	}
    
}
</script>

<style scoped>
</style>