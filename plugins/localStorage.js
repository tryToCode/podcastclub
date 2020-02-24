import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
      key: 'apiUrl',
      paths: [
        'apiUrl', 'auth', 'localAuth'
      ]
  })(store)
}