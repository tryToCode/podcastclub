<template>
  <div class="max-w-5xl flex flex-col mx-auto justify-center overflow-hidden">
    <BasePageNav />

    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
    </div>

    <modal
      v-show="isModalVisible"
      @close="closeModal"
    />

    <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col m-4 lg:w-3/4 mx-auto">
            <div class="text-3xl font-medium leading-none tracking-normal mt-1 mb-2">
                {{ item.title }}
            </div>

            <div class="flex py-2 items-center">
                <img class="h-16 object-cover rounded-lg" 
                    :src="item.creator.image_url" 
                    :alt="item.creator.name">

                <div class="flex flex-col ml-4">
                    <a class="text-lg" 
                        :href="'https://' + item.creator.base_url">
                        By <span class="">{{ item.creator.name }}</span>
                    </a>
                    <div class="text-gray-500">
                        {{$moment(item.pub_date).format('llll')}}
                    </div>
                </div>
            </div> 
            
            <AudioPlayer :audioSource="item.enclosure" />
            

            <div class="flex my-2">
                <a class="bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 hover:text-white 
                    rounded-lg mr-2 flex items-center justify-center px-1">
                    <svg class="fill-current" width="24px" height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M12 4.435C10.011-.964 0-.162 0 8.003 0 12.071 3.06 17.484 12 23c8.94-5.516 
                        12-10.929 12-14.997C24-.115 14-.996 12 4.435z"/>
                    </svg>
                </a>
                
                <a class="bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 hover:text-white
                    rounded-lg mr-2 flex items-center justify-center px-1"
                    :href="item.item_url">
                    <svg class="fill-current" width="24px" height="24px" 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M6 17C8.269 7.119 17 5.333 17 5.333V2l7 6.637-7 6.696V12s-6.17-.171-11 
                        5zm12 .145V20H2V8h6.598a16.999 16.999 0 012.339-2H0v16h20v-6.769l-2 1.914z"/>
                    </svg>
                </a>

                <a class="bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 hover:text-white 
                    rounded-lg mr-2 flex items-center justify-center px-1">
                    <svg class="fill-current" width="24px" height="24px"
                        xmlns="http://www.w3.org/2000/svg"  
                        viewBox="0 0 24 24">
                        <path d="M6.503 20.752A3.25 3.25 0 013.252 24 3.25 3.25 0 010 20.752a3.25 3.25 0 
                        013.252-3.248 3.25 3.25 0 013.251 3.248zM0 8.18v4.811c6.05.062 10.96 4.966 11.022 
                        11.009h4.817C15.777 15.29 8.721 8.242 0 8.18zm0-3.368C10.58 4.858 19.152 13.406 
                        19.183 24H24C23.97 10.769 13.245.046 0 0v4.812z"/>
                    </svg>
                </a>
                
                <a class="bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 hover:text-white 
                    rounded-lg flex items-center justify-center px-1">
                    <svg class="fill-current" width="24px" height="24px"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24">
                        <path d="M5 7a5 5 0 11-.001 10.001A5 5 0 015 7zm11.122 12.065A3.946 3.946 0 0016 
                        20a4 4 0 104-4 3.974 3.974 0 00-2.935 1.301l-5.488-2.927a6.973 6.973 0 01-.943 
                        1.764l5.488 2.927zM24 4a4 4 0 00-8 0c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 
                        1.127.943 1.764l5.488-2.927A3.974 3.974 0 0020 8a4 4 0 004-4z"/>
                    </svg>
                </a>
                
            </div>
            
            <div class="rounded shadow-lg p-4 my-4">
                <p class="text-xl py-2">About this Episode</p>
                <div class="leading-relaxed" v-html="item.summary">
                </div> 
            </div>

            <div class="leading-relaxed rounded shadow-lg p-4 my-4">
                <p class="text-xl py-2">Transcript</p>
                <p>
                    Let automated speech-to-text technology transcribe this episode so you can
                    get more out of the content.
                </p>
                <h2 class="mt-2">Before purchase: </h2>
                <p>
                    <span class="font-bold">Note</span>: The speech recongazition we use is 
                    the most advanced in the industry,
                </p>
                <p>
                    If you're looking for 100% accurately transcribe, please use services like
                    <a class="border-b-2" href="https://www.rev.com/">Rev</a> or 
                    <a class="border-b-2" href="https://www.transcribeme.com/">TranscribeMe</a> 
                    which take up to 12 Hours and cost more 
                    as well.
                </p>
                <div class="bg-yellow-200 my-4 p-2">
                    <h3>Term of Sale</h3>
                    <ul class="my-2">
                        <li>All sales are final. No refunds.</li>
                        <li>After you make the payment, we will start transcribing this 
                            episode immediately. It costs us money to do so. You cannot 
                            cancel the transcription once it starts. And no refunds.
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div class="flex flex-col items-center mx-auto justify-center my-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                        px-4 border border-blue-700 rounded"
                        @click="showModal">
                        Transcribe episode for &#36;{{ calcPrice }}
                    </button>
                    <p class="">We have generated 0 transcripts so far</p>
                </div>
            </div>

            <div class="my-2 rounded shadow-lg p-4">
                <span class="font-black">Disclaimer</span>: 
                The podcast and artwork embedded on this page are from the Podcast 
                <a :href="item.creator.base_url" 
                    class="border-b-2">
                    {{ item.creator.name }}
                </a>,
                which is the property of its owner and not affiliated with or endorsed 
                by Podcast Club.
            </div>
        </div><!--detail section -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AudioPlayer from '@/components/AudioPlayer.vue'
import BasePageNav from '@/components/Base/BasePageNav.vue'
import { PulseLoader } from '@saeris/vue-spinners'
import axios from 'axios'
import Modal from '@/components/Modal.vue'

export default {
    middleware: 'error',

    data() {
        return {
            item: {},
            isModalVisible: false
        }
    },

    head () {
        return {
            title: this.item.title,
            meta: [
                { name: 'description', 
                  content: 'Podcast club Podcast Club show' + this.item.summary }
            ]
        }
    },

    components: {
        AudioPlayer,
        BasePageNav,
        PulseLoader,
        Modal
    },

    computed: {
        ...mapState({
            loading: state => state.loading.loading
        }),

        calcPrice() {
            const price =  Math.ceil(this.item.duration / 15) * 0.02
            return Math.round( price * 100 + Number.EPSILON ) / 100
        }
    },

    methods: {

        showModal() {
            this.isModalVisible = true;
        },

        closeModal() {
            this.isModalVisible = false;
        },

        upVote(itemId) {
            this.likes += 1
            this.$store.dispatch('items/updateLikes', itemId)
        }
    },

    async asyncData ({ store, params }) {
        store.dispatch('loading/startLoading', null, { root: true })
        try {
            const item = await axios.get(`${process.env.baseItemUrl}/${params.id}/`)
            return {item: item.data}
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