<template>
    <div class="max-w-5xl flex flex-wrap md:justify-around bg-gray-100 mx-auto py-2">
        <div class="flex flex-wrap items-center text-sm">
            <div class="">
                <label class="hidden md:block tracking-wide text-gray-700">
                Search Episodes
                </label>
            </div>
            <div class="ml-2 flex flex-wrap items-center">
                <label class="hidden md:block md:pr-2 tracking-wide text-gray-700">
                of
                </label>
                <BaseFilter 
                    :model="catSelected"
                    :selectType="categoryType"
                    :filterSection="category"
                    @onBaseFilterChange="onFilterChange"/>
            </div>
            <div class="flex flex-wrap items-center">
                <label class="hidden md:block md:px-2 tracking-wide text-gray-700">
                for
                </label>
                <BaseFilter 
                    :model="dateSelected"
                    :selectType="dateType"
                    :filterSection="date"
                    @onBaseFilterChange="onFilterChange"/>
            </div>
        </div>

        <div class="hidden md:flex flex-wrap items-center text-sm">
            <span class="p-2">{{itemsCount}} results ( {{timeSpend}} seconds )</span>
        </div>
    </div>
</template>

<script>
import BaseFilter from './BaseFilter.vue'

export default {
    data() {
        return {
            catSelected: 'All',
            categoryType: [
                {value: 'All', id: 0},
                {value: 'IT', id: 1},
                {value: 'Entrepreneurship', id: 2},
                {value: 'Finance', id: 3}
            ],
            dateSelected: 'All Time',
            dateType: [
                {value: 'All Time', id: 1},
                {value: 'Last 24', id: 2},
                {value: 'Past Week', id: 3},
                {value: 'Past Month', id: 4},
                {value: 'Past Year', id: 5}
            ],
            date: 'date',
            category: 'category'
        }
    },

    mounted() {
        if (localStorage.catSelected)
            this.catSelected = localStorage.catSelected
        if (localStorage.dateSelected)
            this.dateSelected = localStorage.dateSelected
    },
    
    watch: {
        catSelected(newCat) {
            if (newCat === "All")
                localStorage.removeItem("catSelected")
            localStorage.setItem("catSelected", newCat)
        },
        dateSelected(newDate) {
            if (newDate === "All Time")
                localStorage.removeItem("dateSelected")
            localStorage.setItem("dateSelected", newDate)
        }
    },

    components: {
        BaseFilter
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
        onFilterChange: function(value, filterSection) {
            switch(filterSection){
                case 'category':
                    this.catSelected = value
                    break
                case 'date':
                    this.dateSelected = value
                    break
            }            
            this.$emit('onFilterChange', value, filterSection)
        }
    }
}
</script>