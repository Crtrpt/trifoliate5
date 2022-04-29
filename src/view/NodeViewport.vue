<template>
  <BaseView>
    <template v-slot:leading>
      <font-awesome-icon class="cursor-pointer px-2" icon="cubes" />
    </template>
    <template v-slot:title>
      <div class="text-gray-600 text-xs pl-2 py-2">{{ $t("node") }}</div>
    </template>
    <template v-slot:content>
      <div v-for="g in group" v-bind:key="g.name" class="select-none">
        <div
          class="p-2 title border text-xs text-gray-600 flex hover:bg-gray-200"
          @click="expland(g)"
        >
          <div class="grow">{{ g.name }}</div>
          <font-awesome-icon
            class="cursor-pointer text-gray-400"
            :icon="g.expland ? 'chevron-down' : 'chevron-left'"
          />
        </div>
        <div class="p-1 content border grid grid-cols-2 gap-1" v-if="g.expland">
          <div
            v-for="i in g.list"
            v-bind:key="i.name"
            class="border p-1 px-4 cursor-pointer hover:bg-gray-200"
            :class="{
              'bg-gray-200': curNode?.name == i?.name || false,
            }"
            @dragstart="dragstart($event, i)"
            draggable="true"
            @click="click($event, i)"
          >
            {{ i.name }}
          </div>
        </div>
      </div>
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import DragNodeMixin from "../behavior/dragNode";

export default defineComponent({
  name: "NodeViewport",
  mixins: [DragNodeMixin],
  computed: {
    ...mapGetters({
      group: "nodeList/getNodeList",
      curNode: "nodeList/getCurNode",
    }),
  },
  methods: {
    click(e: Event, i: any) {
      this["nodeList/setCurNode"](i);
    },
    ...mapMutations(["nodeList/setCurNode"]),
    expland(e: any) {
      e.expland = !e.expland;
    },
  },
});
</script>
