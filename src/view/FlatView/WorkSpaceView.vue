<template>
  <div class="workspace h-full w-full overflow-auto relative">
    <div
      class="content absolute"
      :style="{
        padding: '80px',
        width: 'auto',
      }"
    >
      <div class="relative bg-white">
        <slot class=""></slot>
      </div>
    </div>

    <RulerView></RulerView>
    <GridView></GridView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "pinia";
import { pageStore } from "../../pinia/pageStore";

export default defineComponent({
  name: "WorkSpaceView",
  computed: {
    ...mapGetters(pageStore, {
      workspace: "getWorkspace",
    }),
  },
});
</script>



