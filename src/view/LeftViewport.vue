<template>
  <BaseView>
    <template v-slot:leading>
            <font-awesome-icon  class="cursor-pointer px-2" icon="cubes" />
    </template>
    <template v-slot:title>
      <div class="text-gray-600 text-xs  pl-2 py-2">{{$t('node')}}</div>
    </template>
    <template v-slot:content>
      <div v-for="g in group" v-bind:key="g.name" class=" select-none">
        <div
          class="p-2 title border text-xs text-gray-600 flex hover:bg-gray-200"
          @click="expland(g)"
        >
          <div class="grow">{{ g.name }}</div>
          <font-awesome-icon
            class="cursor-pointer text-gray-400"
            :icon="g.expland ? 'chevron-down' : 'chevron-left'"
          />
        </div>
        <div class="p-1 content border grid grid-cols-2 gap-1" v-if="g.expland">
          <div
            v-for="i in g.list"
            v-bind:key="i.name"
            class="border p-4 cursor-pointer hover:bg-gray-200"
          >
            {{ i.name }}
          </div>
        </div>
      </div>
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LeftViewport",
  methods: {
    expland(e:any) {
      e.expland = !e.expland;
    },
  },
  data() {
    return {
      group: [
        {
          name: "基础",
          expland: true,
          list: [
            {
              name: "Node",
            },
            {
              name: "Container",
            },
            {
              name: "NameSlot",
            },
          ],
        },
        {
          name: "测试",
          expland: true,
          list: [
            {
              name: "text",
            },
          ],
        },
      ],
    };
  },
});
</script>
