<template>
   <component v-bind:is="context.type"  v-bind="context.props"></component>
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



