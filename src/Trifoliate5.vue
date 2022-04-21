<template>
  <div id="trifoliate5" class="flex flex-row w-fit overflow-hidden">
    <LeftViewport class="w-1/6 shrink-0"></LeftViewport>
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
      <PropViewport class="shrink-1 h-1/2 overflow-auto" />
    </div>
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
import TNode from "./type/tnode";

//初始化节点之间的关系
function initRelation(
  node: any,
  parent: any,
  level: number,
  hashIds: Map<string, any>
) {
  node.forEach((n: any) => {
    n.parent = parent;
    n.level = level;
    n.attr = [];
    hashIds.set(n.id, n);
    for (const key in n.slot) {
      var slot = n.slot[key];
      initRelation(slot, n, level + 1, hashIds);
    }
    n as TNode;
  });
}

export default defineComponent({
  name: "Trifoliate5",
  mounted() {
    var payload = page;
    var hashIds = new Map();
    initRelation(payload, null, 1, hashIds);
    // console.log(payload);
    this.$store.dispatch("page/initDocument", {
      document: payload,
      hashIds: hashIds,
    });
  },
});
</script>
