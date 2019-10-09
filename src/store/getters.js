export default {
  $scrollDirection: (state) => {
    return state.$currentScrollPosition >= state.$lastScrollPosition
      ? 'up' : 'down'
  },
  $vwUnit: (state) => {
    const vw = state.$viewportWidth * 0.01
    document.documentElement.style.setProperty('--vw', `${vw}px`)
    return vw
  },
  $vhUnit: (state) => {
    const vh = state.$viewportHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    return vh
  }
}
