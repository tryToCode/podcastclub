import axios from 'axios'

const CSRF_COOKIE_NAME = 'csrftoken'
const CSRF_HEADER_NAME = 'X-CSRFToken'

const session = axios.create({
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME,
})

export const state = () => ({
    user: {},
    token: String,
    isAuthenticated: false,
    message: String,
    error: String,
    redirectPage: String
})

export const mutations = {
    SET_MESSAGE(state, message) {
        state.message = message
    },

    SET_ERROR(state, error) {
        state.error = error
    },

    SET_USER(state, user) {
        state.user = user
    },

    SET_TOKEN(state, token) {
        state.isAuthenticated = true
        state.token = token
    }
}

export const actions = {
    login({ commit }, { email }) {
        return session.post(process.env.loginUrl, {
            email: email
        })
        .then(({ data }) => commit('SET_MESSAGE', data))
        .catch((e) => commit('SET_ERROR', e))
    },

    logout({ commit }) {
        return auth.logout()
            .then(() => commit(LOGOUT))
            .finally(() => commit(REMOVE_TOKEN))
    },

    verifyToken({ commit }, { token }) {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'token ' + token
            }
        }
        return session.post(process.env.verifyTokenUrl, {}, axiosConfig)
            .then(() => commit('SET_TOKEN', token))
            .catch((e) => commit('SET_ERROR', e))
    }
}