import { mount, shallowMount } from '@vue/test-utils'
import component from '../4-1-a.vue'

describe.skip('mount 與 shallowMount 的差異', () => {
  it('mount component', () => {
    const wrapper = mount(component)
    console.log('mount', wrapper.html())
  })
  it('shallowMount component', () => {
    const wrapper = shallowMount(component)
    console.log('shallowMount', wrapper.html())
  })
})
