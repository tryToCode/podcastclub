import axios from 'axios'

export const state = () => {
    podcasts: []
}

export const mutations = {   
    setPodcasts(state, podcasts) {
        state.podcasts = podcasts
    }
}

export const getters = {
    podcasts(state) {
        return state.podcasts
    }
}

export const actions = {
    async loadPodcasts({commit}) {
        try {
            const podcasts = await axios
                .get(process.env.basePodcastUrl)
            commit('setPodcasts', podcasts.data.results)
        } catch(error) {
            console.log(error)
        }
    }
}