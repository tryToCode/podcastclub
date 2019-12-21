export const state = () => ({
    loading: false
})

export const mutations = {
    END_BUSY_STATE(state) {
        state.loading = false
    },

    START_BUSY_STATE(state) {
        state.loading = true
    }
}

export const actions = {
    startLoading({commit}) {
        commit('START_BUSY_STATE')
    },

    stopLoading({commit}) {
        commit('END_BUSY_STATE')
    }
}