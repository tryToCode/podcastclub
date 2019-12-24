import Vuex from 'vuex'
import sinon from 'sinon'
import { createLocalVue, mount } from '@vue/test-utils'

import Pagination from '../../../components/Pagination.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
    filterChangeHandle: sinon.stub()
}

// This function creates a new Vuex store
// instance for every new test case.
function createStore() {
    const modules = {
      apiUrl: {
        namespaced: true,
        actions
      },
    }
  
    return new Vuex.Store({
      modules,
    })
}

describe('test pagination component with diverse page count', () => {
    // starting point two pages
    test('pagination with two pages', () => {
        const wrapper = mount(Pagination, {
            propsData: {
                currentPage: 1,
                pageCount: 2
            },
            localVue,
            store: createStore()
        })

        // check the last visiable trigger
        expect(wrapper.find('#trigger-2').isVisible()).toBeTruthy()
        
        wrapper.find('#trigger-2').trigger('click')

        // check the action was called
        expect(actions.filterChangeHandle.callCount).toBe(1)

        // check the first page if it's still visible
        expect(wrapper.find('#trigger-1').isVisible()).toBeTruthy()
    })

    // test with the default visiable page count 5
    test('pagination with five pages', () => {
        const wrapper = mount(Pagination, {
            propsData: {
                currentPage: 1,
                pageCount: 5
            }
        })

        // check first and last visible trigger
        expect(wrapper.find('#trigger-1').isVisible()).toBeTruthy()
        expect(wrapper.find('#trigger-5').isVisible()).toBeTruthy()
    })

    test('pagination with more pages', () => {
        const wrapper = mount(Pagination, {
            propsData: {
                currentPage: 1,
                pageCount: 10
            }
        })
        
        // check if wrapper contains triggers
        expect(wrapper.contains('span')).toBeTruthy()

        // check first and last visible trigger
        expect(wrapper.find('#trigger-1').isVisible()).toBeTruthy()
        expect(wrapper.find('#trigger-10').isVisible()).toBeTruthy()
    })
})