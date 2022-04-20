<template>
  <div class="p-1 border">
    <div>
      <slot name="action"> </slot>
      <slot name="title"> </slot>
      <slot name="leading"> </slot>
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



