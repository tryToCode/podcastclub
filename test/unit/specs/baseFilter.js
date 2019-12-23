import { mount } from '@vue/test-utils'
import test from 'ava'
import sinon from 'sinon'

import BaseFilter from '../../../components/Base/BaseFilter.vue'
import DownArrowIcon from '../../../components/Icon/DownArrowIcon'

const catSelected = [
    {value: 'All', id: 0},
    {value: 'IT', id: 1},
    {value: 'Entrepreneurship', id: 2},
    {value: 'Finance', id: 3}
]

const dateSelected = [
    {value: 'All Time', id: 1},
    {value: 'Last 24', id: 2},
    {value: 'Past Week', id: 3},
    {value: 'Past Month', id: 4},
    {value: 'Past Year', id: 5}
]

const pageSelected = [
    {value: '10', id: 0},
    {value: '20', id: 1},
    {value: '30', id: 2},
    {value: '50', id: 3}
]

//test category filter
test('category select ', t => {
    const wrapper = mount(BaseFilter, {
        propsData: {
            id: 'categorySelect',
            model: 'All',
            filterSection: 'category',
            selectType: catSelected
        },
        components: DownArrowIcon
    })

    // check component name
    t.is(wrapper.name(), 'base-filter')

    // find the search input bar
    const select = wrapper.find('select#categorySelect')
    select.setValue('IT')

    // filter change event emitted
    t.true(wrapper.emitted().onFilterChange)
})

//test date filter
test('date select', t => {
    const wrapper = mount(BaseFilter, {
        propsData: {
            id: 'dateSelect',
            model: 'All Time',
            filterSection: 'date',
            selectType: dateSelected
        },
        components: DownArrowIcon
    })

    // check component name
    t.is(wrapper.name(), 'base-filter')

    // find the search input bar
    const select = wrapper.find('select#dateSelect')
    select.setValue('Last 24')

    // filter change event emitted
    t.true(wrapper.emitted().onFilterChange)
})

//test page size filter
test('page size select', t => {
    const wrapper = mount(BaseFilter, {
        propsData: {
            id: 'pageSizeSelect',
            model: '20',
            filterSection: 'pageSize',
            selectType: pageSelected
        },
        components: DownArrowIcon
    })

    // check component name
    t.is(wrapper.name(), 'base-filter')

    // find the search input bar
    const select = wrapper.find('select#pageSizeSelect')
    select.setValue('10')

    // filter change event emitted
    t.true(wrapper.emitted().onFilterChange)
})