<template>
  <div>
    <LoginModal
      v-show="isModalVisible"
      @close="closeModal" />
    
    <TheNavbar
      @login="loginHandle"
      @onInputChange="filterChangeHandle"/>

    <div class="max-w-5xl flex flex-col md:flex-row mx-auto py-2 md:py-4">
      <div class="bg-white md:w-2/3 md:my-4 rounded">
        <ItemArea />
      </div>
      <div class="md:w-1/3 mt-4">
        <FilterAreaV3 />          
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheNavbar from '@/components/TheNavbar.vue'
import ItemArea from '@/components/ItemArea.vue'
import FilterAreaV3 from '@/components/FilterAreaV3.vue'
import LoginModal from '@/components/LoginModal.vue'

export default {
  middleware: 'error',

  data() {
    return {
      isModalVisible: false
    }
  },

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
    ItemArea,
    FilterAreaV3,
    LoginModal
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
    loginHandle() {
      this.isModalVisible = true
    },

    closeModal() {
      this.isModalVisible = false
    },

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
