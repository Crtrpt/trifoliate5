<template>
  <div id="trifoliate5" class="flex flex-col">
    <ToolViewport></ToolViewport>
    <div class="flex flex-row overflow-hidden grow w-full">
      <div class="w-1/6 shrink-0">
        <NodeViewport class="shrink-1 h-1/2 overflow-auto"></NodeViewport>
        <EnvViewport class="shrink-1 h-1/2 overflow-auto"></EnvViewport>
      </div>
      <FlatViewport
        class="grow-0 shrink-1 overflow-auto min-w-0 min-h-0"
      ></FlatViewport>
      <div>
        <TreeViewport
          class="shrink-1 h-1/2 overflow-auto"
          :style="{
            width: '300px',
          }"
        ></TreeViewport>
        <TabView class="shrink-1 h-1/2 overflow-auto" :data="right"></TabView>
      </div>
    </div>
    <StatusViewport class="shrink" />
  </div>
</template>

<style>
#trifoliate5 {
  width: 100vw;
  height: 100vh;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import page from "./page.json";
import TWorkspace from "./type/tworkspace";
import { initRelation } from "./utils/JsonToDoc";

//初始化节点之间的关系

export default defineComponent({
  name: "Trifoliate5",
  data() {
    return {
      right: [
        {
          title: "prop",
          component: "PropViewport",
        },
        {
          title: "event",
          component: "EventViewport",
        },
        {
          title: "style",
          component: "StyleViewport",
        },
      ],
    };
  },
  mounted() {
    var payload = page;
    var hashIds = new Map();
    var workspace = new TWorkspace();
    var maxId = 0;

    initRelation(payload, null, 1, hashIds, null, maxId);

    // console.log(payload);
    this.$store.dispatch("page/initDocument", {
      document: payload,
      hashIds: hashIds,
      workspace: workspace,
      maxId: maxId,
    });
  },
});
</script>
