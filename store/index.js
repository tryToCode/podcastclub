import axios from 'axios'

export const state = () => ({
    items: []
})

export const mutations = {
    setPodcasts(state, podcasts) {
        state.podcasts = podcasts
    },

    setItems(state, items) {
        state.items = items
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
        axios.get('http://127.0.0.1:8000/rssItems.json')
        .then(response => {
            commit('setItems', response.data.results)
        })
        .catch(error => {
            console.log(error)
        })
    },

    async loadItemsOnCategory({commit}, value) {
        axios.get('http://127.0.0.1:8000/rssItems?category=' + value)
        .then(response => {
            commit('setItems', response.data.results)
        })
        .catch(error => {
            console.log(error)
        })
    }
}