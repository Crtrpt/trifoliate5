<template>
  <BaseView v-if="node != null">
    <template v-slot:content>
      <div class="border flex">
        <div class="w-1/2 border-r p-1">id:</div>
        <div class="w-1/2 p-1">{{ node.id }}</div>
      </div>
      <div class="border flex">
        <div class="w-1/2 border-r p-1">type:</div>
        <div class="w-1/2 p-1">{{ node.type }}</div>
      </div>
      <div v-for="(p, idx) in node.props" :key="p" class="border flex">
        <div class="w-1/2 border-r p-1">{{ idx }}:</div>
        <input class="w-1/2 p-1" :value="p" @change="changeProp($event, idx)" />
      </div>
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropViewport",
  computed: {
    node: {
      get() {
        return this.$store.getters["page/getCurrentNode"];
      },
      set(value) {},
    },
  },
  methods: {
    changeProp(e: any, name: any) {
      this.$store.dispatch("page/setCurrentProp", {
        name: name,
        value: e.target.value,
      });
    },
  },
});
</script>



