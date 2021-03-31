export const state = () => ({
    message: String,
    error: String
})

export const mutations = {
    SET_MESSAGE(state, message) {
        state.message = message
    },

    SET_ERROR(state, error) {
        state.error = error
    }
}

export const actions = {
    requestToken({ commit }, { email }) {
        return this.$axios.post(process.env.requestTokenUrl, {
                email: email
            })
            .then(({ data }) => {
                commit('SET_MESSAGE', data)
            })
            .catch((error) => commit('SET_ERROR', error))
    },

    verifyToken({ commit }, { token }) {
        this.$axios.setHeader('Authorization', 'token ' + token)
        return this.$axios.post(process.env.verifyTokenUrl)
            .then(( resp ) => {
                this.$auth.setToken('local', 'token ' + token)
                this.$auth.setUser(resp.data)
            })
            .catch((error) => commit('SET_ERROR', error))
    }
}