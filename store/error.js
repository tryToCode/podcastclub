export const state = () => ({
    statusCode: 0,
    message: ''
})

export const mutations = {
    SET_STATUS_CODE(state, code) {        
        state.statusCode = code
    },

    SET_MESSAGE(state, message) {
        state.message = message
    }
}

export const actions = {
    onError({commit}, payload) {
        const { statusCode, message } = payload
        commit('SET_STATUS_CODE', statusCode)
        commit('SET_MESSAGE', message)
    }
}