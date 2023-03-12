<template>
  <div>
    <header class="c-header py-5">
      <lContainer>
        <div class="flex justify-between items-center">
          <eLogo />
          <cNavigation />
        </div>
      </lContainer>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import lContainer from "../layouts/l-container.vue";
import eLogo from "../elements/e-logo.vue";
import cNavigation from "./c-navigation.vue";

export default defineComponent({
  name: "c-header",
  components: {
    lContainer,
    eLogo,
    cNavigation,
  },
});
</script>

<style lang="scss">
@use "../setup/variables/color.scss" as color;

.c-header {
  background-color: color.$dark-color-light;
}
</style>
