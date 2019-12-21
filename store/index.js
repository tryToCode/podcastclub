import axios from 'axios'

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

    urlGetter: state => state.apiUrl.url

}

export const actions = {
    /**
     * this action is triggered by following events:
     *  select option from index page change event
     *  search input change event
     *  select option from setting page change event and apply
     *  pagination click event
     *  index page onCreate, refresh
     *  navbar click and reload
     * 
     * @param {*} param
     */
    async loadItems({commit, getters, dispatch}) {
        dispatch('loading/startLoading', null)
        try {
            const start = Date.now();
            const items = await axios.get(getters.urlGetter)
            const s = (Date.now() - start) / 1000
            commit('SET_ITEMS', items.data.results)
            commit('SET_ITEMS_COUNT', items.data.count)
            commit('SET_TIME_SPENT', s)
        }
        catch(error) {
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
                console.log('error request...');
                console.log(error.request);
                console.log(error.request.status)
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
        }
        dispatch("loading/stopLoading", null)
    },

    async updateLikes({state}, itemId) {
        try {
            const data = {upVote: true}
            axios.patch(`${process.env.baseItemUrl}/${itemId}/`, data)
        }
        catch (error) {
            console.log(error)
        }
    }
}