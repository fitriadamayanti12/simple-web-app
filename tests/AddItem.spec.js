import { mount } from '@vue/test-utils'
import AddItem from '@/components/AddItem.vue'

describe('AddItem.vue', () => {
  it('adds a new item when the form is submitted', async () => {
    const wrapper = mount(AddItem)
    const titleInput = wrapper.find('#title')
    const descriptionInput = wrapper.find('#description')

    await titleInput.setValue('Test Title')
    await descriptionInput.setValue('Test Description')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted().addItem).toBeTruthy()
    expect(wrapper.vm.form.title).toBe('')
    expect(wrapper.vm.form.description).toBe('')
  })
})
