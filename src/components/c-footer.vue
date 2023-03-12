<template>
  <div class="c-footer">
    <lContainer>
      <div
        class="c-footer__container max-w-screen-xl mx-auto px-4 py-6 sm:px-6"
      >
        <div class="flex justify-between items-center">
          <div class="c-footer__logo">
            <eReefaqLogo />
          </div>
          <nav class="c-footer__nav flex space-x-4">
            <ul class="flex gap-10">
              <li>
                <router-link
                  to="/about"
                  class="text-gray-300 hover:text-white transition duration-300"
                  >Terms of use</router-link
                >
              </li>
              <li>
                <router-link
                  to="/contact"
                  class="text-gray-300 hover:text-white transition duration-300"
                  >Contact Us</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </lContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import lContainer from "../layouts/l-container.vue";
import eReefaqLogo from "../elements/e-reefaq-logo.vue";

export default defineComponent({
  name: "c-footer",
  components: {
    lContainer,
    eReefaqLogo,
  },
});
</script>

<style lang="scss">
@use "../setup/variables/color.scss" as color;

.c-footer {
  background-color: color.$dark-color-light;
}
</style>
