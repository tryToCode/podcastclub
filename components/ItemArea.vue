<template>
  <div>
    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader :color="loaderColor"></pulse-loader>
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
            :currentPage="Number(currentPage)"
            :pageCount="pageCount"
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
import { mapState, mapGetters } from 'vuex'
import PodcastItem from './PodcastItem.vue'
import Pagination from './Pagination.vue'
import NoItems from './NoItems.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
    mounted() {
        this.$store.dispatch('loadItems')
    },

    components: {
        PodcastItem,
        Pagination,
        NoItems,
        PulseLoader
    },

    computed: {
        ...mapState({
            loading: state => state.loading.loading,
            items: state => state.items,
            itemsCount: state => state.itemsCount
        }),

        ...mapGetters('apiUrl', {
            loadItemUrl: 'url',
            currentPage: 'page',
            pageSize: 'pageSize'
        }),

        loaderColor: () => '#fc8181',

        pageCount () {
            return Math.ceil(Number(this.itemsCount) / Number(this.pageSize))
        } 
    },

    methods: {
        toTop() {
            if (process.browser)
                window.scrollTo({top: 0, behavior: 'smooth'})
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
            this.$store.dispatch('apiUrl/filterChangeHandle', {
                section: 'page',
                value: page.toString()
            })
            .then(() =>
                this.toTop()
            )
        }
    }
}
</script>