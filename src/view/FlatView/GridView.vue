<template>
  <div class="grid_view w-full h-full pointer-events-none absolute">
    <canvas
      ref="grid"
      :width="workspace?.width + workspace?.padding * 2"
      :height="workspace?.height + workspace?.padding * 2"
    ></canvas>
  </div>
</template>

<script lang="ts">
import { range } from "d3";
import { defineComponent, nextTick } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "GridView",
  computed: {
    ...mapGetters({
      document: "page/getDocument",
      selectNode: "page/getCurrentNode",
      hoverNode: "page/getHoverNode",
      workspace: "page/getWorkspace",
    }),
  },
  data() {
    return {
      ctx: null,
      gap: 100,
    };
  },
  watch: {
    workspace: {
      deep: true,
      handler(n, o) {
        nextTick(() => {
          this.renderX();
        });
      },
    },
  },
  methods: {
    renderX() {
      var start = -this.workspace?.padding;
      var end = this.workspace?.padding + this.workspace?.width;
      var end2 = this.workspace?.padding + this.workspace?.height;
      var ctx = this.ctx;
      ctx.lineWidth = 0.1;
      range(-start, end, 100).forEach((i) => {
        console.log(i);
        ctx.beginPath();
        ctx.moveTo(i, this.workspace?.padding);
        ctx.lineTo(i, end2);
        ctx.stroke();
      });
      range(-start, end2, 100).forEach((i) => {
        ctx.beginPath();
        ctx.moveTo(this.workspace?.padding, i);
        ctx.lineTo(end, i);
        ctx.stroke();
      });
    },
    renderY() {},
  },
  mounted() {
    this.ctx = this.$refs.grid.getContext("2d");
  },
});
</script>

function abs(padding: any) {
  throw new Error("Function not implemented.");
}
