import { shallowMount } from "@vue/test-utils"
import BaseInput from "../../../components/Base/BaseInput.vue"

const factory = () => {
    return shallowMount(BaseInput, {

    })
}

describe('test search input bar', () => {
    test('search input bar', () => {
        const wrapper = factory()

        // check component name
        expect(wrapper.name()).toBe('base-input')

        const input = wrapper.find('input[type="search"]')

        // check id
        expect(input.attributes().id).toBe('search-input')

        wrapper.vm.$emit('inputChange')

        // filter change event emitted
        expect(wrapper.emitted().inputChange).toBeTruthy()
    })
})