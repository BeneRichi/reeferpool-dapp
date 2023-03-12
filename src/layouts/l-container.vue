<template>
  <div
    :class="{
      'container max-w-7xl px-4': !fluid,
      'mx-auto': center,
    }"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
