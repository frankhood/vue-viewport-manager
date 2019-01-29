import * as types from './mutation_types'

export default {
  [types.SET_VIEWPORT_SIZE] (state) {
    state.$viewportHeight = window.innerHeight
    state.$viewportWidth = window.innerWidth
  },
  [types.SET_SCROLL_POSITION] (state) {
    let newScroll = document.body.getBoundingClientRect().top
    state.$lastScrollPosition = state.$currentScrollPosition
    state.$currentScrollPosition = newScroll
  }
}
