import { mount } from '@vue/test-utils'
import component from '../4-2-1-1-a.vue'

it('find target element', () => {
  const wrapper = mount(component)
  console.log(wrapper.find({ ref: 'target'}).html())
  console.log(wrapper.find('p').html())
  console.log(wrapper.find('[data-test="target"]').html())
  // <p>想斷言的目標</p>
})
