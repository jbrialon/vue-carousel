<template>
  <button v-on:click.prevent="triggerPageAdvance()" :disabled="!canAdvanceForward" v-bind:class="{ disabled: !canAdvanceForward }" class="next" :aria-label="this.parentContainer.navText[1]">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'next',
    data () {
      return {
        parentContainer: this.$parent
      }
    },
    computed: {
      canAdvanceForward () {
        return this.parentContainer.canAdvanceForward || false
      }
    },
    methods: {
      triggerPageAdvance (direction) {
        if (direction) {
          this.$parent.advancePage(direction)
        } else {
          this.$parent.advancePage()
        }
      }
    }
  }
</script>

<style scoped>
  button {
    cursor: pointer;
    appearance: none;
    background: none;
    border: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
  .disabled {
    opacity: 0.5;
    cursor: default;
  }
</style>
