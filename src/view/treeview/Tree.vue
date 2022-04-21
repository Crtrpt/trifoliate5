<template>
  <div
    :class="{
      'bg-gray-300 text-black': selectNode?.id == data.id,
    }"
    class="text-sm"
    @click="click($event)"
    @mouseenter="mouseenter($event)"
  >
    <div
      class="
        cursor-pointer
        py-1
        flex
        items-center
        hover:bg-gray-200 hover:text-black
      "
      @click="click"
    >
      <font-awesome-icon
        v-if="data.slot"
        class="cursor-pointer px-2 text-gray-400"
        :icon="expland ? 'chevron-down' : 'chevron-right'"
      />
      <font-awesome-icon
        class="cursor-pointer px-2 text-gray-400"
        icon="cube"
        v-if="!data.slot"
      />
      <div>{{ data.name }}</div>
    </div>
    <template v-if="expland">
      <div
        v-for="s in data.slot"
        :key="s"
        :style="{
          paddingLeft: 10 * data.level + 'px',
        }"
      >
        <Tree
          v-for="n in s"
          :key="n"
          :data="n"
          :selectNode="selectNode"
          :hoverNode="hoverNode"
        ></Tree>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tree",
  props: {
    data: Object,
    selectNode: Object,
    hoverNode: Object,
  },
  data() {
    return {
      expland: false,
    };
  },
  methods: {
    mouseenter(e: Event) {
      this.$store.dispatch("page/hoverNode", this.data);
      e.stopPropagation();
    },
    click(e: Event) {
      this.expland = !this.expland;
      this.$store.dispatch("page/selectNode", this.data);
      e.stopPropagation();
    },
  },
});
</script>