import axios from 'axios'

export const state = () => {
    itemsResult: Object.create(null)
}

export const mutations = {
    setItemsResult(state, result) {
        state.itemResult = result
    }
}

export const getters = {
    itemsResult (state) {
        return state.itemResult
    }
}

export const actions = {
    async loadItems4Doc({commit}) {
        try {
            const items = await axios.get(process.env.baseItemUrl)
            const result = {
                items: items.data.results,
                itemsCount: items.data.count
            }
            commit('setItems4Result', result)
        }
        catch (error) {
            console.log(error)
        }
    }
}