<template>
  <button
    type="button"
    :class="btnClasses"
    class="flex gap-2 items-center"
  >
    <fa-icon :icon="icon" />
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

  // interface ISetup {}
  // interface IData {}
  
export default defineComponent({
  name: "e-button",

  props: {
    type: {
      type: String,
      validator: (value: string) => ["primary", "secondary"].includes(value),
      default: "primary",
    },
    icon: {
      type: Object,
      validator: (value: IconDefinition) =>
        typeof value === "object" && value !== null,
      default: null,
    },
  },

  // props: {},
  // emits: {},

  // setup(): ISetup {},
  // data(): IData {
  //   return {};
  // },

  computed: {
    btnClasses(): string[] {
      return ["btn", `btn-${this.type}`];
    },
  },
  // watch: {},

  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // activated() {},
  // deactivated() {},
  // beforeUnmount() {},
  // unmounted() {},

});
</script>

<style lang="scss">
.btn {
  /* your button styles here */
}
</style>
