<template>
  <div class="bg-gray-100 py-20">
    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { PulseLoader } from '@saeris/vue-spinners'
import axios from 'axios'

export default {
    name: 'account-page',

    computed: {
        ...mapState({
            loading: state => state.loading.loading
        })
    },

    async asyncData ({ store, params }) {
        store.dispatch('loading/startLoading', null, { root: true })
        try {
            const item = await axios.get(`${process.env.baseItemUrl}/${params.id}/`)
            let relatedItemsUrl = new URL(process.env.relatedItemsUrl)
            relatedItemsUrl.searchParams.set('category', item.data.creator.category.split('.')[1])
            relatedItemsUrl.searchParams.set('exclude', params.id)
            const relatedItems = await axios.get(relatedItemsUrl.toString())
            return { 
                item: item.data,
                relatedItems: relatedItems.data.results
            }
        }
        catch (error) {
            store.dispatch("error/onError", 
                { statusCode: 500, message: 'Server unavailable' }, 
                { root: true }
            )
        }
        finally {
            store.dispatch("loading/stopLoading", null, { root: true })
        }
    }
}
</script>