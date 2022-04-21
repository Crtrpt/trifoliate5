<template>
  <div
    v-if="selectNode != null"
    class="
      border-2
      transition-all
      border-blue-600
      opacity-80
      select-none
      pointer-events-none
    "
    :style="style"
  ></div>
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
          var wrect = this.workspaceRef.getBoundingClientRect();
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



