export const state = () => ({
    items: [],
    itemsCount: Number,
    timeSpent: Number
})

export const mutations = {
    SET_ITEMS(state, items) {
        state.items = items
    },

    SET_ITEMS_COUNT(state, count) {
        state.itemsCount = count
    },

    SET_TIME_SPENT(state, time) {
        state.timeSpent = time
    }
}

export const getters = {
    urlGetter(state, getters, rootState, rootGetters) {
        return rootState.apiUrl.url
    }
}

export const actions = {
    /**
     * this action is triggered by following events:
     *  select option from index page change event
     *  search input change event
     *  select option from setting page change event
     *  pagination click event
     *  index page onCreate, refresh
     *  navbar click and reload
     * 
     */
    loadItems({commit, getters, dispatch}) {
        dispatch('loading/startLoading', null, { root: true })
        return this.$axios.get(getters.urlGetter)
        .then((response) => {
            commit('SET_ITEMS', response.data.results)
            commit('SET_ITEMS_COUNT', response.data.count)
        })
        .catch((error) => {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                if (error.response.status === 404 
                    && error.response.data.detail === 'Invalid page.') {
                    commit('SET_ITEMS', [])
                    commit('SET_ITEMS_COUNT', 0)
                    commit('SET_TIME_SPENT', 0)
                }
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                dispatch("error/onError", 
                    { statusCode: 500, message: 'Server unavailable' }, 
                    { root: true }
                )
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
        })
        .finally(() => dispatch("loading/stopLoading", null, { root: true }))
    },

    updateLikes({state}, itemId) {
        this.$axios.patch(`${process.env.baseItemUrl}/${itemId}/`, {
            upVote: true
        })
        .catch(error => console.log(error))
    }
}