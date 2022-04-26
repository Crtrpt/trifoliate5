<template>
  <div class="rule_view w-0 h-0">
    <div class="x_axis absolute h-8 w-full border-b hover:shadow">
      <canvas ref="x_axis" style="width: inherit; height: inherit"></canvas>
    </div>
    <div class="y_axis absolute w-8 h-full border-r hover:shadow">
      <canvas ref="y_axis" style="width: inherit; height: inherit"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

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
        this.renderX();
        this.renderY();
      },
    },
  },
  methods: {
    renderX() {
      console.log(this.workspace);
      var start = -parseInt(this.workspace?.padding);
      var end =
        parseInt(this.workspace?.padding) * 2 + parseInt(this.workspace?.width);
    },
    renderY() {},
  },
  mounted() {
    this.xCtx = this.$refs.x_axis.getContext("2d");
    this.xCtx = this.$refs.y_axis.getContext("2d");
  },
});
</script>
