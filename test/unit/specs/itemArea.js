import Vuex from 'vuex'
import sinon from 'sinon'
import { createLocalVue, shallow } from '@vue/test-utils'
import test from 'ava'

import ItemArea from '../../../components/ItemArea.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
    loadItems: sinon.stub()
}

// no items available
const state = {
    itemsCount: sinon.fake.returns(0)
}

const getters = {

}

// This function creates a new Vuex store
// instance for every new test case.
function createStore() {
    const modules = {
      items: {
        namespaced: true,
        actions,
        state
      },

      apiUrl: {
        namespaced: true,
        getters
      }
    }
  
    return new Vuex.Store({
      modules,
    })
}

// test component with zero item
test('item area with zero item', t => {
    const wrapper = shallow(ItemArea, {
        localVue,
        store:createStore()
    })

    // no items
    t.true(wrapper.contains('p'))
    t.is(wrapper.html(), 'No Items found')

})

// test component with default page size items
test.skip('item area with zero item', t => {
    const wrapper = shallow(ItemArea, {
        localVue,
        store: createStore()
    })
    
})

// test component with more items
test.skip('item area with zero item', t => {
    const wrapper = shallow(ItemArea, {
        localVue,
        store: createStore()
    })

    
})