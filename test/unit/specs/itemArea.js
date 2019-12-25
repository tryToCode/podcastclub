import Vuex from 'vuex'
import sinon from 'sinon'
import { createLocalVue, shallowMount, RouterLinkStub } from '@vue/test-utils'

import ItemArea from '../../../components/ItemArea.vue'
import NoItems from '../../../components/Noitems.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
    loadItems: sinon.stub()
}

const getters = {
    page: sinon.stub(),
    pageSize: () => 20
}

// This function creates a new Vuex store
// instance for every new test case.
function createStore(itemsFakeCount) {
    const modules = {
      items: {
        namespaced: true,
        actions,
        state: {
            items: sinon.stub(),
            itemsCount: itemsFakeCount,
            timeSpent: sinon.stub()
        }
      },

      apiUrl: {
        namespaced: true,
        getters
      },

      loading: {
          namespaced: true,
          state: {
            loading: false
          }
      }
    }
  
    return new Vuex.Store({
      modules,
    })
}

describe('test item area component with diverse items count', () => {
    // test component with zero item
    test('item area with zero item', () => {
        const wrapper = shallowMount(ItemArea, {
            localVue,
            store:createStore(0)
        })

        // check component name
        expect(wrapper.name()).toBe('item-area')

        // check the action was called
        expect(actions.loadItems.callCount).toBe(1)
        
        // no items stub component rendered
        expect(wrapper.contains('noitems-stub')).toBeTruthy()
    })

    // test component with default page size items
    test('item area with default page size', () => {
        const wrapper = shallowMount(ItemArea, {
            localVue,
            store: createStore(20)
        })
        
        // check the action was called
        expect(actions.loadItems.callCount).toBe(2)

        // no pagination stub component rendered
        expect(wrapper.contains('pagination-stub')).toBe(false)
    })

    // test component with more items
    test('item area with more items', () => {
        const wrapper = shallowMount(ItemArea, {
            localVue,
            store: createStore(30)
        })

        // pagination stub component rendered
        expect(wrapper.contains('pagination-stub')).toBeTruthy()
    })
})