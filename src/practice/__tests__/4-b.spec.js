import { mount } from '@vue/test-utils'
import component from '../4-a.vue'

it.skip('should show the correct text', () => {
  // Try it!
  const wrapper = mount(component, {
    propsData: {
        msg: 'Hello, Vue!'
    }
  })
  expect(wrapper.text()).toBe('Hello, Vue!')
})
