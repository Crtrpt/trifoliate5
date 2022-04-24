<template>
  <div>
    <div>
      <div v-for="d in item" :key="d">{{ d.title }}</div>
    </div>
    <slot ref="children" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tab",
  props: {
    select: Number,
  },
  data() {
    return {
      item: [],
      curSelect: this.select || 0,
    };
  },
  created() {},
  methods: {
    click(e: Event) {
      console.log("click");
    },
  },
});
</script>



