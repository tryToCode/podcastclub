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
    page(state) {
        return state.urlKeyValuePair.page
    },

    pageSize(state) {
        return state.urlKeyValuePair.pageSize
    }
}

export const mutations = {
    SET_URL(state, url) {
        state.url = url
    },

    SET_FILTER(state, sectionValuePair) {
        const { section, value } = sectionValuePair
        state.urlKeyValuePair[section] = value
        if (!defaultFilterValue.includes(value))
            state.urlKeyValuePair[section] = value
    }
}

export const actions = {
    filterChangeHandle({ commit, state }, payload) {
        var { section, value } = payload
        let url = new URL(state.url)
        defaultFilterValue.includes(value)
        ? url.searchParams.delete(section)
        : url.searchParams.set(section, value)
        commit('SET_URL', url.toString())
        commit('SET_FILTER', payload)
    },

    settingChangeHandle({ commit, state }, payload) {
        let url = new URL(state.url)
        for (var [section, value] of Object.entries(payload)) {
            defaultFilterValue.includes(value)
            ? url.searchParams.delete(section)
            : url.searchParams.set(section, value)
            commit('SET_FILTER', {
                section: section,
                value: value
            })
        }
        commit('SET_URL', url.toString())
    }
}