import createPersistedState from 'vuex-persistedstate'
import { state } from '../store/apiUrl'

export default ({store}) => {
  createPersistedState({
      key: 'apiUrl',
      paths: [
        'apiUrl'
      ],
      getState: () => {
        if (localStorage.getItem('apiUrl'))
          Object.assign(state, JSON.parse(localStorage.getItem('apiUrl')))
      }
  })(store)
}