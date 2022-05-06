<template>
  <BaseView>
    <template v-slot:leading>
      <font-awesome-icon class="cursor-pointer px-2" icon="cubes-stacked" />
    </template>
    <template v-slot:title>
      <div class="text-gray-600 text-xs pl-2 py-2">{{ $t("struct") }}</div>
    </template>
    <template v-slot:content>
      <Tree
        v-for="node in document"
        :key="node"
        :data="node"
        :selectNode="selectNode"
        :hoverNode="hoverNode"
      ></Tree>
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { pageStore } from "../pinia/pageStore";

export default defineComponent({
  name: "TreeViewport",
  computed: {
    ...mapState(pageStore, {
      document: "getDocument",
      selectNode: "getCurrentNode",
      hoverNode: "getHoverNode",
    }),
  },
});
</script>



