<template>
  <div>
    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
    </div>

    <div v-else 
        class="max-w-5xl flex flex-col mx-auto 
        justify-center">
        <div v-if="itemsCount === 0">
            <NoItems
                :baseUrl="loadItemUrl"
                :key="loadItemUrl"/>
        </div>

        <div v-else-if="itemsCount <= pageSize">
            <PodcastItem 
                v-for="item in items"
                :key="item.id"
                :item="item" />
        </div>

        <div v-else>
            <PodcastItem 
                v-for="item in items"
                :key="item.id"
                :item="item" />
            <Pagination
                :currentPage="Number(currentPage)"
                :pageCount="pageCount" />
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import PodcastItem from './PodcastItem.vue'
import Pagination from './Pagination.vue'
import NoItems from './NoItems.vue'
import { PulseLoader } from '@saeris/vue-spinners'

export default {
    name: 'item-area',

    mounted() {
        this.$store.dispatch('items/loadItems')
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
            items: state => state.items.items,
            itemsCount: state => state.items.itemsCount,
            loadItemUrl: state => state.apiUrl.url
        }),

        ...mapGetters('apiUrl', {
            currentPage: 'page',
            pageSize: 'pageSize'
        }),

        pageCount() {
            return Math.ceil(Number(this.itemsCount) / Number(this.pageSize))
        }
    }
}
</script>