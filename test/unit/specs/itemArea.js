import Vuex from 'vuex'
import sinon from 'sinon'
import { createLocalVue, mount } from '@vue/test-utils'

import ItemArea from '../../../components/ItemArea.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
    loadItems: sinon.stub()
}

const getters = {
    page: sinon.stub(),
    pageSize: sinon.stub()
}

// This function creates a new Vuex store
// instance for every new test case.
function createStore() {
    const modules = {
      items: {
        namespaced: true,
        actions,
        state: {
            items: sinon.fake.returns(0),
            itemsCount: sinon.fake.returns(0),
            timeSpent: sinon.fake.returns(0)
        }
      },

      apiUrl: {
        namespaced: true,
        getters
      },

      loading: {
          namespaced: true,
          state: {
              loading: sinon.stub()
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
        const wrapper = mount(ItemArea, {
            localVue,
            store:createStore()
        })

        // check component name
        expect(wrapper.name()).toBe('item-area')

        // check the action was called
        //t.is(actions.loadItems.callCount, 1)
        
        // no items
        //t.true(wrapper.contains('p#no-items'))

        // help link
        //t.true(wrapper.contains('a'))
    })

    // test component with default page size items
    test.skip('item area with default page size', () => {
        const wrapper = mount(ItemArea, {
            localVue,
            store: createStore()
        })
        
    })

    // test component with more items
    test.skip('item area with more items', () => {
        const wrapper = mount(ItemArea, {
            localVue,
            store: createStore()
        })
    })
})