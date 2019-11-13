<template>
  <div class="container flex flex-wrap justify-around align-middle">      
    <div v-for="p in podcasts" 
      class="flex-column max-w-sm overflow-hidden"
      :key="p.id">
    
      <div class="flex-1 m-2 text-xl font-bond text-red-700"> 
        {{ p.name }} 
        <span class="text-sm text-teal-500"> ({{p.base_url}}) </span>
      </div>
      
      <ul class="flex-column m-2 pt-2">
        <li v-for="item in p.items.slice(0, 8)" 
          class="text-base truncate underline"
          :key="item.id">
          <a :href="item.item_url">{{ item.title }}</a>
        </li>
      </ul>
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
