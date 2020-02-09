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
    loadDocItems({commit, dispatch}) {
        dispatch('loading/startLoading', null, { root: true })
        return axios.get(process.env.baseItemUrl)
                .then((response) => {
                    commit('SET_ITEMS', response.data.results)
                    commit('SET_ITEMS_COUNT', response.data.count)
                })
                .catch((error) => {
                    if (error.request)
                        dispatch("error/onError", 
                            { statusCode: 500, message: 'Server unavailable' }, 
                            { root: true }
                        )
                })
                .finally(() => dispatch("loading/stopLoading", null, { root: true }))
    }
}