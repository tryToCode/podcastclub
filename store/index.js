import axios from 'axios'

export const state = () => ({
    items: [],
    itemsCount: Number,
    time: Number,
    pageCount: Number,
    podcasts: [],
    loading: Boolean
})

export const mutations = {
    setPodcasts(state, podcasts) {
        state.podcasts = podcasts
    },

    setItems(state, items) {
        state.items = items
    },

    setItemsCount(state, count) {
        state.itemsCount = count
    },

    setTimer(state, time) {
        state.time = time
    },

    setPageCount(state, count) {
        state.pageCount = count
    },

    setLoading(state, loading) {
        state.loading = loading
    }
}

export const actions = {
    async loadPodcasts({commit}) {
        try {
            var podcasts = await axios
                .get('http://fathomless-beyond-28426.herokuapp.com/api/podcasts')
            commit('setPodcasts', podcasts.data.results)
        } catch(error) {
            console.log(error)
        }
    },

    async loadItems({commit}, url) {
        try {
            var start = Date.now();
            var items = await axios.get(url)
            var s = (Date.now() - start) / 1000
            commit('setTimer', s)
            commit('setItems', items.data.results)
            commit('setItemsCount', items.data.count)
            commit('setPageCount', Math.ceil(items.data.count / 20))
        }
        catch(error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                if (error.response.status === 404 && 
                    error.response.data.detail === 'Invalid page.') {
                    commit('setItems', [])
                    commit('setTimer', 0)
                    commit('setItemsCount', 0)
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
    },

    async updateLikes({commit}, pk) {
        try {
            const data = {upVote: true}
            axios.patch(`http://fathomless-beyond-28426.herokuapp.com/api/rssItems/${pk}/`, data)
        }
        catch (error) {
            console.log(error)
        }
    }
}