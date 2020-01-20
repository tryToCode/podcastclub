<template>
  <div class="max-w-5xl flex flex-col md:flex-row mx-auto py-2 md:py-4">
    <div class="bg-white md:w-2/3 md:my-4 rounded">
    <ItemArea />
    </div>
    <div class="md:w-1/3 mt-4">
    <FilterAreaV3 />          
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ItemArea from '@/components/ItemArea.vue'
import FilterAreaV3 from '@/components/FilterAreaV3.vue'
export default {
    middleware: 'error',

    head () {
        return {
            title: 'Podcast Club',
            meta: [
            { name: 'description', 
            content: 'Podcast club home index page, a daily updated podcast aggregator' }
            ]
        }
    }
}
</script>