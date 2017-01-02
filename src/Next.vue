<template>
  <a href="#" v-on:click.prevent="triggerPageAdvance()" v-bind:class="{ disabled: !canAdvanceForward }" class="next">
    <slot></slot>
  </a>
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
  .disabled {
    opacity: 0.5;
    cursor: default;
  }
</style>
