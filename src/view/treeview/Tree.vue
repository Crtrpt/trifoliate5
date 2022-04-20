<template>
  <div
    :class="{
      'bg-blue-300 text-white': selectNode?.id == data.id,
     
    }"
    class="text-sm "
    @click="click($event)"
    @mouseenter="mouseenter($event)"
  >
    <div class="cursor-pointer pl-2 py-1  "
    
    
    >{{ data.name }}</div>
    <div
      v-for="s in data.slot"
      :key="s"
      :style="{
        paddingLeft: 10 * data.level + 'px',
      }"
    >
      <Tree
        v-for="n in s"
        :key="n"
        :data="n"
        :selectNode="selectNode"
        :hoverNode="hoverNode"
      ></Tree>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tree",
  props: {
    data: Object,
    selectNode: Object,
    hoverNode: Object,
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