<template>
  <div class="cursor-pointer hover:opacity-50" @click="toItem">
    <div class="flex py-2 items-center">
        <img class="h-12 object-cover rounded" 
            :src="item.creator.image_url" 
            :alt="item.creator.name">
        <div class="flex flex-col ml-4 overflow-hidden">
            <div class="truncate text-gray-500">
                {{ item.creator.name }}
            </div>
                
            <div class="w-full items-center">
                <div class="font-semibold truncate">
                    {{ item.title }}
                </div>
                <div class="text-gray-500">
                    <span>{{$moment(item.pub_date).startOf('day').fromNow()}}</span>
                    <span>{{ generateTime }}</span> 
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            tpye: Object,
            required: true
        }
    },

    computed: {
        generateTime() {
            let durmin = Math.floor(this.item.duration / 60)
            let dursec = Math.floor(this.item.duration - durmin * 60)
            if (durmin < 10)
                durmin = "0" + durmin          
            if (dursec < 10) 
                dursec = "0" + dursec
            return durmin + ":" + dursec
        }
    },

    methods: {
        toItem() {
            this.$router.push({ path: `/show/${this.item.id}` })
        }
    }
}
</script>