<template>
  <WorkSpaceView class="bg-gray-100 absolute" ref="workspace">
    <DocView ref="doc"></DocView>
    <HoverView class="absolute top-0" :workspaceRef="workspaceRef" />
    <SelectView class="absolute top-0" :workspaceRef="workspaceRef" />
  </WorkSpaceView>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlatViewport",
  data() {
    return {
      workspaceRef: null,
    };
  },
  mounted() {
    this.workspaceRef = this.$refs.doc.$el as HTMLElement;
  },
});
</script>



