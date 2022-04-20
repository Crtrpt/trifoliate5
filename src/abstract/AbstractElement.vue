<template>
   <component v-bind:is="context.type"  v-bind="context.props">
       <slot>
           <AbstractElement  :context="i" v-for="i in context.children" v-bind:key="i"></AbstractElement>
       </slot>
   </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props:{
        context:Object
    },
    name:"AbstractElement"
})
</script>



