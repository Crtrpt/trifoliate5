<template>
   <component v-bind:is="context.type"  v-bind="context.props"
   @click="click"
   >
         <template  v-for="(i,idx) in context.slot" :key="i" v-slot:[idx]>
           <AbstractElement  :context="c" v-for="(c) in i" :key="c"></AbstractElement>
        </template> 
   </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props:{
        context:Object
    },
    name:"AbstractElement",
    data(){
        return {
            slot:"default"
        }
    },
    methods:{
        click(e:Event){
            this.$store.dispatch("page/selectNode",this.context) 
            e.stopPropagation();
        }
    }
})
</script>



