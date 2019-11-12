import axios from 'axios'

export const state = () => ({
    podcasts: [],
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
})

export const mutations = {
    setPodcasts(state, podcasts) {
        state.podcasts.push(podcasts) 
    }
}

export const actions = {
    async loadPodcasts({commit}) {
        try {
            var podcasts = await axios
                    .get('http://127.0.0.1:8000/podcasts.json')
            console.log(podcasts.data.length)
            commit('setPodcasts', podcasts.data)
        } catch(error) {
            console.log(error)
        }
    }
}