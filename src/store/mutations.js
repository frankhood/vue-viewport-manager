import * as types from './mutation_types';

export default {
  [types.SET_VIEWPORT_SIZE](state) {
    state.$viewportWidth = window.innerWidth;
    document.documentElement.style.setProperty('--vw', `${state.$viewportWidth / 100}px`);
    state.$viewportHeight = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${state.$viewportHeight / 100}px`);
  },
  [types.SET_SCROLL_POSITION](state) {
    let newScroll = document.body.getBoundingClientRect().top;
    state.$lastScrollPosition = state.$currentScrollPosition;
    state.$currentScrollPosition = newScroll;
  }
};
