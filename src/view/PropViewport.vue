<template>
  <BaseView v-if="node != null">
    <template v-slot:leading>
            <font-awesome-icon  class="cursor-pointer px-2" icon="sliders" />
    </template>
    <template v-slot:title>
       <div class=" text-gray-600 text-xs  bg-gray-100  pl-2 py-2 ">{{$t('prop')}}</div>
    </template>
    <template v-slot:content>
      <div class="flex">
        <div
          v-if="node.parent != null && node.parent.parent != null"
          class="px-1"
        >
          {{ node.parent.parent.name }}
        </div>
        <div v-if="node.parent != null && node.parent.parent != null">/</div>
        <div v-if="node.parent != null" class="px-1">{{ node.parent.name }}</div>
        <div v-if="node.parent != null">/</div>
        <div class="px-1">{{ node.name }}</div>
      </div>
      <div class="propList">
        <div class="border flex">
          <div class="w-1/3 border-r p-1">id:</div>
          <div class="w-1/3 p-1">{{ node.id }}</div>
        </div>
        <div class="border flex">
          <div class="w-1/3 border-r p-1">type:</div>
          <div class="w-1/3 p-1">{{ node.type }}</div>
        </div>
        <div v-for="(p, idx) in node.props" :key="p" class="border flex">
          <div class="w-1/3 border-r p-1">{{ idx }}:</div>
          <input
            class="w-1/3 p-1"
            :value="p"
            @change="changeProp($event, idx)"
          />
        </div>
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



