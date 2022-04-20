<template>
  <div>
      <component v-bind:is="data.component"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name:"AbstractElement"
})
</script>



