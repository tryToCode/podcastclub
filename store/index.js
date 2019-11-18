import axios from 'axios'

export const state = () => ({
    items: [],
    itemsCount: Number,
    time: String,
    pageCount: Number
})

export const mutations = {
    setPodcasts(state, podcasts) {
        state.podcasts = podcasts
    },

    setItems(state, items) {
        state.items = items
    },

    setItemsCount(state, count) {
        state.itemsCount = count
    },

    setTimer(state, time) {
        state.time = time
    },

    setPageCount(state, count) {
        state.pageCount = count
    }
}

export const actions = {
    async loadPodcasts({commit}) {
        try {
            var podcasts = await axios
                    .get('http://127.0.0.1:8000/podcasts.json')
            console.log(podcasts.data.length)
            commit('setPodcasts', podcasts.data.results)
        } catch(error) {
            console.log(error)
        }
    },

    async loadItems({commit}) {
        var start = Date.now();
        axios.get('http://127.0.0.1:8000/rssItems.json')
        .then(response => {
            var s = (Date.now() - start) / 1000
            commit('setTimer', s)
            commit('setItems', response.data.results)
            commit('setItemsCount', response.data.count)
            commit('setPageCount', Math.ceil(response.data.count / 20))
        })
        .catch(error => {
            console.log(error)
        })
    },

    async loadItemsOnCategory({commit}, value) {
        axios.get('http://127.0.0.1:8000/rssItems?category=' + value)
        .then(response => {
            console.log(response)
            commit('setItems', response.data.results)
            commit('setItemsCount', response.data.count)
        })
        .catch(error => {
            console.log(error)
        })
    }
}