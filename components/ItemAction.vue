<template>
  <div class="flex my-2 border-t pt-3 items-center">
    <a class="md:mr-2 flex items-center justify-center px-1 cursor-pointer hover:text-red-500"
        @click="upVote">
        <ThumbIcon />
        <span>Like</span>
    </a>

    <a class="md:mr-2 flex items-center justify-center px-1"
        :href="item.item_url">
        <LinkIcon />
        <span>Link</span>
    </a>

    <a class="md:mr-2 flex items-center justify-center px-1 cursor-pointer">
        <RssIcon />
        <span>RSS</span>
    </a>

    <a class="flex items-center justify-center px-1 cursor-pointer">
        <ShareIcon />
        <span>Share</span>
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