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
        border-r
      "
    >
      Trifoliate5
      <div class="text-xs px-2 mx-2 bg-gray-400 text-white rounded-full">
        v{{ Version }}
      </div>
    </a>
    <div class="flex grow border-r">
      <div class="flex items-center grow">
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
        <div v-tooltip="$t('copy')">
          <font-awesome-icon
            class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
            icon="copy"
            @click="$store.dispatch('page/copy')"
          />
        </div>
        <div v-tooltip="$t('cut')">
          <font-awesome-icon
            class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
            icon="cut"
            @click="$store.dispatch('page/cut')"
          />
        </div>
        <div v-tooltip="$t('paste')">
          <font-awesome-icon
            class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
            icon="paste"
            @click="$store.dispatch('page/paste')"
          />
        </div>
      </div>
      <div class="flex items-center">
        <div v-tooltip="$t('publish')">
          <font-awesome-icon
            class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
            icon="right-to-bracket"
            @click="$store.dispatch('page/publish')"
          />
        </div>
      </div>
    </div>
    <div
      :style="{
        width: '300px',
      }"
    ></div>
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
