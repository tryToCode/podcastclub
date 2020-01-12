<template>
    <div class="flex flex-col overflow-hidden px-8 py-2 border-b-1 mt-2">
        <div class="leading-tight">
            <nuxt-link
                :to="'/show/' + item.id"
                class="font-medium text-base">
            {{ item.title }}
            </nuxt-link>
            <br />
            <span v-if="item.item_url !== null" 
                class="hidden md:inline text-gray-500 text-sm">
                ({{ item.item_url }})
            </span>
        </div>
        <div class="text-sm font-semibold text-gray-500 mt-2">
            <a class="pr-1"
                :href="'https://' + item.creator.base_url">
            {{ item.creator.name }}
            </a>
            <span class="text-gray-500">|</span>
            <span class="px-1">
            {{ item.creator.category.split('.')[1] }}
            </span>
            <span class="text-gray-500">|</span>
            <span class="px-1">
            {{ $moment(item.pub_date).fromNow() }}
            </span>
        </div>
    </div>
</template>
    
<script>

export default {
    name: 'podcast-item',

    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>