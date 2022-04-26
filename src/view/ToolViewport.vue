<template>
  <div class="flex hover:shadow bg-gray-100 border-b border-gray-200">
    <a
      :href="repository"
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
      <div class="text-xs px-2 mx-1 bg-gray-400 text-white rounded-full">
        v{{ version }}
      </div>
    </a>
    <div class="flex grow border-r">
      <div class="flex items-center grow">
        <div class="flex items-center px-4">
          <div v-tooltip="$t('open') + ' Ctrl+O'">
            <font-awesome-icon
              class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
              icon="folder-open"
              @click="$store.dispatch('page/open')"
            />
          </div>
          <div v-tooltip="$t('save') + ' Ctrl+S'">
            <font-awesome-icon
              class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
              icon="save"
              @click="$store.dispatch('page/save')"
            />
          </div>
        </div>
        <div v-tooltip="$t('redo') + ' Ctrl+Z'">
          <font-awesome-icon
            class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
            icon="redo"
            @click="$store.dispatch('page/redo')"
          />
        </div>
        <div v-tooltip="$t('undo') + ' Ctrl+Y'">
          <font-awesome-icon
            class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
            icon="undo"
            @click="$store.dispatch('page/undo')"
          />
        </div>
        <div v-tooltip="$t('copy') + ' Ctrl+C'">
          <font-awesome-icon
            class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
            icon="copy"
            @click="$store.dispatch('page/copy')"
          />
        </div>
        <div v-tooltip="$t('cut') + ' Ctrl+C'">
          <font-awesome-icon
            class="cursor-pointer px-2 text-gray-400 hover:text-gray-600"
            icon="cut"
            @click="$store.dispatch('page/cut')"
          />
        </div>
        <div v-tooltip="$t('paste') + ' Ctrl+V'">
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
      class="flex items-center justify-end px-5"
      :style="{
        width: '300px',
      }"
    >
      <div>En/Cn</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import sign from "../sign.json";

export default defineComponent({
  name: "ToolViewport",
  computed: {},
  data() {
    return {
      ...sign,
    };
  },
});
</script>
