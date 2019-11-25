<template>
    <div class="max-w-5xl flex flex-wrap md:justify-around bg-gray-100 mx-auto py-2">
        <div class="flex flex-wrap items-center text-sm">
            <div class="">
                <label class="hidden md:block tracking-wide text-gray-700" 
                    for="grid-state">
                Search Episodes
                </label>
            </div>
            <div class="ml-2 flex flex-wrap items-center">
                <label class="hidden md:block md:pr-2 tracking-wide text-gray-700" 
                    for="grid-state">
                of
                </label>
                <div class="relative mx-2 md:mx-0">
                    <select class="block appearance-none bg-gray-200 
                            border border-gray-200 text-gray-700 py-1 
                            px-1 pr-1 px-2 md:pr-8 rounded leading-tight focus:outline-none 
                            focus:bg-white focus:border-gray-500" 
                        name="catType"
                        @change="onFilterChange($event, 'category')"
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
            <div class="flex flex-wrap items-center">
                <label class="hidden md:block md:px-2 tracking-wide text-gray-700" 
                    for="grid-state">
                for
                </label>
                <div class="relative">
                    <select class="block appearance-none bg-gray-200 
                            border border-gray-200 text-gray-700 
                            px-1 py-1 md:px-2 md:pr-8 rounded leading-tight focus:outline-none 
                            focus:bg-white focus:border-gray-500" 
                        name="dateType"
                        @change="onFilterChange($event, 'date')"
                        v-model="dateSelected">
                        <option v-for="date in dateType"
                            :value="date.name" 
                            :key="date.id">
                            {{ date.name }}
                        </option>
                    </select>
                    <BaseDownArrow />
                </div>
            </div>
        </div>

        <div class="hidden md:flex flex-wrap items-center text-sm">
            <span class="p-2">{{itemsCount}} results ( {{timeSpend}} seconds )</span>
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
        onFilterChange: function(event, filterSection) {                
            this.$emit('onFilterChange', event.target.value, filterSection)
        }
    }
}
</script>