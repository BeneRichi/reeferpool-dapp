<template>
  <div>
    <cHeader class="header">
      <Logo />
      <Navigation />
    </cHeader>

    <lContainer>
      <RouterView />
    </lContainer>

    <cFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cHeader from "./components/c-header.vue";
import lContainer from "./layouts/l-container.vue";
import cFooter from "./components/c-footer.vue";

// interface ISetup {}
// interface IData {}

/**
 * TODO: add component description.
 */
export default defineComponent({
  name: "PredictionView",

  components: {
    cHeader,
    cFooter,
    lContainer,
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
.c-prediction {
  // TODO: update selector according to filename
  // ...
}
</style>
