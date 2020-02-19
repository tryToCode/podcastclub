import axios from 'axios'

const CSRF_COOKIE_NAME = 'csrftoken'
const CSRF_HEADER_NAME = 'X-CSRFToken'

const session = axios.create({
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME,
})

export const state = () => ({
    email: '',
    token: String,
    isAuthenticated: false,
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
    },

    SET_TOKEN(state, token) {
        session.defaults.headers.Authorization = `token ${token}`
        state.isAuthenticated = true
        state.token = token
    },

    REMOVE_TOKEN(state) {
        delete session.defaults.headers.Authorization
        state.isAuthenticated = false
        state.token = null
    }
}

export const actions = {
    login({ commit }, { email }) {
        return session.post(process.env.loginUrl, {
                email: email
            })
            .then(({ data }) => {
                commit('SET_MESSAGE', data)
                commit('SET_EMAIL', email)
            })
            .catch((error) => commit('SET_ERROR', error))
    },

    logout({ commit }) {
        return session.post(process.env.logoutUrl, {})
            .then(({ data }) => commit('SET_MESSAGE', data))
            .catch(error => commit('SET_ERROR', error))
            .finally(() => commit('REMOVE_TOKEN'))
    },

    verifyToken({ commit }, { token }) {
        commit('SET_TOKEN', token)
        return session.post(process.env.verifyTokenUrl)
            .then(({ data }) => commit('SET_MESSAGE', data))
            .catch((error) => commit('SET_ERROR', error))
    }
}