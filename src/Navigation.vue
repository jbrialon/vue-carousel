<template>
  <div class="navigation">
    <button v-on:click.prevent="triggerPageAdvance('backward')" :disabled="!canAdvanceBackward" v-bind:class="{ disabled: !canAdvanceBackward }" class="carousel-nav carousel-nav--prev icon-arrow-left" :aria-label="this.parentContainer.navText[0]"></button>
    <button v-on:click.prevent="triggerPageAdvance()" :disabled="!canAdvanceForward" v-bind:class="{ disabled: !canAdvanceForward }" class="carousel-nav carousel-nav--next icon-arrow-right" :aria-label="this.parentContainer.navText[1]"></button>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    data () {
      return {
        parentContainer: this.$parent
      }
    },
    computed: {
      canAdvanceForward () {
        return this.parentContainer.canAdvanceForward || false
      },
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

<style>
  .disabled {
    opacity: 0.5;
    cursor: default;
  }

  .carousel-nav {
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    color:#FFF;
    font-size:24px;
    text-decoration:none;
    z-index:90;
    transition:opacity 300ms ease;
    cursor: pointer;
    appearance: none;
    background: none;
    border: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }

  .carousel-nav--next {
    right:20px;
  }

  .carousel-nav--prev {
    left:20px;
  }

  .colors .carousel-nav--next {
    right:-30px;
  }

  .colors .carousel-nav--prev {
    left:-30px;
  }
</style>
