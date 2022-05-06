<template>
  <BaseView v-if="node != null">
    <!-- <template v-slot:leading>
      <font-awesome-icon class="cursor-pointer px-2" icon="sliders" />
    </template>
    <template v-slot:title>
      <div class="text-gray-600 text-xs bg-gray-100 pl-2 py-2">
        {{ $t("prop") }}
      </div>
    </template> -->
    <template v-slot:content>
      <ShortPath :node="node"></ShortPath>
      <div class="propList p-1">
        <!-- <div class="border flex">
          <div class="w-1/3 border-r p-1">id:</div>
          <div class="w-1/3 p-1">{{ node.id }}</div>
        </div>
        <div class="border flex">
          <div class="w-1/3 border-r p-1">type:</div>
          <div class="w-1/3 p-1">{{ node.type }}</div>
        </div> -->
        <div
          v-for="(p, idx) in node.props"
          :key="p"
          class="border flex items-center text-gray-700"
        >
          <div class="flex flex-grow">
            <div class="w-1/3 p-1 shrink-0">{{ idx }}</div>
            <input
              class="border-x p-1 outline-none w-2/3"
              :value="p"
              @change="changeProp($event, idx)"
            />
          </div>
          <div class="flex text-xs text-gray-800">
            <font-awesome-icon class="cursor-pointer px-1" icon="dot-circle" />
          </div>
        </div>
      </div>
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { pageStore } from "../pinia/pageStore";
import TNode from "../type/tnode";
import ShortPath from "./propview/ShortPath.vue";

export default defineComponent({
  name: "PropViewport",
   setup() {
    const page = pageStore()
    return { page }
  },
  computed: {
    node: {
      get() {
        return this.page.getCurrentNode;
      },
      set(value) {},
    },
  },
  methods: {
    changeProp(e: any, name: any) {
      this.$store.dispatch("page/setCurrentProp", {
        name: name,
        value: e.target.value,
      });
    },
  },
  components: { ShortPath },
});
</script>



