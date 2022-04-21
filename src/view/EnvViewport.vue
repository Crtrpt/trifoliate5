<template>
  <BaseView>
    <template v-slot:leading>
      <font-awesome-icon class="cursor-pointer px-2" icon="cubes" />
    </template>
    <template v-slot:title>
      <div class="text-gray-600 text-xs pl-2 py-2">{{ $t("node") }}</div>
    </template>
    <template v-slot:content>
      <div v-for="g in group" v-bind:key="g.name" class="select-none">
        <div
          class="p-2 title border text-xs text-gray-600 flex hover:bg-gray-200"
          @click="expland(g)"
        >
          <div class="grow">
            {{ g.name }}
          </div>

          <font-awesome-icon
            class="cursor-pointer text-gray-400"
            :icon="g.expland ? 'chevron-down' : 'chevron-left'"
          />
        </div>
        <div class="p-1 content border" v-if="g.expland">
          <template v-for="(i, idx) in g.list" v-bind:key="i">
            <div class="flex items-center" v-if="i.delete !== true">
              <div class="border grow flex">
                <input
                  class="p-1 w-1/3 border-r outline-none"
                  v-model="i.name"
                />
                <input
                  class="p-1 w-2/3 border-r outline-none"
                  v-model="i.value"
                />
              </div>
              <div class="p-1 flex shrink-1 text-xs text-gray-800">
                <font-awesome-icon
                  class="cursor-pointer px-1"
                  icon="add"
                  @click="add(i, idx, g)"
                />
                <font-awesome-icon
                  class="cursor-pointer px-1"
                  icon="trash"
                  @click="trash(i, idx, g)"
                />
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EnvViewport",
  methods: {
    expland(e: any) {
      e.expland = !e.expland;
    },
    add(i, idx, g) {
      g.list = [
        ...g.list.slice(0, idx + 1),
        {
          name: "newName",
          value: "newValue",
        },
        ...g.list.slice(idx + 1),
      ];
    },
    trash(i, idx, g) {
      g.list = [...g.list.slice(0, idx), ...g.list.slice(idx + 1)];
    },
  },
  data() {
    return {
      group: [
        {
          name: "系统变量",
          expland: true,
          list: [
            {
              name: "name",
              value: "value",
            },
          ],
        },
        {
          name: "参数变量",
          expland: true,
          list: [
            {
              name: "queryStringName",
              value: "queryStringValue",
            },
          ],
        },
      ],
    };
  },
});
</script>
