<template>
  <div class="c-navigation flex gap-8">
    <nav class="c-navigation__nav flex items-center">
      <ul>
        <RouterLink to="/about">How it works</RouterLink>
      </ul>
    </nav>
    <e-button type="primary" :icon="wallet" @click="connectWallet()"
      >Connect Wallet
    </e-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import eButton from "../elements/e-button.vue";
import connect from "../packages/reef-extension/index.js";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet';

// interface ISetup {}
interface IData {
  wallet: IconDefinition;
}

export default defineComponent({
  name: "c-navigation",

  components: {
    RouterLink,
    eButton,
  },

  // props: {},
  // emits: {},

  // setup(): ISetup {},
  data(): IData {
    return {
      wallet: faWallet,
    };
  },

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

  methods: {
    connectWallet() {
      connect(); // Call the default export function provided by the module
    },
  },
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
