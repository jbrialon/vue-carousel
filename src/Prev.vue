<template>
  <button v-on:click.prevent="triggerPageAdvance('backward')" :disabled="!canAdvanceBackward" v-bind:class="{ disabled: !canAdvanceBackward }" class="prev" :aria-label="this.parentContainer.navText[0]">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'prev',
    data () {
      return {
        parentContainer: this.$parent
      }
    },
    computed: {
      canAdvanceBackward () {
        return this.parentContainer.canAdvanceBackward || false
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
