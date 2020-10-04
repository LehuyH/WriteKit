<template>
<div>
  <b-tooltip position="is-left" :auto-close="['outside', 'escape']">
   <textarea v-model="value" :placeholder="`${data.prompt}`" :class="{ border: settings.borders,background:settings.box }" :style="`border-color:${this.data.color};color:${this.data.color};height:${value.split(`\n`).length*40}px`" />
   <template v-slot:content>
               <p>{{data.name}}</p>
            </template>
  </b-tooltip>  
  </div>
</template>

<script>
export default {
    props:{ 
        data: Object,
        settings:Object
    },
    data:function(){
            return{
                 value:""
            }
        }
    
}
</script>

<style scoped>
[contenteditable] {
  outline: 0px solid transparent;
}
textarea{
    width:80vw;
    background-color:transparent;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 1em;
     border: none;
    overflow: auto;
    outline: none;
    transition: all 0.5s ease-in-out;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
    height:auto;
    
}
.border{
  border-style: solid;
  border-width: 0.5px;
  margin: 1%;
}
.background{
  background-color:#23272A;
  margin: 1%;
}
</style>