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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import RulerView from "./RulerView.vue";

export default defineComponent({
  name: "WorkSpaceView",
  components: { RulerView },
  computed: {
    ...mapGetters({
      workspace: "page/getWorkspace",
    }),
  },
});
</script>



