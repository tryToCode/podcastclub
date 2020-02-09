<template>
    <div class="flex flex-col overflow-hidden px-4 lg:px-8 py-2 mt-2 border-b">
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
        <div class="md:flex text-sm text-gray-500 mt-3 items-center">
            <a class="md:flex pr-1 group"
                :href="'https://' + item.creator.base_url">
                <span class="hidden md:inline-block">
                    <UserIcon class="group-hover:text-red-500" />
                </span>
                <span class="group-hover:text-red-500">
                    {{ item.creator.name }}
                </span>
            </a>
            <span class="text-gray-500 md:hidden">|</span>
            <span class="md:flex px-1 group">
                <span class="hidden md:inline-block">
                    <GroupIcon class="group-hover:text-red-500" />
                </span>
                <span class="group-hover:text-red-500">
                    {{ item.creator.category.split('.')[1] }}
                </span> 
            </span>
            <span class="text-gray-500 md:hidden    ">|</span>
            <span class="md:flex px-1 group">
                <span class="hidden md:inline-block">
                    <ClockIcon class="group-hover:text-red-500" />
                </span>
                <span class="group-hover:text-red-500">
                    {{ $moment(item.pub_date).fromNow() }}
                </span> 
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