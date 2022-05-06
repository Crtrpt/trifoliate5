<template>
  <WorkSpaceView
    class="bg-gray-100 absolute"
    ref="workspace"
    @mousedown="mousedown"
    @mouseup="mouseup"
    @mousemove="mousemove"
  >
    <DocView
      ref="doc"
      :class="{
        'pointer-events-none doc_view': mode == 'move',
      }"
    ></DocView>
    <HoverView class="absolute top-0" :workspaceRef="workspaceRef" />
    <SelectView
      class="absolute top-0"
      :workspaceRef="workspaceRef"
      @move="move"
      ref="select"
    />
    <DragoverView class="absolute top-0" :workspaceRef="workspaceRef" /> 
  </WorkSpaceView>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlatViewport",
  data() {
    return {
      workspaceRef: null,
      mode: "select", // move select
      start: {
        x: 0,
        y: 0,
      },
      end: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    mousedown(e: MouseEvent) {
      if (this.mode == "move") {
        this.start.x = e.x;
        this.start.y = e.y;
      }
    },
    mousemove(e: MouseEvent) {
      if (this.mode == "move") {
        this.end.x = e.x;
        this.end.y = e.y;
        var offset = {
          x: this.end.x - this.start.x,
          y: this.end.y - this.start.y,
        };
        this.$refs.select.moveCallback(offset);
        // this.mode = "select";
      }
    },
    mouseup(e: MouseEvent) {
      console.log("mouseup");
      if (this.mode == "move") {
        this.end.x = e.x;
        this.end.y = e.y;
        var offset = {
          x: this.end.x - this.start.x,
          y: this.end.y - this.start.y,
        };
        this.mode = "select";
      }
    },
    move(e: any) {
      console.log("开始移动");
      this.mode = "move";
    },
  },
  mounted() {
    this.workspaceRef = this.$refs.doc.$el as HTMLElement;
  },
});
</script>



