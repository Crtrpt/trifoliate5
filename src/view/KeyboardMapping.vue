
<template>
  <Dialog v-model:open="isOpen"></Dialog>

  <font-awesome-icon
    class="cursor-pointer px-2 text-gray-600"
    icon="keyboard"
    @click="open"
  />
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Dialog from "../component/Dialog.vue";

export default defineComponent({
  name: "KeyboardMapping",

  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
  },
  components: { Dialog },
});
</script>