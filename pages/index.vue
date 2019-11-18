<template>
  <div>
    <BaseFilterRow 
      :itemsCount="itemsCount" 
      :timeSpend="time"
      @loadItemsOfCategory="categoryChangeHandler" />
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
      currentPage: 1
    }
  },

  components: {
    BaseFilterRow,
    BaseItemRow,
    BasePagination
  },

  created() {
    this.$store.dispatch('loadItems')
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
    categoryChangeHandler(value) {
      this.$store.dispatch('loadItemsOnCategory', value)
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
      var stories = this.pageNumber2Items[this.currentPage]
      if (stories === undefined)
        this.$store.dispatch('loadStoriesOnPageClick', this.currentPage)
      this.stories = this.pageNumber2Items[this.currentPage]
    }
  }
}
</script>
