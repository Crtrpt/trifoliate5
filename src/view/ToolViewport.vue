<template>
  <div class="flex hover:shadow">
    <a
      :href="Href"
      class="
        text-2xl
        p-3
        w-1/6
        text-gray-400
        flex
        items-baseline
        cursor-pointer
      "
    >
      Trifoliate5
      <div class="text-xs px-2 mx-2 bg-gray-400 text-white rounded-full">
        v{{ Version }}
      </div>
    </a>
    <div class="flex items-center">
      <div v-tooltip="$t('redo')">
        <font-awesome-icon
          class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
          icon="redo"
          @click="$store.dispatch('page/redo')"
        />
      </div>
      <div v-tooltip="$t('undo')">
        <font-awesome-icon
          class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
          icon="undo"
          @click="$store.dispatch('page/undo')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import pack from "../../package.json";

console.log(pack.version);
console.log(pack.repository);
export default defineComponent({
  name: "ToolViewport",
  computed: {},
  data() {
    return {
      Href: pack.repository,
      Version: pack.version,
    };
  },
});
</script>
