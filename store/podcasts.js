import axios from 'axios'

export const state = () => ({
    podcasts: []
})

export const mutations = {   
    SET_PODCASTS(state, podcasts) {
        state.podcasts = podcasts
    }
}

export const getters = {
    podcasts(state) {
        return state.podcasts
    },

    podcasts4Doc(state) {
        return state.podcasts.slice(0, 2)
    },

    podcast(state) {        
        const min = Math.ceil(0)
        const max = Math.floor(19)
        const randomInt = Math.floor(Math.random() * (max - min + 1)) + min
        return state.podcasts[randomInt]
    },

    podcastsCount(state) {
        return state.podcasts.length
    }
}

export const actions = {
    async loadPodcasts({commit}) {
        try {
            const podcasts = await axios
                .get(process.env.basePodcastUrl)
            commit('SET_PODCASTS', podcasts.data.results)
        } catch(error) {
            console.log(error)
        }
    }
}