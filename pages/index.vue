<template>
  <div class="container flex">      
    <div class="flex w-1/3 mx-auto p-2 h-12 justify-center"
        v-for="p in podcasts" 
        :key="p.id">
      <nuxt-link class="p-2 mb-1" to="#">{{p.name}}
        <span> ({{p.base_url}}) </span>
      </nuxt-link>
      
    </div>
  </div>
</template>
import axios from 'axios'

export default {
  data() {
    return {
      podcasts: []
    }
  },
  created() {
    axios.get('http://127.0.0.1:8000/podcasts.json')
    .then(response => {
      this.podcasts = response.data.results
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
