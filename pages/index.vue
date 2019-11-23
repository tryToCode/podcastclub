<template>
  <div>
    <BaseNavbar
      @onInputChange="inputChangeHandler" />
    <BaseFilterRow 
      :itemsCount="Number(itemsCount)" 
      :timeSpend="Number(time)"
      @onFilterChange="filterChangeHandler"/>
    <div class="max-w-5xl bg-gray-100 flex flex-col mx-auto">
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseNavbar from '@/components/BaseNavbar.vue'
import BaseFilterRow from '@/components/BaseFilterRow.vue'
import BaseItemRow from '@/components/BaseItemRow.vue'
import BasePagination from '@/components/BasePagination.vue'

export default {
  head () {
    return {
      title: "Podcast Club",
      meta: [
      { name: 'Podcast club', 
        content: 'Podcast club home index' }
      ]
    }
  },

  data() {
    return {
      currentPage: 1,
      loadItemBaseUrl: 'http://127.0.0.1:8000/api/rssItems'
    }
  },

  components: {
    BaseNavbar,
    BaseFilterRow,
    BaseItemRow,
    BasePagination
  },

  created() {
    this.$store.dispatch('loadItems', this.loadItemBaseUrl)
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
    async inputChangeHandler(value) {
      var baseUrl = new URL(this.loadItemBaseUrl)
      if (value === '' && baseUrl.searchParams.has('search')) {
        baseUrl.searchParams.delete('search')
      }
      else
        baseUrl.searchParams.set('search', value)
      this.loadItemBaseUrl = baseUrl.toString()
      this.$store.dispatch("loadItems", this.loadItemBaseUrl)
    },

    async filterChangeHandler(value, filterSection) {
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
    }
  }
}
</script>
