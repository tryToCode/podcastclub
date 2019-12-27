<template>
  <div>
    <FilterArea />
    <ItemArea />
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
