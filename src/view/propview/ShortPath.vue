<template>
  <div class="flex items-center p-1">
    <div
      v-if="node.parent != null && node.parent.parent != null"
      class="px-1 cursor-pointer hover:text-gray-800 text-gray-400"
      @click="click(node.parent.parent)"
    >
      {{ node.parent.parent.name }}
    </div>
    <div v-if="node.parent != null && node.parent.parent != null">
      <font-awesome-icon
        class="text-sm text-gray-600"
        icon="chevron-right"
      ></font-awesome-icon>
    </div>
    <div
      v-if="node.parent != null"
      class="px-1 cursor-pointer hover:text-gray-800 text-gray-400"
      @click="click(node.parent)"
    >
      {{ node.parent.name }}
    </div>
    <div v-if="node.parent != null">
      <font-awesome-icon
        class="text-sm text-gray-600"
        icon="chevron-right"
      ></font-awesome-icon>
    </div>
    <div class="px-1">{{ node.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DragNodeMixin from "../../behavior/dragNode";

export default defineComponent({
  name: "ShotPath",
  props: {
    node: Object,
  },
  mixins: [DragNodeMixin],
  data() {
    return {};
  },
  methods: {
    click(n) {
      this.$store.dispatch("page/selectNode", n);
    },
  },
});
</script>