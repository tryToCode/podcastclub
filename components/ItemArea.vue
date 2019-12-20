<template>
  <div>
    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader :color="COLOR"></pulse-loader>
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
            :pageCount="Number(pageCount)"
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
import { mapState } from 'vuex'
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
            items: state => state.itemsResult.items,
            loadItemUrl: state => state.loadItemUrl,
            currentPage: state => state.currentPage,
            pageCount: state => state.pageCount
        }),

        COLOR: () => '#fc8181'
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
            this.$store.dispatch('pageChangeHandle', {
                pageNumber: page
            })
            .then(() =>
                this.toTop()
            )
        }
    }
}
</script>