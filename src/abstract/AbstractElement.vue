<template>
  <component
    class="select-none transition-all"
    v-bind:is="context.type"
    v-bind="context.props"
    @click="click"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    :style="context.style"
    ref="node"
    @drop="drop($event)"
    @dragenter="dragenter($event)"
    @dragleave="dragleave($event)"
    @dragover="dragover($event)"
    @drag="drag($event)"
    v-if="context.attr.get('eye')"
  >
    <template v-if="context.content">
      {{ context.content }}
    </template>
    <template v-for="(i, idx) in context.slot" :key="i" v-slot:[idx]>
      <AbstractElement :context="c" v-for="c in i" :key="c"> </AbstractElement>
    </template>
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DragNodeMixin from "../behavior/dragNode";
import { pageStore } from "../pinia/pageStore";

export default defineComponent({
  mixins: [DragNodeMixin],
  props: {
    context: Object,
  },
  name: "AbstractElement",
  data() {
    return {
      slot: "default",
    };
  },
  setup() {
    const page = pageStore()
    return { page }
  },
  mounted() {
    this.context.attr.set("el", this.$el);
    this.page.bindEl(this.context);
  },
  methods: {
    mouseenter(e: Event) {
      this.page.setHoverNode(this.context);
      e.stopPropagation();
    },
    mouseleave(e: Event) {
      this.page.cancelHoverNode(this.context);
      e.stopPropagation();
    },
    click(e: Event) {
      this.page.setSelectNode(this.context);
      e.stopPropagation();
    },
  },
});
</script>




function pageStore() {
  throw new Error("Function not implemented.");
}
