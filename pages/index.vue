<template>
  <div>
    <TheNavbar
      @onInputChange="filterChangeHandle"/>
    <div class="bg-gray-100">
      <div class="max-w-5xl flex mx-auto py-4">
        <div class="bg-white w-2/3 my-4 rounded">
          <ItemArea />
        </div>
        <div class="w-1/3 mt-4">
          <div class="px-8 py-2">
            <button class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
              hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded mb-4">
              Reset Filter
            </button>
            <p class="font-bold my-2">Search Filter</p>
            <div class="pl-1">
              <p class="text-base font-medium">Category</p>
              <div class="flex items-center my-2 justify-between cursor-pointer">
                  <span class="">
                    All
                  </span>
                  <input type="checkbox" class="form-checkbox" checked>
              </div>
              <div class="flex items-center my-2 justify-between cursor-pointer">
                  <span class="">
                    IT
                  </span>
                  <input type="checkbox" class="form-checkbox">
              </div>
              <div class="flex items-center my-2 justify-between cursor-pointer">
                  <span class="">
                    Entrepreneurship
                  </span>
                  <input type="checkbox" class="form-checkbox">
              </div>
              <div class="flex items-center my-2 justify-between cursor-pointer">
                  <span class="">
                    Finance
                  </span>
                  <input type="checkbox" class="form-checkbox">
              </div>
              <!--ul class="my-2">
                <li>All</li>
                <li>IT</li>
                <li>Entrepreneurship</li>
                <li>Finance</li>
              </ul-->
            </div>
            <div class="pl-1">
              <p class="text-base font-medium">Time Periode</p>
              <div class="flex items-center my-2 justify-between cursor-pointer">
                  <span class="">
                    All Time
                  </span>
                  <input type="checkbox" class="form-checkbox" checked>
              </div>
              <div class="flex items-center my-2 justify-between cursor-pointer">
                  <span class="">
                    Last 24
                  </span>
                  <input type="checkbox" class="form-checkbox">
              </div>
              <div class="flex items-center my-2 justify-between cursor-pointer">
                  <span class="">
                    Last Week
                  </span>
                  <input type="checkbox" class="form-checkbox">
              </div>
              <div class="flex items-center my-2 justify-between cursor-pointer">
                  <span class="">
                    Last Month
                  </span>
                  <input type="checkbox" class="form-checkbox">
              </div>
              <div class="flex items-center my-2 justify-between cursor-pointer">
                  <span class="">
                    Last Year
                  </span>
                  <input type="checkbox" class="form-checkbox">
              </div>
              <!--ul class="my-2">
                <li>All Time</li>
                <li>Last 24</li>
                <li>Past Week</li>
                <li>Past Month</li>
                <li>Past Year</li>
              </ul-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheNavbar from '@/components/TheNavbar.vue'
import FilterArea from '@/components/FilterArea.vue'
import ItemArea from '@/components/ItemArea.vue'

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
  },

  mounted() {
    this.resetRoute()
  },

  components: {
    TheNavbar,
    FilterArea,
    ItemArea
  },

  computed: {
    ...mapState({
      loadItemUrl: state => state.apiUrl.url
    })
  },

  watch: {
    loadItemUrl: {
      handler(val, oldVal) {
        this.resetRoute()
        this.$store.dispatch('items/loadItems')
      }
    }
  },

  methods: {
    async filterChangeHandle(filterSection, value) {
      this.$store.dispatch('apiUrl/filterChangeHandle', {
          section: filterSection,
          value: value
      })
    },

    resetRoute() {
      const url = new URL(this.loadItemUrl)
      let urlKey = ['search', 'category', 'date', 'pageSize', 'page']
      let query = Object.assign({}, this.$route.query)
      for (var keyValue of url.searchParams.entries()) {
        const [key, value] = keyValue
        let obj = {}
        obj[key] = value
        query = Object.assign({}, query, obj)
        urlKey = urlKey.filter(e => e !== key)
      }
      this.$router.replace({query: query})
      urlKey.forEach(e => this.deleteQuery(e))
    },

    deleteQuery(filterSection) {
      let query = Object.assign({}, this.$route.query)
      switch(filterSection) {
        case 'search':
          delete query.search
          break
        case 'category':
          delete query.category
          break
        case 'date':
          delete query.date
          break
        case 'page':
          delete query.page
          break
        case 'pageSize':
          delete query.pageSize
          break
      }
      this.$router.replace({query})
    }
  }
}
</script>
