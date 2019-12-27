import axios from 'axios'

export const state = () => ({
    items: [],
    itemsCount: Number
})

export const mutations = {
    SET_ITEMS(state, items) {
        state.items = items
    },

    SET_ITEMS_COUNT(state, count) {
        state.itemsCount = count
    }
}

export const getters = {
    item (state) {
        return state.items[0]
    },

    items (state) {
        return state.items.slice(0, 2)
    },

    itemsCount(state) {
        return state.itemsCount
    }
}

export const actions = {
    async loadDocItems({commit, dispatch}) {
        dispatch('loading/startLoading', null, { root: true })
        try {
            const items = await axios.get(process.env.baseItemUrl)
            commit('SET_ITEMS', items.data.results)
            commit('SET_ITEMS_COUNT', items.data.count)
        }
        catch (error) {
            dispatch("error/onError", null, { root: true })
        }
        dispatch('loading/stopLoading', null, { root: true })
    }
}