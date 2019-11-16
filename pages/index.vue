<template>
  <div>
    <div class="max-w-5xl bg-gray-100 flex flex-col mx-auto"
      v-for="item in items"
      :key="item.id">
      <div class="overflow-hidden">
          <div class="px-6 py-1">
              <span class="font-semibold text-sm">{{item.title}}</span>
              <span class="text-gray-500 text-base">
                  {{item.item_url}}
              </span>
          </div>
          <div class="px-6">
              <span class="inline-block px-1 py-1 text-sm font-semibold text-gray-500">
                {{item.creator}}
              </span>
              <span class="text-gray-500">|</span>
              <span class="inline-block px-1 py-1 text-sm font-semibold text-gray-500">
                {{item.pub_date}}
              </span>
              <span class="text-gray-500">|</span>
              <span class="inline-block px-1 py-1 text-sm font-semibold text-gray-500">
                #{{item.episode_number}}
              </span>
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
      items: []
    }
  },

  created() {
    console.log('created hook')
    axios.get('http://127.0.0.1:8000/rssItems.json')
    .then(response => {
      this.items = response.data.results
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
