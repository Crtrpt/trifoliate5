<template>
  <div class="rule_view w-0 h-0">
    <div
      class="x_axis absolute h-8 w-full"
      :style="{
        paddingLeft: workspace?.padding + 'px',
      }"
    >
      <canvas
        ref="x_axis"
        :width="workspace?.width + workspace?.padding * 2"
        height="50"
      ></canvas>
    </div>
    <div
      class="y_axis absolute w-8 h-full"
      :style="{
        paddingTop: workspace?.padding + 'px',
      }"
    >
      <canvas
        ref="y_axis"
        width="50"
        :height="workspace?.height + workspace?.padding * 2"
      ></canvas>
    </div>

    <div
      v-if="selectNode != null"
      class="width_figure absolute border border-blue-400 bg-blue-200 h-2 opacity-50 text-center transition-all hover:bg-blue-300 cursor-grab"
      :style="{
        height: '30px',
        width: style.width,
        left: style.left,
      }"
    >
      <div
        class="absolute w-2 h-full hover:bg-blue-300 cursor-e-resize left-0"
      ></div>
      <div
        class="absolute w-2 h-full hover:bg-blue-300 cursor-e-resize right-0"
      ></div>
    </div>

    <div
      v-if="selectNode != null"
      class="height_figure absolute border border-blue-400 bg-blue-200 w-2 opacity-50 transition-all cursor-grab hover:bg-blue-300"
      :style="{
        width: '30px',
        height: style.height,
        top: style.top,
      }"
    >
      <div
        class="absolute h-2 w-full hover:bg-blue-300 cursor-n-resize top-0"
      ></div>
      <div
        class="absolute h-2 w-full hover:bg-blue-300 cursor-n-resize bottom-0"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { mapGetters } from "pinia";
import { range } from "d3-array";
import { pageStore } from "../../pinia/pageStore";

export default defineComponent({
  name: "RulerView",
  setup() {
    const page = pageStore();
    return { page };
  },
  computed: {
    ...mapGetters(pageStore, {
      document: "getDocument",
      hoverNode: "getHoverNode",
      workspace: "getWorkspace",
    }),
    selectNode: {
      get() {
        var node = this.page.getCurrentNode;
        // console.log("==================================");
        if (node) {
          var el = node.attr.get("el");
          var rect = el?.getBoundingClientRect();
          var wrect = this.$parent?.$el?.getBoundingClientRect();
          this.style.width = parseInt(rect.width) + "px";
          this.style.height = parseInt(rect.height) + "px";
          this.style.top = rect.top - wrect.top + "px";
          this.style.left = rect.left - wrect.left + "px";
        }

        return node;
      },
      set(value: any) {},
    },
  },
  data() {
    return {
      xCtx: null,
      yCtx: null,
      gap: 100,
      style: {
        width: "0px",
        height: "0px",
        top: "0px",
        left: "0px",
      },
    };
  },
  watch: {
    selectNode: {
      deep: true,
      handler(n, o) {
        setTimeout(() => {
          if (n) {
            var el = n.attr.get("el");
            var rect = el?.getBoundingClientRect();
            var wrect = this.$parent?.$el?.getBoundingClientRect();
            // console.log(rect);
            this.style.width = parseInt(rect.width) + "px";
            this.style.height = parseInt(rect.height) + "px";
            this.style.top = rect.top - wrect.top + "px";
            this.style.left = rect.left - wrect.left + "px";
          }
        }, 500);
      },
    },
    workspace: {
      deep: true,
      handler(n, o) {
        nextTick(() => {
          this.renderX();
          this.renderY();
        });
      },
    },
  },
  methods: {
    renderX() {
      var start = 0;
      var end = this.workspace?.width;
      var ctx = this.xCtx;
      ctx.lineWidth = 0.1;
      range(-start, end, 10).forEach((x) => {
        var i = x;
        // console.log(i);
        ctx.beginPath();
        ctx.moveTo(i, 0);
        if (i % 100 == 0) {
          ctx.lineTo(i, 15);
          ctx.fillText(i, i - 10, 25);
        } else if (i % 50 == 0) {
          ctx.lineTo(i, 10);
          ctx.fillText(i, i - 4, 22);
        } else {
          ctx.lineTo(i, 5);
        }

        ctx.stroke();
      });
    },
    renderY() {
      var start = 0;
      var end = this.workspace?.height;
      var ctx = this.yCtx;
      ctx.lineWidth = 0.1;
      range(-start, end, 10).forEach((y) => {
        // console.log(i);
        var i = y;
        // console.log(i);
        ctx.beginPath();
        ctx.moveTo(0, i);

        if (i % 100 == 0) {
          ctx.lineTo(15, i);
          ctx.fillText(i, 18, i + 4);
          //   ctx.strokeStyle = "#ffffff";
        } else if (i % 50 == 0) {
          ctx.lineTo(10, i);
          ctx.fillText(i, 18, i + 4);
          //   ctx.fillText(i, i - 10, 20);
        } else {
          ctx.lineTo(5, i);
          //   ctx.strokeStyle = "#ff0000";
        }

        ctx.stroke();
      });
    },
  },
  mounted() {
    this.xCtx = this.$refs.x_axis.getContext("2d");
    this.yCtx = this.$refs.y_axis.getContext("2d");
  },
});
</script>
