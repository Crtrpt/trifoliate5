<template>
  <BaseView>
    <template v-slot:leading>
      <font-awesome-icon class="cursor-pointer px-2" icon="cubes" />
    </template>
    <template v-slot:title>
      <div class="text-gray-600 text-xs pl-2 py-2">{{ $t("variable") }}</div>
    </template>
    <template v-slot:content>
      <div class="select-none flex flex-col flex-grow">
        <div
          class="p-2 title border text-xs text-gray-600 flex hover:bg-gray-200"
          @click="expland(query)"
        >
          <div class="grow">
            {{ $t(query.name) }}
          </div>

          <font-awesome-icon
            class="cursor-pointer text-gray-400"
            :icon="query.expland ? 'chevron-down' : 'chevron-left'"
          />
        </div>
        <div
          class="p-1 content border"
          :class="{
            grow: query.expland,
          }"
          v-if="query.expland"
        >
          <template v-for="(i, idx) in query.list" v-bind:key="i">
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
                <input type="checkbox" v-model="i.available" />
                <font-awesome-icon
                  class="cursor-pointer px-1"
                  icon="add"
                  @click="add(i, idx, query)"
                />
                <font-awesome-icon
                  class="cursor-pointer px-1"
                  icon="trash"
                  @click="trash(i, idx, query)"
                />
              </div>
            </div>
          </template>
        </div>
        <div
          class="p-2 title border text-xs text-gray-600 flex hover:bg-gray-200"
          @click="expland(system)"
        >
          <div class="grow">
            {{ $t(system.name) }}
          </div>

          <font-awesome-icon
            class="cursor-pointer text-gray-400"
            :icon="system.expland ? 'chevron-down' : 'chevron-left'"
          />
        </div>
        <div
          class="p-1 content border"
          :class="{
            grow: system.expland,
          }"
          v-if="system.expland"
        >
          <template v-for="(i, idx) in system.list" v-bind:key="i">
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
                <input type="checkbox" v-model="i.isOver" />
                <font-awesome-icon
                  class="cursor-pointer px-1"
                  icon="add"
                  @click="add(i, idx, system)"
                />
                <font-awesome-icon
                  class="cursor-pointer px-1"
                  icon="trash"
                  @click="trash(i, idx, system)"
                />
              </div>
            </div>
          </template>
        </div>
        <div
          class="p-2 title border text-xs text-gray-600 flex hover:bg-gray-200"
          @click="expland(page)"
        >
          <div class="grow">
            {{ $t(page.name) }}
          </div>

          <font-awesome-icon
            class="cursor-pointer text-gray-400"
            :icon="query.expland ? 'chevron-down' : 'chevron-left'"
          />
        </div>
        <div
          class="p-1 content border"
          :class="{
            grow: page.expland,
          }"
          v-if="page.expland"
        >
          <template v-for="(i, idx) in page.list" v-bind:key="i">
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
                <input type="checkbox" v-model="i.available" />
                <font-awesome-icon
                  class="cursor-pointer px-1"
                  icon="add"
                  @click="add(i, idx, page)"
                />
                <font-awesome-icon
                  class="cursor-pointer px-1"
                  icon="trash"
                  @click="trash(i, idx, page)"
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

console.log();

export default defineComponent({
  name: "EnvViewport",
  methods: {
    expland(c: any) {
      c.expland = !c.expland;
    },
    add(i: number, idx: number, c: any) {
      c.list = [
        ...c.list.slice(0, idx + 1),
        {
          name: "newName",
          value: "newValue",
        },
        ...c.list.slice(idx + 1),
      ];
    },
    trash(i: number, idx: number, c: any) {
      c.list = [...c.list.slice(0, idx), ...c.list.slice(idx + 1)];
    },
  },
  // watch: {
  //   "$route.query": {
  //     deep: true,
  //     handler(n, o) {
  //       console.log(n);
  //       var query = [];
  //       for (var p in n) {
  //         query.push({
  //           name: p,
  //           value: n[p],
  //         });
  //       }
  //       this.query.list = query;
  //     },
  //   },
  // },
  data() {
    return {
      system: {
        name: "system_variable",
        expland: false,
        list: [
          {
            name: "name",
            value: "value",
            over: true,
          },
          {
            name: "name1",
            value: "value1",
            over: false,
          },
        ],
      },
      page: {
        name: "page_variable",
        expland: false,
        list: [
          {
            name: "name",
            value: "value",
            over: true,
          },
        ],
      },
      query: {
        name: "query_variable",
        expland: true,
        list: [
          {
            name: "test",
            value: "test",
            isOver: false,
          },
        ],
      },
    };
  },
});
</script>
