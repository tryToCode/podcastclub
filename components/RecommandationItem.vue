<template>
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
</template>

<script>
export default {
    props: {
        item: {
            tpye: Object,
            required: true
        }
    }
}
</script>