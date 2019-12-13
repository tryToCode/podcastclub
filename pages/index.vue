<template>
  <div>
    <BaseNavbar
      @onInputChange="filterChangeHandle"/>

    <BaseFilterRow 
      @onFilterChange="filterChangeHandle"/>

    <div class="max-w-5xl bg-gray-100 flex flex-col mx-auto 
          justify-center">
      <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader :color="color"></pulse-loader>
      </div>  

      <div v-else>
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
        this.appendQuery()
        if (value === 'All' || value === 'All Time' || value === '')
          this.deleteQuery(filterSection)
      })
    },

    appendQuery() {
      const url = new URL(this.loadItemUrl)
      var searchInput = url.searchParams.get('search') 
      var catInput = url.searchParams.get('category')
      var dateInput = url.searchParams.get('date')
      var pageSize = url.searchParams.get('pageSize')
      if (searchInput !== null)
        this.extendRouter({'search': searchInput})
      if (catInput != null)
        this.extendRouter({'category': catInput})
      if (dateInput != null)
        this.extendRouter({'date': dateInput})
      if (this.currentPage !== 1)
        this.extendRouter({'page': this.currentPage})
      if (pageSize !== null)
        this.extendRouter({'pageSize': pageSize})
    },

    extendRouter(keyValueObj) {
      this.$router.push({query: 
        Object.assign({}, this.$route.query, keyValueObj)})
    },

    deleteQuery(filterSection) {
      var query = Object.assign({}, this.$route.query)
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
        this.appendQuery()
        if (this.currentPage == 1)
            this.deleteQuery('page')
      })
    }
  }
}
</script>
