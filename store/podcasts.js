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
    loadPodcasts({commit, dispatch}) {
        dispatch('loading/startLoading', null, { root: true })
        return this.$axios.get(process.env.basePodcastUrl)
                .then(response => commit('SET_PODCASTS', response.data.results))
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