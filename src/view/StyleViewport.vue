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
      <div class="propList">
        <div
          v-for="(p, idx) in node.style"
          :key="idx"
          class="flex items-center text-gray-700"
        >
          <div class="border flex grow">
            <div class="w-1/3 p-1 border-r">{{ idx }}:</div>
            <input
              class="w-2/3 p-1 outline-none"
              :value="p"
              @change="changeProp($event, idx)"
            />
          </div>
          <div class="p-1 flex shrink-1 text-xs text-gray-800">
            <font-awesome-icon class="cursor-pointer px-1" icon="dot-circle" />
          </div>
        </div>
      </div>
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TNode from "../type/tnode";
import ShortPath from "./propview/ShortPath.vue";

export default defineComponent({
  name: "StyleViewport",
  computed: {
    node: {
      get() {
        return this.$store.getters["page/getCurrentNode"] as TNode;
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



