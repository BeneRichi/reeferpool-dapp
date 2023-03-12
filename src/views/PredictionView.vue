<template>
  <main>
    <cpPredictionMaker />
  </main>
</template>
<script lang="ts">


.230
import { defineComponent } from "vue";
import cpPredictionMaker from "../components/prediction/c-p-prediction-maker.vue";

// interface ISetup {}
// interface IData {}

/**
 * TODO: add component description.
 */
export default defineComponent({
  name: "PredictionView",

  components: {
    cpPredictionMaker,
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
