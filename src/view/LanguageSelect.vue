<template>
  <Select
    :data="Lang"
    :select="LangSelect"
    :open="isOpen"
    icon="flag"
    @change="changeLangage"
  ></Select>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LanguageSelect",

  data() {
    return {
      LangSelect: 0,
      isOpen: false,
      Lang: [
        {
          name: "cn",
        },
        {
          name: "en",
        },
      ],
    };
  },
  methods: {
    changeLangage(i: any) {
      this.$i18n.locale = i.name;
    },

    open() {
      this.isOpen = true;
    },
  },
});
</script>