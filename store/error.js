export const state = () => ({
    error: false
})

export const mutations = {
    SET_ERROR(state) {
        state.error = true 
    }
}

export const actions = {
    onError({commit}) {
        commit('SET_ERROR')
    }
}