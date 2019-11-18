<template>
    <div class="max-w-5xl flex flex-wrap justify-around bg-gray-100 mx-auto">
        <div class="flex flex-wrap py-1 justify-start text-sm">
            <div class="items-center mb-6 md:mb-0 flex">
                <label class="block tracking-wide text-gray-700 py-2" 
                    for="grid-state">
                Search Episodes
                </label>
            </div>
            <div class="pl-2 mb-6 md:mb-0 flex items-center">
                <label class="block tracking-wide text-gray-700 py-2 pr-2" 
                    for="grid-state">
                of
                </label>
                <div class="relative">
                    <select class="block appearance-none bg-gray-200 
                            border border-gray-200 text-gray-700 py-1 
                            px-2 pr-8 rounded leading-tight focus:outline-none 
                            focus:bg-white focus:border-gray-500" 
                        id="grid-state"
                        name="catType"
                        @change="onCategoryChange($event)"
                        v-model="catSelected">
                        <option v-for="cat in categoryType" 
                            :value="cat.name" 
                            :key="cat.id">
                            {{ cat.name }}
                        </option>
                    </select>
                    <BaseDownArrow />
                </div>
            </div>
            <div class="mb-6 md:mb-0 flex items-center">
                <label class="block tracking-wide text-gray-700 p-2" 
                    for="grid-state">
                for
                </label>
                <div class="relative">
                    <select class="block appearance-none bg-gray-200 
                            border border-gray-200 text-gray-700 py-1 
                            px-2 pr-8 rounded leading-tight focus:outline-none 
                            focus:bg-white focus:border-gray-500" 
                        id="grid-state"
                        name="dateType"
                        v-model="dateSelected">
                        <option v-for="date in dateType"
                            @change="onDateChange($event)"
                            :value="date.name" 
                            :key="date.id">
                            {{ date.name }}
                        </option>
                    </select>
                    <BaseDownArrow />
                </div>
            </div>
        </div>

        <div class="flex flex-wrap items-center text-sm">
            <span class="p-2">{{itemsCount}} results ( {{timeSpend}} seconds )</span>
            <font-awesome-icon :icon="['fas', 'share-alt']"/>
        </div>
    </div>
</template>

<script>
import BaseDownArrow from './BaseDownArrow.vue'

export default {
    data() {
        return {
            catSelected: 'All',
            categoryType: [
                {name: 'All', id: 0},
                {name: 'IT', id: 1},
                {name: 'Entrepreneurship', id: 2},
                {name: 'Finance', id: 3}
            ],
            dateSelected: 'All Time',
            dateType: [
                {name: 'All Time', id: 1},
                {name: 'Last 24', id: 2},
                {name: 'Past Week', id: 3},
                {name: 'Past Month', id: 4},
                {name: 'Past Year', id: 5}
            ]
        }
    },

    components: {
        BaseDownArrow
    },

    props: {
        itemsCount: {
            type: Number,
            required: true
        },
        timeSpend: {
            type: Number,
            required: true
        }
    },

    methods: {
        onCategoryChange: function(event) {                
            this.$emit('onCategoryChange', event.target.value)
        },

        onDateChange: function(event) {                
            this.$emit('onDateChange', event.target.value)
        }
    }
}
</script>