<template>
  <div
    class="border shadow-sm"
    :style="{
      width: '9000px',
      height: '9000px',
    }"
  >
    <template v-for="node in document" :key="node" >
        <AbstractElement :context="node"></AbstractElement>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AbstractElement from "../../abstract/AbstractElement.vue";

export default defineComponent({
    name: "DocView",
    computed: {
        document: {
            get() {
                return this.$store.getters["page/getDocument"];
            },
            set(value) { },
        },
    },
    components: { AbstractElement }
});
</script>



