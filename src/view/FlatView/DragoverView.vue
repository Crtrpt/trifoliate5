<template>
  <div
    v-if="dragoverNode != null"
    :style="style"
    class="border border-dashed pointer-events-none select-none shadow"
  >
    <div
      class="
        w-full
        h-full
        bg-blue-200 bg-opacity-10
        transition-all
        border-blue-400
        opacity-60
      "
    ></div>
    <div
      v-if="parseInt(style.height) > 30"
      class="
        name
        text-blue-400
        bg-white
        opacity-50
        border border-blue-400
        absolute
        flex
        justify-center
        items-center
        w-full
        h-full
        top-0
        text-xs
        pointer-events-none
        select-none
      "
    >
      <font-awesome-icon icon="add" />
      <div>放下</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "pinia";
import { pageStore } from "../../pinia/pageStore";

export default defineComponent({
  name: "DragoverView",
  props: {
    workspaceRef: Object,
  },
  data() {
    return {
      style: {
        width: "0px",
        height: "0px",
        top: "0px",
        left: "0px",
      },
    };
  },
  setup() {
    const page = pageStore()
    return { page }
  },
  computed: {
    dragoverNode: {
      get() {
        console.log(this.page);
        var dragNode = this.page.getDragoverNode;
        // console.log("dragover============");
        // console.log(dragNode);
        if (dragNode) {
          var el: HTMLElement = dragNode.attr.get("el");
          var rect = el?.getBoundingClientRect();
          var wrect = this.workspaceRef?.getBoundingClientRect();

          this.style.width = rect.width + "px";
          this.style.height = rect.height + "px";
          this.style.top = rect.top - wrect.top + "px";
          this.style.left = rect.left - wrect.left + "px";
        }
        return dragNode;
      },
      set(value: any) {},
    },
  },

});
</script>




