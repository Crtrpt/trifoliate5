<template>
  <div
    class="doc border shadow-sm"
    :style="{
      width: '9000px',
      height: '9000px',
    }"
  >
    <template v-for="node in document" :key="node">
      <AbstractElement :context="node"></AbstractElement>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import AbstractElement from "../../abstract/AbstractElement.vue";

export default defineComponent({
  name: "DocView",
  computed: {
    ...mapGetters({
      document: "page/getDocument",
      selectNode: "page/getCurrentNode",
      hoverNode: "page/getHoverNode",
    }),
  },
  components: { AbstractElement },
});
</script>



