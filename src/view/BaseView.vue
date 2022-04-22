<template>
  <div class="border">
    <div class="flex items-center text-gray-400 bg-gray-50">
      <slot name="leading"> </slot>
      <slot name="title"> </slot>
      <slot name="action"> </slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseView",
});
</script>



