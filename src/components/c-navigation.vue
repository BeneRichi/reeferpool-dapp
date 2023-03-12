<template>
  <div class="c-navigation flex gap-8">
    <nav class="c-navigation__nav flex items-center">
      <ul>
        <RouterLink to="/about">About</RouterLink>
      </ul>
    </nav>
    <e-button type="primary">Connect Wallet</e-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import eButton from "../elements/e-button.vue";

export default defineComponent({
  name: "c-navigation",

  components: {
    RouterLink,
    eButton,
  },

  // props: {},
  // emits: {},

  // setup(): ISetup {},
  // data(): IData {
  //   return {};
  // },

  // computed: {},
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

  // methods: {},
  // render() {},
});
</script>

<style lang="scss">
.c-navigation {
  &__nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10px;
  }

  &__nav a {
    text-decoration: none;
    color: white;
  }
}
</style>
