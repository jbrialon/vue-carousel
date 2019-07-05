<template>
  <div class="pagination">
    <div class="dot-container">
      <button
        class="dot"
        v-for="(page, index) in parentContainer.pageCount"
        v-on:click="parentContainer.goToPage(index)"
        :style="`
          margin-top: ${parentContainer.paginationPadding}px;
          padding: ${parentContainer.paginationPadding}px;
        `"
        :aria-label="getAriaLabel(index, parentContainer.pageCount)"
      >
        <div
          class="dot-inner"
          :style="`
            width: ${parentContainer.paginationSize}px;
            height: ${parentContainer.paginationSize}px;
            background: ${(index === parentContainer.currentPage) ? parentContainer.paginationActiveColor : parentContainer.paginationColor};
          `"
        ></div>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    data () {
      return {
        parentContainer: this.$parent
      }
    },
    methods: {
      getAriaLabel (index, pageCount) {
        const mapObj = {
          '${index}': index + 1,
          '${pageCount}': pageCount
        }
        return this.parentContainer.paginationText.replace(/\$\{index\}|\$\{pageCount\}/gi, matched => mapObj[matched])
      }
    }
  }
</script>

<style scoped>
  .pagination {
    width: 100%;
    float: left;
    text-align: center;
  }

  .dot-container {
    display: inline-block;
    margin: 0 auto;
  }

  .dot {
    float: left;
    cursor: pointer;
    transition:color 200ms ease;
    appearance: none;
    background: none;
    border: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }

  .dot-inner {
    border-radius: 100%;
    border:1px solid #fff;
  }
</style>
