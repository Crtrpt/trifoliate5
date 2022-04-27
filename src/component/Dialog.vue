
<template>
  <Teleport to="body">
    <div
      v-if="display"
      class="
        overlay
        w-full
        h-full
        flex
        justify-center
        bg-black bg-opacity-60
        transition-all
      "
      @click="setDisplay(false)"
    >
      <div
        class="
          dialog
          w-1/2
          flex flex-col
          border
          p-2
          h-fit
          mt-10
          rounded
          shadow
          bg-white
        "
      >
        <slot name="title"></slot>

        <slot name="content"><div>content</div></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const display = ref(false);

const props = defineProps({
  open: Boolean,
});

const emit = defineEmits(["update:open"]);

const setDisplay = function (v: boolean) {
  display.value = v;
  emit("update:open", display);
};

watch(
  () => props.open,
  (n) => {
    display.value = n;
  }
);
</script>

<script lang="ts">
export default {
  name: "Dialog",
};
</script>


<style scoped>
.overlay {
  position: absolute;
  top: 0;
}
</style>