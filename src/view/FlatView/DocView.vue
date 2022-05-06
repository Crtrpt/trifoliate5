<template>
  <div
    class="doc border shadow-sm"
    @drop="drop($event)"
    @dragenter="dragenter($event)"
    @dragleave="dragleave($event)"
    @dragover="dragover($event)"
    :style="{
      width: (workspace?.width || 1024) + 'px',
      height: (workspace?.height || 800) + 'px',
    }"
  >
    <div class="absolute -top-6 text-gray-400 flex text-xs">
      <div
        class="
          border
          px-2
          mx-1
          rounded-full
          bg-gray-200
          first:
          ml-0
          hover:text-gray-500 hover:bg-gray-300
          cursor-pointer
        "
        v-tooltip="$t('name')"
      >
        {{ workspace?.name }}
      </div>
      <div
        v-tooltip="$t('size')"
        class="
          border
          px-2
          mx-1
          rounded-full
          hover:text-gray-500 hover:bg-gray-300
          cursor-pointer
        "
      >
        {{ workspace?.width }}*{{ workspace?.height }}
      </div>
    </div>

    <template v-for="node in document" :key="node">
      <AbstractElement :context="node"></AbstractElement>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import AbstractElement from "../../abstract/AbstractElement.vue";
import DragNodeMixin from "../../behavior/dragNode";
import { pageStore } from "../../pinia/pageStore";

export default defineComponent({
  mixins: [DragNodeMixin],
  name: "DocView",
  setup() {
    const page = pageStore()
    return { page }
  },
  computed: {
    ...mapState( pageStore,{
      document: "getDocument",
      selectNode: "getCurrentNode",
      hoverNode: "getHoverNode",
      workspace: "getWorkspace",
    }),
  },
  components: { AbstractElement },
});
</script>



