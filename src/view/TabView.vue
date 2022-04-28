<template>
  <div>
    <div class="title flex">
      <div
        class="
          p-1
          px-2
          flex
          items-center
          text-gray-400
          bg-gray-50
          cursor-pointer
        "
        v-for="(i, idx) in data"
        v-bind:key="i"
        :class="{
          'bg-gray-100': idx == curSelect,
        }"
        @click="selectIdx(idx)"
      >
        <font-awesome-icon class="px-1 cursor-pointer" icon="sliders" />
        <div class="text-xs pl-1 py-1 text-gray-600">
          {{ $t(i.title) }}
        </div>
      </div>
    </div>
    <component :is="data[curSelect].component"></component>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabView",
  props: {
    data: Array,
    select: Number,
  },
  data() {
    return {
      curSelect: this.select || 0,
    };
  },
  methods: {
    selectIdx(idx: Number) {
      this.curSelect = idx;
    },
  },
  created() {
    // console.log(this.$slots.default);
  },
});
</script>