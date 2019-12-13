<template>
  <div>
    <BaseNavbar
      @onInputChange="filterChangeHandle"/>

    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader :color="color"></pulse-loader>
    </div>

    <div v-else>
      <BaseFilterRow 
        @onFilterChange="filterChangeHandle"/>

      <div class="max-w-5xl bg-gray-100 flex flex-col mx-auto 
        justify-center">
        <div v-if="items.length !== 0">
          <BaseItemRow 
            v-for="item in items"
            :key="item.id"
            :item="item" />
          <BasePagination 
            :currentPage="currentPage"
            @nextPage="pageChangeHandle('next')"
            @previousPage="pageChangeHandle('previous')"
            @loadPage="pageChangeHandle" />
        </div>

        <div v-else>
          <BaseNoItems
          :baseUrl="loadItemUrl"
          :key="loadItemUrl"/>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseNavbar from '@/components/BaseNavbar.vue'
import BaseFilterRow from '@/components/BaseFilterRow.vue'
import BaseItemRow from '@/components/BaseItemRow.vue'
import BasePagination from '@/components/BasePagination.vue'
import BaseNoItems from '@/components/BaseNoItems.vue'
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
      currentPage: 1,
      loading: true,
      color: '#fc8181'
    }
  },

  components: {
    BaseNavbar,
    BaseFilterRow,
    BaseItemRow,
    BasePagination,
    BaseNoItems,
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
    ...mapState({
      items: 'items',
      loadItemUrl: 'loadItemUrl'
    })
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
      console.log('url ' + url)
      const searchInput = url.searchParams.get('search') 
      const catInput = url.searchParams.get('category')
      const dateInput = url.searchParams.get('date')
      const pageSize = url.searchParams.get('pageSize')
      searchInput === null ? this.deleteQuery('search') : 
        this.extendRouter({'search': searchInput})
      catInput === null ? this.deleteQuery('category') :
        this.extendRouter({'category': catInput})
      dateInput === null ? this.deleteQuery('date') :
        this.extendRouter({'date': dateInput})
      this.currentPage === 1 ? this.deleteQuery('page') :
        this.extendRouter({'page': this.currentPage})
      pageSize === null ? this.deleteQuery('pageSize') :
        this.extendRouter({'pageSize': pageSize})
      console.log('route path' + this.$router.query)
    },

    extendRouter(keyValueObj) {
      let query = Object.assign({}, this.$route.query, keyValueObj)
      this.$router.push({query: query})
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
      switch(value) {
        case 'next':
            this.currentPage += 1
            break
        case 'previous':
            this.currentPage -= 1
            break
        default:
            this.currentPage = value
            break
      }
      this.startLoding()
      this.$store.dispatch('pageChangeHandle', {
        pageNumber: this.currentPage
      })
      .then(() => {
        this.stopLoading()
        this.resetRoute()
      })
    }
  }
}
</script>
