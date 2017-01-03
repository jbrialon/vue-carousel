<template>
  <div class="navigation">
    <a href="#" v-on:click.prevent="triggerPageAdvance('backward')" v-bind:class="{ disabled: !canAdvanceBackward }" class="carousel-nav carousel-nav--prev icon-arrow-left"></a>
    <a href="#" v-on:click.prevent="triggerPageAdvance()" v-bind:class="{ disabled: !canAdvanceForward }" class="carousel-nav carousel-nav--next icon-arrow-right"></a>
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
