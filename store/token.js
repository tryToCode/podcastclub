export const state = () => ({
    email: '',
    message: String,
    error: String
})

export const mutations = {
    SET_MESSAGE(state, message) {
        state.message = message
    },

    SET_ERROR(state, error) {
        state.error = error
    },

    SET_EMAIL(state, email) {
        state.email = email
    }
}

export const actions = {
    requestToken({ commit }, { email }) {
        return this.$axios.post(process.env.loginUrl, {
                email: email
            })
            .then(({ data }) => {
                commit('SET_MESSAGE', data)
                commit('SET_EMAIL', email)
            })
            .catch((error) => commit('SET_ERROR', error))
    },

    verifyToken({ commit }, { token }) {
        return this.$axios.post(process.env.verifyTokenUrl)
            .then(({ data }) => commit('SET_MESSAGE', data))
            .catch((error) => commit('SET_ERROR', error))
    }
}