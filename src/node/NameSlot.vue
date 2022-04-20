<template>
    <div>
        <slot name="header"></slot>
        <slot name="default"></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name:"NameSlot"
})
</script>



