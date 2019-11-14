<template>
  <div class="flex flex-wrap max-w-6xl mx-auto">      
    <div v-for="p in podcasts" 
      class="flex-col flex-auto max-w-sm overflow-hidden"
      :key="p.id">
    
      <div class="m-2 text-xl font-bond text-red-700"> 
        {{ p.name }} 
        <br>
        <span class="text-sm text-teal-500 cursor-pointer"> 
          <a :href="p.base_url">
            ( {{p.base_url}} )
          </a>   
        </span>
      </div>
      
      <ul class="m-2 py-2">
        <li v-for="item in p.items.results" 
          class="w-auto text-base truncate underline"
          :key="item.id"
          v-tooltip.top="item.description">
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
