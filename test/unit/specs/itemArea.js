import Vuex from 'vuex'
import sinon from 'sinon'
import { createLocalVue, mount } from '@vue/test-utils'

import ItemArea from '../../../components/ItemArea.vue'
import NoItems from '../../../components/Noitems.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
    loadItems: sinon.stub()
}

const getters = {
    page: sinon.stub(),
    pageSize: sinon.stub()
}

function createNoItemCom() {
    return mount(NoItems, {
        propsData: {
            baseUrl: 'http://localhost:3000'
        }
    })
}

// This function creates a new Vuex store
// instance for every new test case.
function createStore() {
    const modules = {
      items: {
        namespaced: true,
        actions,
        state: {
            items: 0,
            itemsCount: 0,
            timeSpent: 0
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
        const wrapper = mount(ItemArea, {
            localVue,
            store:createStore(),
            components: createNoItemCom()
        })

        // check component name
        expect(wrapper.name()).toBe('item-area')

        // check the action was called
        expect(actions.loadItems.callCount).toBe(1)
        
        console.log(wrapper.html())
        // no items
        expect(wrapper.contains('p #no-items')).toBeTruthy()

        // help link
        expect(wrapper.contains('a')).toBeTruthy()
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