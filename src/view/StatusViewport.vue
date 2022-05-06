<template>
  <div class="border-t bg-gray-100 px-2 flex h-8">
    <div class="w-1/6 flex items-center">
      <div class="text-xs px-2 mx-1 bg-gray-400 text-white rounded-full  whitespace-nowrap overflow-hidden">
        {{ date }}
      </div>
      <div class="text-xs px-2 mx-1 bg-gray-400 text-white rounded-full">
        {{ lastCommit }}
      </div>
    </div>
    <div class="flex grow border-r items-center">
      <div class="flex flex-row-reverse items-center">
        <PathView v-if="node != null" :node="node"></PathView>
      </div>
    </div>
    <div
      class="flex items-center flex-row-reverse"
      :style="{
        width: '300px',
      }"
    >
      <KeyboardMapping />
      <LanguageSelect />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "pinia";
import sign from "../sign.json";
import LanguageSelect from "./LanguageSelect.vue";
import { pageStore } from "../pinia/pageStore";

export default defineComponent({
  name: "StatusViewport",
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
  data() {
    return {
      ...sign,
    };
  },
  components: { LanguageSelect },
});
</script>