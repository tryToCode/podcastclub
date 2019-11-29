<template>
  <div>
    <BaseNavbar
      @onInputChange="inputChangeHandle"
      @reload="reloadHandle" />

    <BaseFilterRow 
      :itemsCount="Number(itemsCount)" 
      :timeSpend="Number(time)"
      @onFilterChange="filterChangeHandle"/>

    <div class="max-w-5xl bg-gray-100 flex flex-col mx-auto 
          justify-center">
      <div v-if="loading"
        class="flex flex-col justify-center items-center my-32 sm:my-32 md:my-40">
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
        content: 'Podcast club home index page, a weekly updated podcast aggregator' }
      ]
    }
  },

  data() {
    return {
      currentPage: 1,
      loadItemBaseUrl: 'http://fathomless-beyond-28426.herokuapp.com/api/rssItems',
      loading: true,
      color: "#180d0b"
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
      this.$nuxt.$loading.start()
      this.$store.dispatch('loadItems', this.loadItemBaseUrl)
      .then(() => {
        this.loading = false
        this.$nuxt.$loading.finish()
      })
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

    async inputChangeHandle(value) {
      var baseUrl = new URL(this.loadItemBaseUrl)
      if (value === '' && baseUrl.searchParams.has('search')) {
        baseUrl.searchParams.delete('search')
      }
      else
        baseUrl.searchParams.set('search', value)
      this.loadItemBaseUrl = baseUrl.toString()
      this.$store.dispatch("loadItems", this.loadItemBaseUrl)
    },

    async filterChangeHandle(value, filterSection) {
      var baseUrl = new URL(this.loadItemBaseUrl)
      if (value === 'All' || value === "All Time") {
        if (baseUrl.searchParams.has(filterSection))
            baseUrl.searchParams.delete(filterSection)
      } 
      else
        baseUrl.searchParams.set(filterSection, value)
      this.loadItemBaseUrl = baseUrl.toString()
      this.$store.dispatch("loadItems", this.loadItemBaseUrl)
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
      this.$store.dispatch("loadItems", this.loadItemBaseUrl)
      if (process.browser)
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
}
</script>
