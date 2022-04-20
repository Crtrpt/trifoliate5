<template>
  <div class="text-sm border border-white hover:border-blue-400 cursor-pointer" @click="click($event)" @mouseenter="mouseenter($event)">
    {{ data.name }}
    <div
      v-for="s in data.slot"
      :key="s"
      :style="{
        paddingLeft: 10 * data.level + 'px',
      }"
    >
      <Tree v-for="n in s" :key="n" :data="n"></Tree>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tree",
  props: {
    data: Object,
  },
  methods: {
    mouseenter(e) {
      this.$store.dispatch("page/hoverNode", this.data);
      e.stopPropagation();
    },
    click(e: Event) {
      this.$store.dispatch("page/selectNode", this.data);
      e.stopPropagation();
    },
  },
});
</script>