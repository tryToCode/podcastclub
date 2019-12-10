export const state = () => ({
    category: 'All',
    date: 'All Time',
    pageSize: 20
})

export const mutations = {
    setCategory(state, category){
        state.category = category
    },

    setDate(state, date) {
        state.date = date
    },

    setPageSize(state, pageSize) {
        state.pageSize = pageSize
    }
}

export const actions = {
    setToken({commit}, filterSection, value) {
        localStorage.setItem(filterSection, value)
        switch(filterSection) {
            case 'category':
                commit('setCategory', value)
                break
            case 'date':
                commit('setDate', value)
                break
            case 'pageSize':
                commit('setPageSize', value)
                break
        }
    }
}