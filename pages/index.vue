<template>
  <div class="flex flex-wrap max-w-6xl mx-auto mt-2">      
    <div v-for="p in podcasts" 
      class="flex-col flex-auto max-w-sm overflow-hidden"
      :key="p.id">
    
      <div class="m-2 leading-tight text-xl font-extrabond text-red-700"> 
        {{ p.name }} 
        <span class="text-xs text-teal-600 cursor-pointer"> 
          <a :href="p.base_url">
            ({{p.base_url}})
          </a>   
        </span>
      </div>
      
      <ul class="m-2 py-2">
        <li v-for="item in p.items" 
          class="w-auto text-base truncate border-b"
          :key="item.id">
          <div class="truncate" 
                v-if="item.description.length === 0">
            <a :href="item.item_url">{{ item.title }}</a>
          </div>
          <div class="truncate" v-else>
            <a :href="item.item_url" 
              v-tooltip.top="item.desciption">
              {{ item.title }}
            </a>
            <div ref="tooltipRef" class="hidden tooltip-content">
              <div class="">
                <strong>{{item.title}}</strong>
              </div>
              <div class="text-xs">
                {{item.description}}
              </div>
            </div>
          </div>
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
