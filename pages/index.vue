<template>
  <div>
    <TheNavbar
      @onInputChange="filterChangeHandle"/>

    <TopFilterRow 
        @onFilterChange="filterChangeHandle"/>

    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader :color="COLOR"></pulse-loader>
    </div>

    <div v-else 
      class="max-w-5xl bg-gray-100 flex flex-col mx-auto 
      justify-center">
      <div v-if="items.length !== 0">
        <PodcastItem 
          v-for="item in items"
          :key="item.id"
          :item="item" />
        <Pagination 
          @nextPage="pageChangeHandle('next')"
          @previousPage="pageChangeHandle('previous')"
          @loadPage="pageChangeHandle" />
      </div>

      <div v-else>
        <NoItems
        :baseUrl="loadItemUrl"
        :key="loadItemUrl"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheNavbar from '@/components/TheNavbar.vue'
import TopFilterRow from '@/components/TopFilterRow.vue'
import PodcastItem from '@/components/PodcastItem.vue'
import Pagination from '@/components/Pagination.vue'
import NoItems from '@/components/NoItems.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  head () {
    return {
      title: 'Podcast Club',
      meta: [
      { name: 'description', 
        content: 'Podcast club home index page, a daily updated podcast aggregator' }
      ]
    }
  },

  data() {
    return {
      loading: true
    }
  },

  components: {
    TheNavbar,
    TopFilterRow,
    PodcastItem,
    Pagination,
    NoItems,
    PulseLoader
  },

  mounted() {
    this.$nextTick(() => {
      this.startLoding()
      this.$store.dispatch('loadItems')
      .then(() => {
        this.resetRoute()
        this.stopLoading()
      })
    })
  },

  computed: {
    ...mapState([
      'items',
      'loadItemUrl',
      'currentPage'
    ]),

    COLOR: () => '#fc8181'

  },

  watch: {
    loadItemUrl: {
      handler(val, oldVal) {
        console.log(`Updating loadItemUrl from ${oldVal} to ${val}`)
      }
    }
  },

  methods: {
    startLoding() {
      if (!this.loading)
        this.loading = true
    },

    stopLoading() {
      this.loading = false
      if (process.browser)
        window.scrollTo({top: 0, behavior: 'smooth'})
    },

    async filterChangeHandle(value, filterSection) {
      this.startLoding()
      this.$store.dispatch('selectChangeHandle', {
        value: value,
        filterSection: filterSection
      })
      .then(() => {
        this.stopLoading()
        this.resetRoute()
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
      this.$router.push({query: query})
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
    },

    async pageChangeHandle(value) {
      let page = Number(this.currentPage)
      switch(value) {
        case 'next':
            page += 1
            break
        case 'previous':
            page -= 1
            break
        default:
            page = value
            break
      }
      this.startLoding()
      this.$store.dispatch('pageChangeHandle', {
        pageNumber: page
      })
      .then(() => {
        this.stopLoading()
        this.resetRoute()
      })
    }
  }
}
</script>
