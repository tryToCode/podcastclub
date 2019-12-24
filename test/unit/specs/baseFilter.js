import { shallowMount } from "@vue/test-utils";
import BaseFilter from "../../../components/Base/BaseFilter.vue";

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

const categoryfactory = () => {
  return shallowMount(BaseFilter, {
    propsData: {
      id: 'categorySelect',
      model: 'All',
      filterSection: 'category',
      selectType: catSelected
    }
  })
}

const datefactory = () => {
  return shallowMount(BaseFilter, {
    propsData: {
      id: 'dateSelect',
      model: 'All Time',
      filterSection: 'date',
      selectType: dateSelected
    }
  })
}

const pageSizefactory = () => {
  return shallowMount(BaseFilter, {
    propsData: {
      id: 'pageSizeSelect',
      model: '20',
      filterSection: 'pageSize',
      selectType: pageSelected
    }
  })
}

describe("test base filter with diverse options", () => {
  test("category select and event fire", () => {
    const wrapper = categoryfactory()

    // check component name
    expect(wrapper.name()).toBe('base-filter')

    // find the category select
    const select = wrapper.find('select#categorySelect')

    // check id
    expect(select.attributes().id).toBe('categorySelect')

    wrapper.vm.$emit('onBaseFilterChange')
    // filter change event emitted
    expect(wrapper.emitted().onBaseFilterChange).toBeTruthy()

  })

  test("date select and event fire", () => {
    const wrapper = datefactory()

    // find the date select
    const select = wrapper.find('select#dateSelect')

    // check id
    expect(select.attributes().id).toBe('dateSelect')

    wrapper.vm.$emit('onBaseFilterChange')
    // filter change event emitted
    expect(wrapper.emitted().onBaseFilterChange).toBeTruthy()
  })

  test("page size select and event fire", () => {
    const wrapper = pageSizefactory()

    // find the page size select
    const select = wrapper.find('select#pageSizeSelect')

    // check id
    expect(select.attributes().id).toBe('pageSizeSelect')

    wrapper.vm.$emit('onBaseFilterChange')
    // filter change event emitted
    expect(wrapper.emitted().onBaseFilterChange).toBeTruthy()
  })
})