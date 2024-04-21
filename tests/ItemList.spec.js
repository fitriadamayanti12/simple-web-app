import { mount } from '@vue/test-utils'
import ItemList from '@/components/ItemList.vue'

describe('ItemList.vue', () => {
  it('renders the list of items', async () => {
    const items = [
      { id: 1, title: 'Title 1', description: 'Description 1' },
      { id: 2, title: 'Title 2', description: 'Description 2' }
    ]

    const wrapper = mount(ItemList, {
      data() {
        return {
          items
        }
      }
    })

    const listItems = wrapper.findAll('.list-group-item')

    expect(listItems.length).toBe(items.length)
  })
})
