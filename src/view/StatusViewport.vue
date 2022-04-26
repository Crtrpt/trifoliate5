<template>
  <div class="border-t bg-gray-100 px-2 flex h-8">
    <div class="w-1/6"></div>
    <div class="flex grow border-r items-center">
      <div class="flex flex-row-reverse items-center">
        <PathView v-if="node != null" :node="node"></PathView>
      </div>
    </div>
    <div
      class="flex flex-row-reverse items-center"
      :style="{
        width: '300px',
      }"
    >
      <div class="text-xs px-2 mx-1 bg-gray-400 text-white rounded-full">
        {{ date }}
      </div>
      <div class="text-xs px-2 mx-1 bg-gray-400 text-white rounded-full">
        {{ lastCommit }}
      </div>
      <font-awesome-icon
        class="cursor-pointer px-2 text-gray-600"
        icon="keyboard"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import sign from "../sign.json";

export default defineComponent({
  name: "StatusViewport",
  computed: {
    node: {
      get() {
        return this.$store.getters["page/getCurrentNode"] as TNode;
      },
      set(value) {},
    },
  },
  data() {
    return {
      ...sign,
    };
  },
});
</script>