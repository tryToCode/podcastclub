<template>
    <div class="flex flex-col overflow-hidden px-8 py-2 mt-2 border-b">
        <div class="leading-tight">
            <nuxt-link
                :to="'/show/' + item.id"
                class="font-semibold">
            {{ item.title }}
            </nuxt-link>
            <br />
            <span v-if="item.item_url !== null" 
                class="hidden md:inline text-gray-500 text-sm">
                ({{ item.item_url }})
            </span>
        </div>
        <div class="flex text-sm text-gray-500 mt-3 items-center">
            <a class="flex pr-1"
                :href="'https://' + item.creator.base_url">
                <span><UserIcon /></span>
                {{ item.creator.name }}
            </a>
            <span class="flex px-1">
            <span><GroupIcon /></span>
            {{ item.creator.category.split('.')[1] }}
            </span>
            <span class="flex px-1">
            <span><ClockIcon /></span>
            {{ $moment(item.pub_date).fromNow() }}
            </span>
        </div>
    </div>
</template>
    
<script>
import ClockIcon from './Icon/ClockIcon.vue'
import UserIcon from './Icon/UserIcon.vue'
import GroupIcon from './Icon/GroupIcon.vue'

export default {
    name: 'podcast-item',

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    components: {
        ClockIcon,
        UserIcon,
        GroupIcon
    }
}
</script>