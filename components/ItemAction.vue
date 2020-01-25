<template>
  <div class="flex my-2 border-t pt-3 items-center">
    <a class="group md:mr-2 flex items-center justify-center px-1 cursor-pointer"
        @click="upVote">
        <ThumbIcon class="group-hover:text-red-500" />
        <span class="group-hover:text-red-500">Like</span>
    </a>

    <a class="group md:mr-2 flex items-center justify-center px-1"
        :href="item.item_url">
        <LinkIcon class="group-hover:text-red-500" />
        <span class="group-hover:text-red-500">Link</span>
    </a>

    <a class="group md:mr-2 flex items-center justify-center px-1 cursor-pointer">
        <RssIcon class="group-hover:text-red-500" />
        <span class="group-hover:text-red-500">RSS</span>
    </a>

    <a class="group flex items-center justify-center px-1 cursor-pointer">
        <ShareIcon class="group-hover:text-red-500" />
        <span class="group-hover:text-red-500">Share</span>
    </a>
  </div>
</template>

<script>
import LikeIcon from './Icon/LikeIcon.vue'
import LinkIcon from './Icon/LinkIcon.vue'
import RssIcon from './Icon/RssIcon.vue'
import ShareIcon from './Icon/ShareIcon.vue'
import ThumbIcon from './Icon/ThumbIcon.vue'

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    components: {
        LikeIcon,
        LinkIcon,
        RssIcon,
        ShareIcon,
        ThumbIcon
    },

    methods: {
        upVote() {
            this.likes += 1
            this.$store.dispatch('items/updateLikes', item.id)
        },

        generateRss() {

        },

        share() {

        }
    }
}
</script>