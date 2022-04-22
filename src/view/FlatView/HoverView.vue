<template>
  <div
    v-if="hoverNode != null && selectNode?.id != hoverNode?.id"
    :style="style"
    class="border border-dashed select-none pointer-events-none shadow"
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
      class="
        name
        text-blue-400
        bg-white
        border border-blue-400
        -top-7
        absolute
        rounded-full
        px-3
        py-0.5
        text-xs
      "
    >
      {{ hoverNode.name }}
    </div>

    <div class="name absolute -bottom-7 left-0 right-0 flex">
      <div
        class="
          mx-auto
          inline
          rounded-full
          border border-blue-500
          cursor-pointer
          text-blue-500
          px-3
          py-0.5
          text-xs
        "
      >
        {{ style.width }} {{ style.height }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "HoverView",
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
  computed: {
    ...mapGetters({
      selectNode: "page/getCurrentNode",
    }),
    hoverNode: {
      get() {
        var el: HTMLElement =
          this.$store.getters["page/getHoverNode"]?.attr["el"];
        if (el) {
          var rect = el?.getBoundingClientRect();
          var wrect = this.workspaceRef?.getBoundingClientRect();
          // console.log(rect);
          this.style.width = rect.width + "px";
          this.style.height = rect.height + "px";
          this.style.top = rect.top - wrect.top + "px";
          this.style.left = rect.left - wrect.left + "px";

          // console.log( this.style);
        }
        return this.$store.getters["page/getHoverNode"];
      },
      set(value: any) {},
    },
  },
  components: {},
});
</script>


<style scoped>
</style>


