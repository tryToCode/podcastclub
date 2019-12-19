import axios from 'axios'

export const state = () => ({
    result: {
        items: [],
        itemsCount: 0
    }
})

export const mutations = {
    setResult(state, result) {
        state.result = result
    }
}

export const getters = {
    item (state) {
        return state.result.items[0]
    },

    items (state) {
        return state.result.items.slice(0, 2)
    },

    itemsCount(state) {
        return state.result.itemsCount
    }
}

export const actions = {
    async loadDocItems({commit}) {
        try {
            const items = await axios.get(process.env.baseItemUrl)
            const result = {
                items: items.data.results,
                itemsCount: items.data.count
            }
            commit('setResult', result)
        }
        catch (error) {
            console.log(error)
        }
    }
}