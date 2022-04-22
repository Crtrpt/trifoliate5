<template>
  <div v-if="selectNode != null" :style="style">
    <div
      class="
        w-full
        h-full
        border
        bg-blue-200 bg-opacity-10
        transition-all
        border-blue-600
        opacity-80
        select-none
        pointer-events-none
        shadow-inner
      "
    ></div>

    <div
      class="
        name
        border border-blue-500
        bg-blue-500
        hover:bg-blue-600
        cursor-pointer
        text-white
        absolute
        -top-7
        rounded-full
        px-3
        py-0.5
        text-xs
      "
    >
      {{ selectNode.name }}
    </div>

    <div class="name absolute -bottom-6 left-0 right-0 flex">
      <div
        class="
          mx-auto
          inline
          rounded-full
          border
          bg-blue-500
          hover:bg-blue-600
          cursor-pointer
          text-white
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

export default defineComponent({
  name: "SelectView",
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
    selectNode: {
      get() {
        var el: HTMLElement =
          this.$store.getters["page/getCurrentNode"]?.attr["el"];
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

        return this.$store.getters["page/getCurrentNode"];
      },
      set(value: any) {},
    },
  },
  components: {},
});
</script>



