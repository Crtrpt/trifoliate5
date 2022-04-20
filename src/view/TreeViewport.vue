<template>
    <BaseView>
    <template v-slot:content>
       <Tree v-for="node in document" :key="node" :data="node"></Tree>
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name:"TreeViewport",
    computed: {
        document: {
            get() {
                return this.$store.getters["page/getDocument"];
            },
            set(value) { },
        },
    },
})
</script>



