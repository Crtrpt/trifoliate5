<template>
  <div class="rule_view w-0 h-0">
    <div class="x_axis absolute h-8 w-full">
      <canvas
        ref="x_axis"
        :width="workspace?.width + workspace?.padding * 2"
        height="50"
      ></canvas>
    </div>
    <div class="y_axis absolute w-8 h-full border-r hover:shadow">
      <canvas ref="y_axis" style="width: inherit; height: inherit"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { mapGetters } from "vuex";
import { range } from "d3-array";

export default defineComponent({
  name: "RulerView",
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
      xCtx: null,
      yCtx: null,
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
        this.renderY();
      },
    },
  },
  methods: {
    renderX() {
      console.log(this.workspace);
      var start = -this.workspace?.padding;
      var end = this.workspace?.padding * 2 + this.workspace?.width;
      var ctx = this.xCtx;
      ctx.lineWidth = 0.1;
      range(-80, 1024 + 80 * 2, 10).forEach((i) => {
        console.log(i);
        ctx.beginPath();
        ctx.moveTo(i + 80, 0);
        if (i % 100 == 0) {
          ctx.lineTo(i + 80, 15);
          ctx.fillText(i - 100, i - 10, 25);
          //   ctx.strokeStyle = "#ffffff";
        } else if (i % 50 == 0) {
          ctx.lineTo(i + 80, 10);
          //   ctx.fillText(i, i - 10, 20);
        } else {
          //   ctx.strokeStyle = "#ff0000";
          ctx.lineTo(i + 80, 5);
        }

        ctx.stroke();
      });
    },
    renderY() {},
  },
  mounted() {
    this.xCtx = this.$refs.x_axis.getContext("2d");
    this.yCtx = this.$refs.y_axis.getContext("2d");
  },
});
</script>
