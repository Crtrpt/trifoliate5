<template>
   <component 
   class=" select-none"
   v-bind:is="context.type" 
    v-bind="context.props"
   @click="click"
   @mouseenter="mouseenter"
   @mouseleave="mouseleave"
   :style="context.style"
   ref="node"
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
    mounted() {  
       this.context.attr['el']=this.$el;
       this.$store.dispatch("page/bindEl",this.context) 
    },
    methods:{
        mouseenter(e:Event){
            this.$store.dispatch("page/hoverNode",this.context) 
            e.stopPropagation();
        },
        mouseleave(e:Event){
        //      this.$store.dispatch("page/selectNode",this.context) 
        //      e.stopPropagation();
        },
        click(e:Event){
            this.$store.dispatch("page/selectNode",this.context) 
            e.stopPropagation();
        }
    }
})
</script>



