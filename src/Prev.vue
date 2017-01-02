<template>
  <a href="#" v-on:click.prevent="triggerPageAdvance('backward')" v-bind:class="{ disabled: !canAdvanceBackward }" class="prev">
    <slot></slot>
  </a>
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
  .disabled {
    opacity: 0.5;
    cursor: default;
  }
</style>
