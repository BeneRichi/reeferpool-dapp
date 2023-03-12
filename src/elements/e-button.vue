<template>
    <button type="button" :class="btnClasses" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      type: {
        type: String,
        validator: (value: string) => {
          return ['primary', 'secondary'].includes(value);
        },
        default: 'primary',
      },
    },
    methods: {
      handleClick() {
        this.$emit('click');
      },
    },
    computed: {
      btnClasses(): string[] {
        return ['btn', `btn-${this.type}`];
      },
    },
  });
  </script>
  
  <style lang="scss">
  .btn {
    /* your button styles here */
  }  
  </style>
  