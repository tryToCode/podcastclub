<template>
  <div>
    <BasePageNav />

    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
    </div>

    <LoginModal
      v-show="isModalVisible"
      @close="closeModal"
    />

    <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col m-4 lg:w-3/4 mx-auto justify-center overflow-hidden">
            <div class="m-4 bg-white rounded p-4">
                <p class="text-3xl font-medium leading-none tracking-normal mt-1 mb-2">
                    {{ item.title }}
                </p>

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
                    <a class="bg-transparent border border-red-500 hover:border-transparent 
                        hover:bg-red-500 hover:text-white 
                        rounded-lg mr-2 flex items-center justify-center px-1">
                        <LikeIcon />
                    </a>

                    <a class="bg-transparent border border-red-500 hover:border-transparent 
                        hover:bg-red-500 hover:text-white
                        rounded-lg mr-2 flex items-center justify-center px-1"
                        :href="item.item_url">
                        <LinkIcon />                    
                    </a>

                    <a class="bg-transparent border border-red-500 hover:border-transparent 
                        hover:bg-red-500 hover:text-white 
                        rounded-lg mr-2 flex items-center justify-center px-1">
                        <RssIcon />
                    </a>

                    <a class="bg-transparent border border-red-500 hover:border-transparent 
                        hover:bg-red-500 hover:text-white 
                        rounded-lg flex items-center justify-center px-1">
                        <ShareIcon />   
                    </a>
                </div>
            </div>

            <div class="m-4 bg-white rounded p-4">
                <p class="text-xl py-2">About this Episode</p>
                <div class="leading-relaxed" v-html="item.summary">
                </div> 
            </div>

            <div class="leading-relaxed m-4 bg-white rounded p-4">
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
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 
                        px-4 border border-red-700 rounded"
                        @click="showModal">
                        Transcribe episode for &#36;{{ calcPrice }}
                    </button>
                    <p class="">We have generated 0 transcripts so far</p>
                </div>
            </div>

            <div class="m-4 bg-white rounded p-4">
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
import LoginModal from '@/components/LoginModal.vue'
import LikeIcon from '@/components/Icon/LikeIcon.vue'
import LinkIcon from '@/components/Icon/LinkIcon.vue'
import RssIcon from '@/components/Icon/RssIcon.vue'
import ShareIcon from '@/components/Icon/ShareIcon.vue'

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
        LoginModal,
        LikeIcon,
        LinkIcon,
        RssIcon,
        ShareIcon
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
            this.isModalVisible = true
        },

        closeModal() {
            this.isModalVisible = false
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