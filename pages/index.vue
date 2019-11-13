<template>
  <div class="container flex">      
    <div class="flex flex-column mx-auto">
      <div v-for="p in podcasts" 
      class="flex flex-row"
      :key="p.id">
      
      <h3 class="m-2 text-xl font-bond"> 
        {{ p.name }} 
      </h3>
      

      <div v-for="item in p.items.slice(0, 8)" 
        class="flex"
        :key="item.id">
        {{ item.title }}
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      podcasts: []
    }
  },

  created() {
    console.log('created hook')
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
