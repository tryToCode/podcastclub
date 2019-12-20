import axios from 'axios'

export const state = () => ({
    loadItemUrl: process.env.baseItemUrl,
    itemsResult: {
        items: [],
        itemsCount: 0,
        timeSpent: 0
    },
    currentPage: 1,
    pageCount: Number
})

export const mutations = {
    // whenever url for loading items changed, triggers index page reset route
    setUrl(state, url) {
        state.loadItemUrl = url
    },

    setItemsResult(state, result) {
        state.itemsResult = result
    },

    setCurrentPage(state, page) {
        state.currentPage = page
    },

    setPageCount(state, count) {
        state.pageCount = count
    }
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
    async loadItems({commit, state, dispatch}) {
        dispatch('loading/startLoading', null)
        try {
            const url = localStorage.getItem('loadItemUrl')
                ? localStorage.getItem('loadItemUrl')
                : state.loadItemUrl
            const start = Date.now();
            const items = await axios.get(url)
            const s = (Date.now() - start) / 1000
            const result = {
                items: items.data.results, 
                itemsCount: items.data.count,
                timeSpent: s }
            // 
            commit('setUrl', url)
            commit('setItemsResult', result)
            const pageSize = localStorage.getItem("pageSize") 
                ? localStorage.getItem("pageSize") 
                : 20
            commit('setPageCount', Math.ceil(items.data.count / pageSize))
        }
        catch(error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                if (error.response.status === 404 
                    && error.response.data.detail === 'Invalid page.') {
                    const result = {
                        items: [],
                        itemsCount: 0,
                        timeSpeed: 0
                    }
                    commit('setItemsResult', result)
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
    },

    async selectChangeHandle({dispatch}, payload) {
        /* handle each select option change and search input 
        *  event fired from ui and reset local storage 
        *  storage variable used to load init selected value
        */
        const {value, filterSection} = payload
        const defaultSelectValue = ['All', 'All Time', '']
        defaultSelectValue.includes(value) 
        ? localStorage.removeItem(filterSection) 
        : localStorage.setItem(filterSection, value)
        await dispatch('rebuildUrl', {
            value: value,
            section: filterSection
        })
    },

    async rebuildUrl({commit, state, dispatch}, payload) {
        /*
        * filter section is used as backend query key 
        */
        var baseUrl = new URL(state.loadItemUrl)
        const {value, section} = payload
        const defaultSelectValue = ['All', 'All Time', '']
        if (defaultSelectValue.includes(value))
            baseUrl.searchParams.delete(section)
        else {
            const valueTrimmed = section === 'search' 
                ? value 
                : value.split(' ').join('')
            baseUrl.searchParams.set(section, valueTrimmed)
        }
        localStorage.setItem('loadItemUrl', baseUrl.toString())
        await dispatch('loadItems')
    },

    async pageChangeHandle({commit, state, dispatch}, payload) {
        /**
         * handle pagination click event
         */
        var baseUrl = new URL(state.loadItemUrl)
        const pageNumber = payload.pageNumber
        pageNumber === 1
        ? baseUrl.searchParams.delete('page')
        : baseUrl.searchParams.set('page', pageNumber)
        commit('setCurrentPage', pageNumber)
        localStorage.setItem('loadItemUrl', baseUrl.toString())
        await dispatch('loadItems')
    },

    async settingChangeHandle({commit, state, dispatch}, payload) {
        /**
         * handle select option change event from setting page
         * only triggered after apply button clicked
         */
        var baseUrl = new URL(state.loadItemUrl)
        const defaultSelectValue = ['All', 'All Time', '20']
        for (const [filterSection, value] of Object.entries(payload)) {
            if (defaultSelectValue.includes(value)) {
                localStorage.removeItem(filterSection)
                baseUrl.searchParams.delete(filterSection)
            } else {
                localStorage.setItem(filterSection, value)
                filterSection === 'date' 
                ? baseUrl.searchParams.set(filterSection, value.split(' ').join(''))
                : baseUrl.searchParams.set(filterSection, value)
            }
        }
        localStorage.setItem('loadItemUrl', baseUrl.toString())
        await dispatch('loadItems')
    }
}