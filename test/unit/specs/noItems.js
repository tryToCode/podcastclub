import { mount } from "@vue/test-utils"
import NoItems from "../../../components/NoItems.vue"

const url = 'http://localost:3000'
const urlWithCatQueryKey = 'http://localhost:3000/?category=IT'
const urlWithDateQueryKey = 'http://localhost:3000/?date=Last%2024'
const urlWithSearchQueryKey = 'http://localhost:3000/?search=hulapalu'

function getUrl(queryKey) {
    switch(queryKey) {
        case 'category':
            return urlWithCatQueryKey
        case 'date':
            return urlWithDateQueryKey
        case 'search':
            return urlWithSearchQueryKey
        default:
            return url
    }
}

const factory = (queryKey) => {
    return mount(NoItems, {
        propsData: {
            baseUrl: getUrl(queryKey)
        }
    })
}

test('no items without any query key given', () => {
    const wrapper = factory('')

    // check componet name
    expect(wrapper.name()).toBe('no-items')

    // no items
    expect(wrapper.contains('#no-items')).toBeTruthy()

    console.log('date url: ' + getUrl('date'))
    wrapper.setProps(
        { baseUrl: getUrl('date') }
    )

    expect(wrapper.vm.baseUrl).toBe(urlWithDateQueryKey)
    console.log(wrapper.html())

    // date info
    expect(wrapper.contains('#of-date')).toBeTruthy()
})

test('no items with category query key', () => {
    const wrapper = factory('category')

    console.log(wrapper.html())
    // category info
    expect(wrapper.contains('#of-category')).toBeTruthy()
})

test('no items with date query key', () => {
    const wrapper = factory('date')

    // category info
    expect(wrapper.contains('#of-date')).toBeTruthy()
})

test('no items with search query key', () => {
    const wrapper = factory('search')

    // category info
    expect(wrapper.contains('#for-search')).toBeTruthy()
})