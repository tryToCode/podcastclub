import axios from 'axios'

export const state = () => ({
    loadItemUrl: process.env.baseItemUrl,
    items: [],
    itemsCount: Number,
    time: Number,
    pageCount: Number,
    podcasts: [],
    items4Doc: [],
    itemsCount4Doc: Number
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
    },

    setItems4Doc(state, items) {
        state.items4Doc = items
    },

    setItemsCount4Doc(state, count) {
        state.itemsCount4Doc = count
    }
}

export const actions = {
    async loadPodcasts({commit}) {
        try {
            let podcasts = await axios
                .get(process.env.basePodcastUrl)
            commit('setPodcasts', podcasts.data.results)
        } catch(error) {
            console.log(error)
        }
    },

    async loadItems({commit, state}) {
        try {
            let url = localStorage.getItem('loadItemUrl') ?
                localStorage.getItem('loadItemUrl') :
                url = state.loadItemUrl
            let start = Date.now();
            let items = await axios.get(url)
            let s = (Date.now() - start) / 1000
            commit('setTimer', s)
            commit('setItems', items.data.results)
            commit('setItemsCount', items.data.count)
            let pageSize = localStorage.getItem("pageSize") ?
                localStorage.getItem("pageSize") : 20
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

    async loadItems4Doc({commit}) {
        try {
            let items = await axios.get(process.env.baseItemUrl)
            commit('setItems4Doc', items.data.results)
            commit('setItemsCount4Doc', items.data.count)
        }
        catch (error) {
            console.log(error)
        }
    },

    async updateLikes({state}, pk) {
        try {
            const data = {upVote: true}
            axios.patch(`${state.loadItemUrl}/${pk}/`, data)
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
        defaultSelectValue.includes(value) ?
            localStorage.removeItem(section) :
            localStorage.setItem(section, value)
        await dispatch('rebuildUrl', {
            value: value,
            section: section
        })
    },

    async rebuildUrl({commit, state, dispatch}, payload) {
        /*
        * filter section is used as backend query key 
        */
        var baseUrl = new URL(state.loadItemUrl)
        const section = payload.section
        const value = payload.value
        const defaultSelectValue = ['All', 'All Time', '']
        if (defaultSelectValue.includes(value))
            baseUrl.searchParams.delete(section)
        else {
            let valueTrimmed = section === 'search' ? value :
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
        const defaultSelectValue = ['All', 'All Time', 20]
        for (const [filterSection, value] of Object.entries(payload)) {
            if (defaultSelectValue.includes(value)) {
                localStorage.removeItem(filterSection)
                baseUrl.searchParams.delete(filterSection)
            } 
            else {
                localStorage.setItem(filterSection, value)
                if (filterSection === 'date')
                    baseUrl.searchParams.set(filterSection, 
                        value.split(' ').join(''))
                else
                    baseUrl.searchParams.set(filterSection, value)
            }
        }
        localStorage.setItem('loadItemUrl', baseUrl.toString())
        commit('setUrl', baseUrl.toString())
        await dispatch('loadItems')
    }
}