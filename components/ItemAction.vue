<template>
  <div class="flex my-2 border-t pt-3 items-center justify-between">
    <div class="flex items-center">
        <a class="group md:mr-2 flex items-center justify-center px-1 cursor-pointer"
            @click="upVote">
            <ThumbIcon class="group-hover:text-red-500" />
            <span class="group-hover:text-red-500">Like</span>
            <span v-if="likes > 0" 
                class="group-hover:text-red-500 mx-1">
            ({{ this.likes }})
            </span>
        </a>

        <!-- <a class="group md:mr-2 flex items-center justify-center px-1"
            :href="item.item_url">
            <CommentIcon class="group-hover:text-red-500" />
            <span class="group-hover:text-red-500">Comments</span>
        </a> -->

        <a class="group md:mr-2 flex items-center justify-center px-1"
            :href="item.item_url">
            <LinkIcon class="group-hover:text-red-500" />
            <span class="group-hover:text-red-500">Link</span>
        </a>

        <a class="group md:mr-2 flex items-center justify-center px-1 cursor-pointer"
            @click="downloadRss">
            <RssIcon class="group-hover:text-red-500" />
            <span class="group-hover:text-red-500">RSS</span>
        </a>

        <div class="relative flex-col">
            <div class="flex items-center justify-center px-1 cursor-pointer group"
                @click="showDropDown">
                <ShareIcon class="group-hover:text-red-500" />
                <span class="group-hover:text-red-500">Share</span>
            </div>

            <div v-if="isOpen" class="absolute">
                <social-sharing
                    :url="item.enclosure"
                    :title="item.title"
                    :description="item.summary"
                    :quote="item.description"
                    :hashtags="item.creator.name"
                    :twitter-user="item.title"
                    inline-template>
                    <div>
                        <ul class="absolute font-normal bg-white shadow overflow-hidden rounded w-40 
                            border mt-2 py-1 left-0 z-20">
                            <li class="group">
                                <network network="facebook" 
                                    class="flex items-center px-3 py-3 hover:bg-gray-200 cursor-pointer group">
                                    <svg class="fill-current group-hover:text-blue-700" width="18" height="18"
                                        viewBox="0 0 24 24">
                                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 
                                        24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 
                                        0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 
                                        3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                                    </svg> 
                                    <span class="ml-2 group-hover:text-blue-700">Facebook</span>
                                </network>
                            </li>
                            <li class="group">
                                <network network="linkedin" 
                                    class="flex items-center px-3 py-3 hover:bg-gray-200 cursor-pointer group">
                                    <svg class="fill-current group-hover:text-blue-800" width="18" height="18"
                                        viewBox="0 0 24 24">
                                        <path d="M0 0v24h24V0H0zm8 19H5V8h3v11zM6.5 6.732c-.966 
                                        0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 
                                        1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.397-2.586 
                                        7-2.777 7 2.476V19z"/>
                                    </svg>
                                    <span class="ml-2 group-hover:text-blue-800">LinkedIn</span>
                                </network>
                            </li>
                            <li class="group">
                                <network network="twitter"
                                    class="flex items-center px-3 py-3 hover:bg-gray-200 cursor-pointer">
                                    <svg class="fill-current group-hover:text-blue-800" width="18" height="18" 
                                        viewBox="0 0 24 24">
                                        <path d="M0 0v24h24V0H0zm18.862 9.237c.208 4.617-3.235 9.765-9.33 
                                        9.765A9.286 9.286 0 014.5 17.527a6.605 6.605 0 004.86-1.359 3.285 
                                        3.285 0 01-3.066-2.28 3.3 3.3 0 
                                        001.482-.056c-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411A3.289 
                                        3.289 0 015.613 6.6a9.32 9.32 0 006.766 3.43 3.285 3.285 0 015.594-2.993 6.568 
                                        6.568 0 002.085-.796 3.292 3.292 0 01-1.443 1.816A6.578 6.578 0 0020.5 7.54a6.707 
                                        6.707 0 01-1.638 1.697z"/>
                                    </svg>
                                    <span class="ml-2 group-hover:text-blue-800">Twitter</span>
                                </network>
                            </li>
                        </ul>
                    </div>
                </social-sharing>
            </div>
        </div>

    </div> <!--item action wrapper -->

    <div class="hidden md:mr-2 md:flex md:items-center md:justify-center px-1">
        <viewIcon />
        <span>Views</span>
        <span v-if="views > 0" 
            class="mx-1">
        ({{ this.views }})
        </span>
    </div>
  </div>
</template>

<script>
import LikeIcon from './Icon/LikeIcon.vue'
import LinkIcon from './Icon/LinkIcon.vue'
import RssIcon from './Icon/RssIcon.vue'
import ShareIcon from './Icon/ShareIcon.vue'
import ThumbIcon from './Icon/ThumbIcon.vue'
import CommentIcon from './Icon/CommentIcon.vue'
import ViewIcon from './Icon/ViewIcon.vue'
import { Feed } from "feed"

export default {
    name: 'item-action',

    data() {
        return {
            likes: this.item.likes,
            views: this.item.views,
            isOpen: false
        }
    },

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    mounted() {
        this.views += 1
        this.$store.dispatch('items/increaseViews', this.item.id)
    },

    components: {
        LikeIcon,
        LinkIcon,
        RssIcon,
        ShareIcon,
        ThumbIcon,
        CommentIcon,
        ViewIcon
    },

    methods: {
        upVote() {
            this.likes += 1
            this.$store.dispatch('items/updateLikes', this.item.id)
        },

        genRss() {
            const feed = new Feed({
                title: this.item.creator.name,
                description: this.item.creator.description,
                id: this.item.creator.id,
                link: this.item.creator.base_url,
                language: "en", // optional, used only in RSS 2.0
                image: this.item.creator.image_url,
                updated: new Date(this.item.creator.last_modified), // optional, default = today
                generator: "awesome", // optional, default = 'Feed for Node.js'
                feedLinks: {
                    json: this.item.creator.rss_link
                }
            })

            feed.addItem({
                title: this.item.title,
                id: this.item.id,
                link: this.item.item_url,
                description: this.item.description,
                content: this.item.summary,
            })
            const category = this.item.creator.category
            feed.addCategory(category.split('.')[1])

            return feed.rss2()
        },

        downloadRss() {
            const url = window.URL.createObjectURL(new Blob([this.genRss()]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'rss.xml')
            document.body.appendChild(link)
            link.click()
        },

        showDropDown() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>