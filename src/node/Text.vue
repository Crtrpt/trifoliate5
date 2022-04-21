<template>
  <div>
    {{ content }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Text",
  props: {
    content: {
      type: String,
      default: "显示的文字",
    },
  },
});
</script>



