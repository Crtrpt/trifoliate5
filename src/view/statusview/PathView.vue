<template>
  <div
    class="text-sm p-1 cursor-pointer text-gray-600 border"
    :class="{
      'border-dashed border-gray-400 ': isDrag,
      'border-gray-100 ': !isDrag,
    }"
    @click="click"
    @drop="drop($event)"
    @dragenter="dragenter($event)"
    @dragleave="dragleave($event)"
    @dragover="dragover($event)"
    @drag="drag($event)"
  >
    {{ node.name }}
  </div>
  <template v-if="node.parent != null">
    <font-awesome-icon
      class="text-sm text-gray-600"
      icon="chevron-right"
    ></font-awesome-icon>
    <PathView :node="node.parent"></PathView>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DragNodeMixin from "../../behavior/dragNode";

export default defineComponent({
  name: "PathView",
  props: {
    node: Object,
  },
  mixins: [DragNodeMixin],
  data() {
    return {};
  },
  methods: {
    click() {
      console.log(this.node);
      this.$store.dispatch("page/selectNode", this.node);
    },
  },
});
</script>