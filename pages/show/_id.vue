<template>
  <div class="bg-gray-100">
    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
    </div>

    <LoginModal
      v-show="isModalVisible"
      @close="closeModal"
    />

    <nav class="bg-white border-b">
        <ol class="max-w-6xl mx-auto flex items-center px-12 py-2 text-sm">
            <li>
                <nuxt-link to="/show" class="text-gray-600">
                    Show
                </nuxt-link>
            </li>
            <li><span class="mx-2">/</span></li>
            <li class="font-medium">{{item.title}}</li>
        </ol>
    </nav>
    <div class="flex flex-col lg:flex-row md:max-w-6xl md:mx-auto px-4 py-20 md:py-6">
        
        <div class="bg-white flex flex-col lg:w-2/3 justify-center overflow-hidden rounded">
            <div class="my-4 mx-8">
                <p class="text-2xl font-semibold leading-none tracking-normal mt-1 mb-2">
                    {{ item.title }}
                </p>

                <div class="flex py-3 items-center">
                    <img class="h-24 object-cover rounded-lg" 
                        :src="item.creator.image_url" 
                        :alt="item.creator.name">

                    <div class="flex flex-col ml-4">
                        <a class="text-lg" 
                            :href="'https://' + item.creator.base_url">
                            By <span class="">{{ item.creator.name }}</span>
                        </a>
                        <div class="text-base text-gray-500">
                            {{$moment(item.pub_date).format('llll')}}
                        </div>
                    </div>
                </div> 
                
                <AudioPlayer :audioSource="item.enclosure" />

                <div class="flex my-2 border-t pt-3 items-center">
                    <a class="md:mr-2 flex items-center justify-center px-1">
                        <LikeIcon />
                        <span>Like</span>
                    </a>

                    <a class="md:mr-2 flex items-center justify-center px-1"
                        :href="item.item_url">
                        <LinkIcon />
                        <span>Link</span>
                    </a>

                    <a class="md:mr-2 flex items-center justify-center px-1">
                        <RssIcon />
                        <span>RSS</span>
                    </a>

                    <a class="flex items-center justify-center px-1">
                        <ShareIcon />
                        <span>Share</span>
                    </a>
                </div>
            </div>

            <div class="my-4 mx-8">
                <p class="text-xl py-2">About this Episode</p>
                <div class="leading-relaxed" v-html="item.summary">
                </div> 
            </div>

            <div class="leading-relaxed my-4 mx-8">
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
                    <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 
                        px-4 rounded outline-none"
                        @click="showModal">
                        Transcribe episode for &#36;{{ calcPrice }}
                    </button>
                    <p class="">We have generated 0 transcripts so far</p>
                </div>
            </div>

            <div class="my-4 mx-8">
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

        <div class="lg:w-1/3 my-4 md:ml-8">
            <div class="md:w-4/5 px-6 pt-4 pb-8 border rounded md:mx-auto">
                <p class="text-lg font-semibold mb-4">Recommandations</p>
                <div class="flex py-2 items-center border-b">
                    <img class="h-12 object-cover rounded" 
                        :src="item.creator.image_url" 
                        :alt="item.creator.name">

                    <div class="flex flex-col ml-4 flex-wrap">
                        
                        <p class="" 
                            :href="'https://' + item.creator.base_url">
                            By <span class="">{{ item.creator.name }}</span>
                        </p>
                    </div>
                </div>
                
                <a :href="item.item_url">
                    <div class="flex py-2 items-center border-b">
                        <img class="h-12 object-cover rounded" 
                            :src="item.creator.image_url" 
                            :alt="item.creator.name">
                        <div class="flex flex-col ml-4 overflow-hidden">
                            <div class="truncate text-gray-500">
                                {{item.creator.name}}
                            </div>
                                
                            <div class="w-full items-center">
                                <div class="font-semibold truncate">
                                    {{item.title}}
                                </div>
                                <div class="text-gray-500">
                                    <span>{{$moment(item.pub_date).startOf('day').fromNow()}}</span>
                                    <span>1:10:03</span> 
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </a>
                
                <div class="flex py-2 items-center border-b">
                    <img class="h-12 object-cover rounded" 
                        :src="item.creator.image_url" 
                        :alt="item.creator.name">

                    <div class="flex flex-col ml-4">
                        <a class="text-base" 
                            :href="'https://' + item.creator.base_url">
                            By <span class="">{{ item.creator.name }}</span>
                        </a>
                    </div>
                </div>

                <div class="flex py-2 items-center border-b">
                    <img class="h-12 object-cover rounded" 
                        :src="item.creator.image_url" 
                        :alt="item.creator.name">

                    <div class="flex flex-col ml-4">
                        <a class="" 
                            :href="'https://' + item.creator.base_url">
                            By <span class="">{{ item.creator.name }}</span>
                        </a>
                    </div>
                </div>

                <div class="flex py-2 items-center border-b">
                    <img class="h-12 object-cover rounded" 
                        :src="item.creator.image_url" 
                        :alt="item.creator.name">

                    <div class="flex flex-col ml-4">
                        <a class="text-base" 
                            :href="'https://' + item.creator.base_url">
                            By <span class="">{{ item.creator.name }}</span>
                        </a>
                    </div>
                </div>

                <div class="flex py-2 items-center border-b">
                    <img class="h-12 object-cover rounded" 
                        :src="item.creator.image_url" 
                        :alt="item.creator.name">

                    <div class="flex flex-col ml-4">
                        <a class="text-base" 
                            :href="'https://' + item.creator.base_url">
                            By <span class="">{{ item.creator.name }}</span>
                        </a>
                    </div>
                </div>

                <div class="flex py-2 items-center border-b">
                    <img class="h-12 object-cover rounded" 
                        :src="item.creator.image_url" 
                        :alt="item.creator.name">

                    <div class="flex flex-col ml-4">
                        <a class="text-base" 
                            :href="'https://' + item.creator.base_url">
                            By <span class="">{{ item.creator.name }}</span>
                        </a>
                    </div>
                </div>

                <div class="flex py-2 items-center border-b">
                    <img class="h-12 object-cover rounded" 
                        :src="item.creator.image_url" 
                        :alt="item.creator.name">

                    <div class="flex flex-col ml-4">
                        <a class="text-base" 
                            :href="'https://' + item.creator.base_url">
                            By <span class="">{{ item.creator.name }}</span>
                        </a>
                    </div>
                </div>

                <div class="flex py-2 items-center border-b">
                    <img class="h-12 object-cover rounded" 
                        :src="item.creator.image_url" 
                        :alt="item.creator.name">

                    <div class="flex flex-col ml-4">
                        <a class="text-base" 
                            :href="'https://' + item.creator.base_url">
                            By <span class="">{{ item.creator.name }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AudioPlayer from '@/components/AudioPlayer.vue'
import { PulseLoader } from '@saeris/vue-spinners'
import axios from 'axios'
import LoginModal from '@/components/LoginModal.vue'
import LikeIcon from '@/components/Icon/LikeIcon.vue'
import LinkIcon from '@/components/Icon/LinkIcon.vue'
import RssIcon from '@/components/Icon/RssIcon.vue'
import ShareIcon from '@/components/Icon/ShareIcon.vue'
import IconBase from '@/components/Icon/IconBase.vue'

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
        PulseLoader,
        LoginModal,
        LikeIcon,
        LinkIcon,
        RssIcon,
        ShareIcon,
        IconBase
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