import axios from 'axios'

export const state = () => ({
    loadItemUrl: process.env.baseItemUrl,
    items: [],
    itemsCount: Number,
    time: Number,
    pageCount: Number,
    podcasts: []
})

export const mutations = {
    setUrl(state, url) {
        state.loadItemUrl = url
    },

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
    }
}

export const actions = {
    async loadPodcasts({commit}) {
        try {
            var podcasts = await axios
                .get(process.env.basePodcastUrl)
            commit('setPodcasts', podcasts.data.results)
        } catch(error) {
            console.log(error)
        }
    },

    async loadItems({commit, state}) {
        try {
            var url = null
            if (localStorage.getItem('loadItemUrl'))
                url = localStorage.getItem('loadItemUrl')
            else
                url = state.loadItemUrl
            var start = Date.now();
            var items = await axios.get(url)
            var s = (Date.now() - start) / 1000
            commit('setTimer', s)
            commit('setItems', items.data.results)
            commit('setItemsCount', items.data.count)
            var pageSize = 20
            if (localStorage.getItem("pageSize"))
                pageSize = localStorage.pageSize
            commit('setPageCount', Math.ceil(items.data.count / pageSize))
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

    async updateLikes({state}, pk) {
        try {
            const data = {upVote: true}
            const url = state.loadItemUrl
            axios.patch(`${url}/${pk}/`, data)
        }
        catch (error) {
            console.log(error)
        }
    },

    async selectChangeHandle({dispatch}, payload) {
        /* handle each select option change and search input 
        *  event fired from ui and reset local storage 
        *  storage variable used to load init selected value
        */
        const value = payload.value
        const section = payload.filterSection
        const defaultSelectValue = ['All', 'All Time', '']
        if (value in defaultSelectValue)
            localStorage.removeItem(section)
        else
            localStorage.setItem(section, value)
        await dispatch('rebuildUrl', {
            value: value,
            section: section
        })
    },

    async rebuildUrl({commit, state, dispatch}, payload) {
        /*
        * filter section is used as query key 
        */
        var baseUrl = new URL(state.loadItemUrl)
        const section = payload.section
        const value = payload.value
        const defaultSelectValue = ['All', 'All Time', '']
        if (value in defaultSelectValue) {
            if (baseUrl.searchParams.has(section))
                baseUrl.searchParams.delete(section)
        }
        else {
            var valueTrimmed = section === 'search' ? value :
                        value.split(' ').join('')
            baseUrl.searchParams.set(section, valueTrimmed)
        }
        commit('setUrl', baseUrl.toString())
        localStorage.setItem('loadItemUrl', baseUrl.toString())
        await dispatch('loadItems')
    },

    async pageChangeHandle({commit, state, dispatch}, payload) {
        var baseUrl = new URL(state.loadItemUrl)
        const pageNumber = payload.pageNumber
        baseUrl.searchParams.set('page', pageNumber)
        commit('setUrl', baseUrl.toString())
        localStorage.setItem('loadItemUrl', baseUrl.toString())
        await dispatch('loadItems')
    },

    async settingChangeHandle({commit, state, dispatch}, payload) {
        var baseUrl = new URL(state.loadItemUrl)
        const catSeleted = payload.category
        const dateSeleted = payload.date
        const pageSize = payload.pageSize
        if (catSeleted === 'All') {
            localStorage.removeItem('category')
            if (baseUrl.searchParams.has('category'))
                baseUrl.searchParams.delete('category')
        }
        else {
            localStorage.setItem('category', catSeleted)
            baseUrl.searchParams.set('category', catSeleted)
        }
        if (dateSeleted === 'All Time') {
            localStorage.removeItem('date')
            if (baseUrl.searchParams.has('date'))
                baseUrl.searchParams.delete('date')
        }
        else {
            const trimmedValue = dateSeleted.split(' ').join('')
            localStorage.setItem('date', dateSeleted)
            baseUrl.searchParams.set('date', trimmedValue)
        }
        if (pageSize === 20) {
            localStorage.removeItem('pageSize')
            if (baseUrl.searchParams.has('pageSize'))
                baseUrl.searchParams.delete('pageSize')
        }
        else {
            localStorage.setItem('pageSize', pageSize)
            baseUrl.searchParams.set('pageSize', pageSize)
        }
        localStorage.setItem('loadItemUrl', baseUrl.toString())
        commit('setUrl', baseUrl.toString())
        await dispatch('loadItems')
    }
}