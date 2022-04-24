<template>
  <div class="rounded p-10 hover:bg-gray-200">
    {{ content }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    content: {
      type: String,
      default: "button",
    },
  },
  methods: {
    click(e: Event) {
      console.log("click");
    },
  },
});
</script>



