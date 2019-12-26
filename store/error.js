export const state = () => {
    error: null
}

export const mutations = {
    SET_ERROR(state, payload) {
        state.error = payload
    }
}

export const actions = {
    onError({commit}, error) {
        commit('SET_ERROR', error)
    }
}