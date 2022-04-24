<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabItem",
  props: {
    title: String,
  },
  data() {
    return {
      item: [],
      curSelect: this.select || 0,
    };
  },
  methods: {
    click(e: Event) {
      console.log("click");
    },
  },
});
</script>



