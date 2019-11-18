<template>
  <div>
    <BaseFilterRow 
      :itemsCount="itemsCount" 
      :timeSpend="time"
      @onCategoryChange="categoryChangeHandler"
      @onDateChange="dateChangeHandler" />
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
import BaseFilterRow from '@/components/BaseFilterRow.vue'
import BaseItemRow from '@/components/BaseItemRow.vue'
import BasePagination from '@/components/BasePagination.vue'

export default {
  data() {
    return {
      currentPage: 1,
      loadItemBaseUrl: 'http://127.0.0.1:8000/rssItems'
    }
  },

  components: {
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
    async categoryChangeHandler(value) {
      var baseUrl = new URL(this.loadItemBaseUrl) 
      if (value === 'All' && baseUrl.searchParams.has("category")) {
        baseUrl.searchParams.delete("category")
      } else {
        baseUrl.searchParams.set("category", value)
      }
      this.loadItemBaseUrl = baseUrl.toString()
      this.$store.dispatch("loadItems", this.loadItemBaseUrl)
    },

    async dateChangeHandler(value) {
      var baseUrl = new URL(this.loadItemBaseUrl)
      if (value === "All Time" && baseUrl.searchParams.has("date")) {
        baseUrl.searchParams.delete("date")
      } else {
        baseUrl.searchParams.set("date", value)
      }
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
