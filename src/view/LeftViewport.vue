<template>
  <BaseView>
    <template v-slot:content>
      <div v-for="g in group" v-bind:key="g.name">
          <div class="p-1 title border text-xs text-gray-400"> {{g.name}}</div>
          <div class="p-1 content border grid grid-cols-2  gap-1 " v-if="g.expland">
                 <div v-for="i in g.list" v-bind:key="i.name" class="border p-4 cursor-pointer hover:bg-gray-200">
                        {{i.name}}
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
  data() {
    return {
      group: [
        {
          name: "基础",
          expland:true,
          list: [
                {
                  name:"Node"
                },
                {
                  name:"Container"
                },
                 {
                  name:"NameSlot"
                }
          ],
        },
        {
          name: "测试",
          expland:true,
          list: [
                {
                  name:"text"
                }
          ],
        },
      ],
    };
  },
});
</script>
