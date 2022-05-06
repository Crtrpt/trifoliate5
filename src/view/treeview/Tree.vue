<template>
  <div
    :class="{
      'bg-gray-300 text-black': selectNode?.id == data.id,
    }"
    class="text-sm"
    @click="click($event)"
    @mouseenter="mouseenter($event)"
    draggable="true"
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
        class="cursor-pointer px-2 text-gray-400 w-2 h-2"
        :icon="expland ? 'chevron-down' : 'chevron-right'"
      />
      <font-awesome-icon
        class="cursor-pointer px-2 text-gray-400 w-2 h-2"
        icon="cube"
        v-if="!data.slot"
      />
      <div class="grow flex items-center">
        <div v-tooltip="data.id">{{ data?.name }}</div>

        <div class="bg-gray-400 px-1 mx-0.5 text-xs rounded-full text-white">
          {{ data?.attr.get("index") }}
        </div>
        <div class="bg-gray-400 px-1 mx-0.5 text-xs rounded-full text-white">
          {{ data?.attr.get("slot") || "root" }}
        </div>
      </div>

      <div class="p-1 flex shrink-1 text-xs text-gray-400">
        <font-awesome-icon
          class="cursor-pointer px-1 hover:text-blue-400"
          icon="arrow-up"
        />
        <font-awesome-icon
          class="cursor-pointer px-1 hover:text-blue-500"
          icon="arrow-down"
        />
        <font-awesome-icon
          class="cursor-pointer px-1 hover:text-blue-500"
          :icon="data.attr.get('eye') ? 'eye' : 'eye-slash'"
          @click="setAttrToggle($event, 'eye')"
        />
        <font-awesome-icon
          class="cursor-pointer px-1 hover:text-blue-500"
          :icon="!data.attr.get('lock') ? 'unlock' : 'lock'"
          @click="setAttrToggle($event, 'lock')"
        />
        <font-awesome-icon
          class="cursor-pointer px-1 hover:text-blue-500"
          icon="trash"
          @click="removeNode($event)"
        />
      </div>
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
import { pageStore } from "../../pinia/pageStore";
import TNode from "../../type/tnode";

export default defineComponent({
  name: "Tree",
  props: {
    data: Object,
    selectNode: Object,
    hoverNode: Object,
  },
    setup() {
    const page = pageStore()
    return { page }
  },
  data() {
    return {
      expland: false,
    };
  },
  methods: {
    setAttrToggle(e: Event, attrName: String) {
      this.page.setAttrToggle({
        data: this.data,
        attrName: attrName,
      });
      e.stopPropagation();
    },
    removeNode(e: Event) {
      this.page.removeNode(this.data);
      e.stopPropagation();
    },
    mouseenter(e: Event) {
      this.page.setHoverNode(this.data);
      e.stopPropagation();
    },
    click(e: Event) {
      this.expland = !this.expland;
      this.page.setSelectNode(this.data);
      e.stopPropagation();
    },
  },
});
</script>