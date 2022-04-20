<template>
    <div>
        容器
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name:"Container"
})
</script>



