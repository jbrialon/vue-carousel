import Carousel from './Carousel.vue'
import Slide from './Slide.vue'
import Prev from './Prev.vue'
import Next from './Next.vue'

const install = (Vue) => {
  Vue.component('carousel', Carousel)
  Vue.component('slide', Slide)
  Vue.component('next', Next)
  Vue.component('prev', Prev)
}

export {
  install,
  Carousel,
  Slide,
  Prev,
  Next
}
