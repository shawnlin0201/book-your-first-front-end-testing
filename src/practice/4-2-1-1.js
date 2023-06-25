import { mount } from '@vue/test-utils'

it('find target element', () => {
  const wrapper = mount({
    template: `
      <div>
        <p>第一段內容</p>
        <span>不是關注的目標</span>
        <p>最後一段內容</p>
      </div>
    `
  })
  console.log(wrapper.find('p').html())
  // <p>第一段內容</p>
  console.log(wrapper.findAll('p').at(0).html())
  // <p>第一段內容</p>
  console.log(wrapper.findAll('p').at(1).html())
  // <p>最後一段內容</p>
})
