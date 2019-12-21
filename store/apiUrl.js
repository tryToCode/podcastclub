const defaultFilterValue = ['All', 'All Time', '', '20', '1']

export const state = () => ({
    url: process.env.baseItemUrl,
    urlKeyValuePair: {
        search: '',
        category: 'All',
        date: 'All Time',
        page: '1',
        pageSize: '20'
    }
})

export const getters = {

    url(state) {
        return window.localStorage.getItem('url')
        ? window.localStorage.getItem('url')
        : state.url
    },

    search(state) {
        return localStorage.getItem('search') 
        ? localStorage.getItem('search')
        : state.urlKeyValuePair.search
    },

    category(state) {
        return localStorage.getItem('category')
        ? localStorage.get('category')
        : state.urlKeyValuePair.category
    },

    date(state) {
        return localStorage.getItem('date')
        ? localStorage.getItem('date')
        : state.urlKeyValuePair.date
    },

    page(state) {
        return localStorage.getItem('page')
        ? Number(localStorage.getItem('page')) 
        : Number(state.urlKeyValuePair.page)
    },

    pageSize(state) {
        return localStorage.getItem('pageSize')
        ? Number(localStorage.getItem('pageSize'))
        : Number(state.urlKeyValuePair.pageSize)
    }
}

export const mutations = {
    SET_URL(state, url) {
        state.url = url
        localStorage.setItem('url', url)
    },

    SET_FILTER(state, sectionValuePair) {
        const { section, value } = sectionValuePair
        state.urlKeyValuePair[section] = value
        defaultFilterValue.includes(value)
        ? localStorage.removeItem(section)
        : localStorage.setItem(section, value)
    }
}

export const actions = {
    filterChangeHandle({commit, state}, payload) {
        const section = payload.section
        const value = payload.value
        let url = new URL(state.url)
        defaultFilterValue.includes(value)
        ? url.searchParams.delete(section)
        : url.searchParams.set(section, value)
        commit('SET_FILTER', { section, value })
        commit('SET_URL', url.toString())
    },

    settingChangeHandle({commit, state}, payload) {
        let url = new URL(state.url)
        for (const [section, value] of Object.entries(payload)) {
            commit('SET_FILTER ', { 
                section: section, 
                value: value })
            defaultFilterValue.includes(value)
            ? url.searchParams.delete(section)
            : url.searchParams.set(section, value)
        }
        commit('SET_URL', url.toString())
    }
}