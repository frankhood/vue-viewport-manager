/* eslint-disable */
// import { mount } from '@vue/test-utils'
import Vue from 'vue/dist/vue.min'
import VueViewportManager from 'src'

const createRootElement = () => {
  const div = document.createElement('div')
  div.id = 'app-root'

  return div
};

Vue.use(VueViewportManager)
const $el = createRootElement();
const vm = new Vue().$mount($el);

// TODO define test routines
test('Viewport manager store module gets installed correctly', () => {

});
