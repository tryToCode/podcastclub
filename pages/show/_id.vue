<template>
  <div class="max-w-5xl flex flex-col mx-auto justify-center overflow-hidden">
    <BasePageNav />
        
    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
    </div>

    <div class="flex flex-col m-4 lg:w-1/2">
        <div class="py-2 text-medium">
            <a :href="'https://' + item.creator.base_url">
                {{item.creator.name}}
            </a>
        </div> 
        <div class="text-xl font-bold">
            {{item.title}}
        </div>
        <div class="py-2 text-gray-500">
            {{$moment(item.pub_date).format('LL')}}
        </div>
        <div>
            <VuePlyr>
                <audio>
                    <source src="https://talkpython.fm/episodes/download/241/opal-full-stack-health-care-apps.mp3" type="audio/mp3" />
                </audio>
            </VuePlyr>
        </div>
        <div class="flex p-4">
            <a class="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 flex 
                items-center mr-2"
                :href="item.item_url">
                <svg class="full-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
				    <path d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825"></path>
			    </svg>
                Link
            </a>
            <a class="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 
                flex items-center mr-2">
                Download
            </a>
            <a class="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 
                flex items-center mr-2">
                <svg class="full-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32">
                    <path d="M 5 5 L 5 9 C 14.93 9 23 17.07 23 27 L 27 27 C 27 14.85 17.15 5 5 5 z M 5 12 L 5 16 C 11.07 16 16 20.93 16 27 L 20 27 C 20 18.72 13.28 12 5 12 z M 8 21 A 3 3 0 0 0 8 27 A 3 3 0 0 0 8 21 z"></path>
                </svg>
                RSS
            </a>
            <a class="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 
                flex items-center">
                <!--svg class="full-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M14.68,12.621c-0.9,0-1.702,0.43-2.216,1.09l-4.549-2.637c0.284-0.691,0.284-1.457,0-2.146l4.549-2.638c0.514,0.661,1.315,1.09,2.216,1.09c1.549,0,2.809-1.26,2.809-2.808c0-1.548-1.26-2.809-2.809-2.809c-1.548,0-2.808,1.26-2.808,2.809c0,0.38,0.076,0.741,0.214,1.073l-4.55,2.638c-0.515-0.661-1.316-1.09-2.217-1.09c-1.548,0-2.808,1.26-2.808,2.809s1.26,2.808,2.808,2.808c0.9,0,1.702-0.43,2.217-1.09l4.55,2.637c-0.138,0.332-0.214,0.693-0.214,1.074c0,1.549,1.26,2.809,2.808,2.809c1.549,0,2.809-1.26,2.809-2.809S16.229,12.621,14.68,12.621M14.68,2.512c1.136,0,2.06,0.923,2.06,2.06S15.815,6.63,14.68,6.63s-2.059-0.923-2.059-2.059S13.544,2.512,14.68,2.512M5.319,12.061c-1.136,0-2.06-0.924-2.06-2.06s0.923-2.059,2.06-2.059c1.135,0,2.06,0.923,2.06,2.059S6.454,12.061,5.319,12.061M14.68,17.488c-1.136,0-2.059-0.922-2.059-2.059s0.923-2.061,2.059-2.061s2.06,0.924,2.06,2.061S15.815,17.488,14.68,17.488"></path>
                </svg-->
                <svg class="full-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                <path d="M 20 0 C 17.789063 0 16 1.789063 16 4 C 16 4.277344 16.039063 4.550781 16.09375 4.8125 L 7 9.375 C 6.265625 8.535156 5.203125 8 4 8 C 1.789063 8 0 9.789063 0 12 C 0 14.210938 1.789063 16 4 16 C 5.203125 16 6.265625 15.464844 7 14.625 L 16.09375 19.1875 C 16.039063 19.449219 16 19.722656 16 20 C 16 22.210938 17.789063 24 20 24 C 22.210938 24 24 22.210938 24 20 C 24 17.789063 22.210938 16 20 16 C 18.796875 16 17.734375 16.535156 17 17.375 L 7.90625 12.8125 C 7.960938 12.550781 8 12.277344 8 12 C 8 11.722656 7.960938 11.449219 7.90625 11.1875 L 17 6.625 C 17.734375 7.464844 18.796875 8 20 8 C 22.210938 8 24 6.210938 24 4 C 24 1.789063 22.210938 0 20 0 Z"></path></svg>
                Share
            </a>
        </div>
        <div class="rounded shadow-lg p-4">
            <p class="text-xl py-2">About this Episode</p>
            {{item.description}}
        </div>
        <div class="my-2 rounded shadow-lg p-4">
            <span class="font-black">Disclaimer</span>: The podcast and artwork embedded on this page are from the Podcast 
            <a :href="item.creator.base_url" class="border-b-2">{{item.creator.name}}</a>,
            which is the property of its owner and not affiliated with or endorsed by Podcast Club.
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BasePageNav from '@/components/Base/BasePageNav.vue'
import { PulseLoader } from '@saeris/vue-spinners'

export default {
    middleware: 'error',

    head () {
        return {
            title: this.item.title,
            meta: [
                { name: 'description', 
                  content: 'Podcast club Podcast Club show' }
            ]
        }
    },

    components: {
        BasePageNav,
        PulseLoader
    },

    computed: {
        ...mapState({
            loading: state => state.loading.loading,
            item: state => state.items.item
        })
    },

    fetch({ store, params }) {
        store.dispatch('items/loadItem', params.id)
    }
}
</script>