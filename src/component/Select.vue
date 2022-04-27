
<template>
  <div
    class="select flex flex-col h-fit rounded relative cursor-pointer text-xs"
  >
    <div class="flex items-center" @click="setToggle()">
      <font-awesome-icon
        class="cursor-pointer text-gray-600 px-2"
        :icon="icon"
      />
      <div>{{ data[select].name }}</div>
    </div>
    <div class="border absolute bg-white right-0 bottom-6" v-if="open">
      <div
        v-for="(i, idx) in data"
        :key="idx"
        @click="setSelect(idx)"
        class="px-2 py-1 w-20 hover:bg-gray-100 flex items-center"
      >
        <div>{{ i.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const select = ref(0);
const open = ref(false);

const props = defineProps({
  data: Array,
  select: Number,
  open: Boolean,
  icon: String,
});

const emit = defineEmits(["update:open", "update:select", "change"]);

const setSelect = function (v: number) {
  select.value = v;
  emit("change", props.data[select.value]);
  setOpen(false);
};

const setOpen = function (v: boolean) {
  open.value = v;
  emit("update:open", open);
};

const setToggle = function () {
  open.value = !open.value;
  emit("update:open", open);
};

watch(
  () => props.select,
  (n) => {
    select.value = n || 0;
  }
);

watch(
  () => props.open,
  (n) => {
    open.value = n;
  }
);
</script>

<script lang="ts">
export default {
  name: "Select",
};
</script>


<style scoped>
.overlay {
  position: absolute;
  top: 0;
}
</style>