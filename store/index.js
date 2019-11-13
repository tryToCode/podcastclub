import axios from 'axios'

export const state = () => ({
    podcasts: []
})

export const mutations = {
    setPodcasts(state, podcasts) {
        state.podcasts = podcasts
    },

    setItems(state, items) {
        state.items.push(items)
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

    async loadItems({commit, state}) {
        var pc = state.podcasts
        pc.forEach(element => {
            axios
                .get('http://127.0.0.1:8000/podcasts/' + element.id + '/items')
                .then(response => {
                    commit('setItems', response.data)
                })
                .catch(error => {
                    console(error)
                })
        });
    }
}