<template>
  <div>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NameSlot",
  props: {
    content: {
      type: String,
      default: "title",
    },
  },
});
</script>



