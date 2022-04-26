<template>
  <div class="grid_view w-full h-full pointer-events-none">
    <canvas ref="grid" style="width: inherit; height: inherit"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
        this.renderX();
        this.renderY();
      },
    },
  },
  methods: {
    renderX() {
      console.log(this.workspace);
      var start = -this.workspace?.padding;
      var end = this.workspace?.padding * 2 + this.workspace?.width;
    },
    renderY() {},
  },
  mounted() {
    this.ctx = this.$refs.grid.getContext("2d");
  },
});
</script>
