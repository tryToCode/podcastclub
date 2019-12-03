<template>
  <div>
    <BaseNavbar
      @onInputChange="filterChangeHandle"
      @reload="reloadHandle" />

    <BaseFilterRow 
      :itemsCount="Number(itemsCount)" 
      :timeSpend="Number(time)"
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
            :pageCount="Number(pageCount)"
            @nextPage="pageChangeHandle('next')"
            @previousPage="pageChangeHandle('previous')"
            @loadPage="pageChangeHandle" />
        </div>

        <div v-else>
          <BaseNoItems
          :baseUrl="loadItemBaseUrl"
          :key="loadItemBaseUrl"/>
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
      title: "Podcast Club",
      meta: [
      { name: 'description', 
        content: 'Podcast club home index page, a daily updated podcast aggregator' }
      ]
    }
  },

  data() {
    return {
      currentPage: 1,
      loadItemBaseUrl: 'http://fathomless-beyond-28426.herokuapp.com/api/rssItems',
      loading: true,
      color: "#fc8181"
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
      this.waitForLoading()
    })
  },

  computed: {
    ...mapState({
      items: 'items',
      itemsCount: 'itemsCount',
      time: 'time',
      pageCount: 'pageCount'
    })
  },

  methods: {
    reloadHandle() {
      if (process.browser)
        window.location.reload(true)
    },

    waitForLoading() {
      if (!this.loading)
        this.loading = true
      this.$store.dispatch('loadItems', this.loadItemBaseUrl)
      .then(() => {
        this.loading = false
        if (process.browser)
          window.scrollTo({top: 0, behavior: 'smooth'})
      })
    },

    async filterChangeHandle(value, filterSection) {
      /*
      listen on event change fired from the search input bar,
      the category selection and the date selection 
      
      filter section values: search, category, date 

      search input default: ''
      category selection default: 'All'
      date selection default: 'All Time'

      based on the query key change from diverse filter section
      rebuild REST url
      */
      var baseUrl = new URL(this.loadItemBaseUrl)
      if (value === 'All' || value === "All Time" || value === '') {
        if (baseUrl.searchParams.has(filterSection)) {
          baseUrl.searchParams.delete(filterSection)
          this.deleteQuery(filterSection)
        }
      } 
      else
        baseUrl.searchParams.set(filterSection, value)
      this.loadItemBaseUrl = baseUrl.toString()
      this.appendQuery()
      this.waitForLoading()
    },

    appendQuery() {
      const url = new URL(this.loadItemBaseUrl)
      var searchInput = url.searchParams.get('search') 
      var catInput = url.searchParams.get('category')
      var dateInput = url.searchParams.get('date')
      if (searchInput !== null)
        this.$router.push({query: 
          Object.assign({}, this.$route.query, {'search': searchInput})})
      if (catInput != null)
        this.$router.push({query: 
          Object.assign({}, this.$route.query, {'category': catInput})})
      if (dateInput != null)
        this.$router.push({query: 
          Object.assign({}, this.$route.query, {'date': dateInput})})
      if (this.currentPage !== 1)
        this.$router.push({query: 
          Object.assign({}, this.$route.query, {'page': this.currentPage})})
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
          this.deletePageQuery(query)
          break
      }
      this.$router.replace({query})
    },

    deletePageQuery(query) {
      if (this.currentPage === 1)
        delete query.page
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
      var baseUrl = new URL(this.loadItemBaseUrl)
      baseUrl.searchParams.set("page", this.currentPage)
      this.loadItemBaseUrl = baseUrl.toString()
      this.waitForLoading()
      this.appendQuery()
      this.deleteQuery('page')
    }
  }
}
</script>
