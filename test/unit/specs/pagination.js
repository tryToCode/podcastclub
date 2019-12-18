import { mount } from '@vue/test-utils'
import test from 'ava'

import Pagination from '../../../components/Pagination.vue'

test('pagination with one page count', t => {
    const wrapper = mount(Pagination, {
        propsData: {
            currentPage: 1,
            pageCount: 1
        }
    })
    // check prop data
    t.is(wrapper.props().currentPage, 1)
    t.is(wrapper.props().pageCount, 1)
    t.is(wrapper.props().visiblePagesCount, 5)

    // check previous and next button
    t.true(wrapper.contains('button'))

    // check only one visiable trigger
    t.true(wrapper.find('#trigger-1').isVisible())
    t.false(wrapper.contains('span #trigger-2'))
})

test('pagination with two page count', t => {
    const wrapper = mount(Pagination, {
        propsData: {
            currentPage: 1,
            pageCount: 2
        }
    })

    // check the last visiable trigger
    t.true(wrapper.find('#trigger-2').isVisible())
    t.true(wrapper.find('#trigger-2').trigger('click'))
    // TODO: the first page should still be visible
    t.true(wrapper.find('#trigger-1').isVisible())
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

test.skip('check pagination click event', t => {
    // TODO
})