<template>
  <div :style="style">
    <canvas ref="chart" width="400"></canvas>

    <!-- <Teleport to="#select_top_left">
      <div>快速配置</div>
    </Teleport> -->
  </div>
</template>

<script lang="ts">
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Chartjs",
  props: {
    style: {
      type: Object,
    },
    type: {
      type: String,
    },
    data: {
      type: String,
    },
  },
  watch: {
    type: {
      handler() {
        this.render();
      },
    },
    data: {
      handler() {
        this.render();
      },
    },
  },
  data() {
    return {
      ins: null,
    };
  },
  methods: {
    render() {
      if (this.ins) {
        this.ins.destroy();
        const chart = new Chart(this.$refs.chart, {
          type: this.type,
          data: JSON.parse(this.data),
          options: {
            layout: {
              padding: 0,
            },
          },
        });

        this.ins = chart;
      } else {
        const chart = new Chart(this.$refs.chart, {
          type: this.type,
          data: JSON.parse(this.data),
          options: {
            layout: {
              padding: 0,
            },
          },
        });

        this.ins = chart;
      }
    },
  },
  unmounted() {
    if (this.ins) {
      this.ins.destroy();
    }
  },
  mounted() {
    this.render();
  },
});
</script>
