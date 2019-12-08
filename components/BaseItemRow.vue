<template>
    <div class="flex overflow-hidden py-1">
        <div class="flex flex-col justify-center pl-2 pr-1 text-center hover:text-gray-500 cursor-pointer">
            <BaseUpArrow />
            <span class="text-gray-500 text-sm">0</span>
        </div>
        <div>
            <div class="pb-1">
                <a v-if="item.description.length !== 0"
                    class="font-medium text-base"
                    :href="item.item_url"
                    :content="item.description"
                    v-tippy="{ placement : 'top', arrow: true, size: 'large' }">
                {{item.title}}
                </a>
                <a v-else
                    class="font-medium text-base"
                    :href="item.item_url">
                {{item.title}}
                </a>
                <span class="hidden md:inline text-gray-500 text-sm">
                    ({{item.item_url}})
                </span>
            </div>
            <div class="text-sm font-semibold text-gray-500">
                <a class="pr-1"
                    :href="'https://' + item.creator.base_url">
                {{item.creator.name}}
                </a>
                <span class="text-gray-500">|</span>
                <span class="px-1">
                {{item.creator.category.split('.')[1]}}
                </span>
                <span class="text-gray-500">|</span>
                <span class="px-1">
                {{$moment(item.pub_date).fromNow()}}
                </span>
                <div v-if="item.episode_number !== null"
                    class="hidden md:inline">
                    <span class="text-gray-500">|</span>
                    <span class="px-1">
                        #{{item.episode_number}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import BaseUpArrow from './BaseUpArrow.vue'

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    components: {
        BaseUpArrow
    }
}
</script>