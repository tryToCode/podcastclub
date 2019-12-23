import Vuex from 'vuex'
import sinon from 'sinon'
import { createLocalVue, mount } from '@vue/test-utils'
import test from 'ava'

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

// starting point two pages
test('pagination with two pages', t => {
    const wrapper = mount(Pagination, {
        propsData: {
            currentPage: 1,
            pageCount: 2
        },
        localVue,
        store: createStore()
    })

    // check the last visiable trigger
    t.true(wrapper.find('#trigger-2').isVisible())
    
    wrapper.find('#trigger-2').trigger('click')

    // check the action was called
    t.is(actions.filterChangeHandle.callCount, 1)

    // check the first page if it's still visible
    t.true(wrapper.find('#trigger-1').isVisible())
})

// test with the default visiable page count 5
test('pagination with five pages', t => {
    const wrapper = mount(Pagination, {
        propsData: {
            currentPage: 1,
            pageCount: 5
        }
    })

    // check first and last visible trigger
    t.true(wrapper.find('#trigger-1').isVisible())
    t.true(wrapper.find('#trigger-5').isVisible())
})

test('pagination with more pages', t => {
    const wrapper = mount(Pagination, {
        propsData: {
            currentPage: 1,
            pageCount: 10
        }
    })
    
    // check if wrapper contains triggers
    t.true(wrapper.contains('span'))

    // check first and last visible trigger
    t.true(wrapper.find('#trigger-1').isVisible())
    t.true(wrapper.find('#trigger-10').isVisible())
})
