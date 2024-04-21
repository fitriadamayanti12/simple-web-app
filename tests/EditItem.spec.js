import { mount } from '@vue/test-utils'
import EditItem from '@/components/EditItem.vue'

describe('EditItem.vue', () => {
  it('updates an existing item when the form is submitted', async () => {
    const wrapper = mount(EditItem)
    const titleInput = wrapper.find('#title')
    const descriptionInput = wrapper.find('#description')

    await titleInput.setValue('Updated Title')
    await descriptionInput.setValue('Updated Description')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted().updateItem).toBeTruthy()
  })
})
