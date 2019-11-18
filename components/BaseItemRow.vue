<template>
    <div class="overflow-hidden">
        <div class="px-6">
            <a class="font-semibold text-base"
                :href="item.item_url"
                v-tooltip.top="item.description">
            {{item.title}}
            </a>
            <span class="text-gray-500 text-sm">
                ({{item.item_url}})
            </span>
        </div>
        <div class="px-6 text-sm font-semibold text-gray-500">
            <a class="inline-block px-1 "
                :href="'https://' + item.creator.base_url">
            {{item.creator.name}}
            </a>
            <span class="text-gray-500">|</span>
            <span class="inline-block px-1">
            {{item.creator.category.split('.')[1]}}
            </span>
            <span class="text-gray-500">|</span>
            <span class="inline-block px-1">
            {{$moment(item.pub_date).fromNow()}}
            </span>
            <div v-if="item.episode_number !== null"
                class="inline-block">
                <span class="text-gray-500">|</span>
                <span class="inline-block px-1">
                    #{{item.episode_number}}
                </span>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>