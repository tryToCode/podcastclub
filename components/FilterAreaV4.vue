<template>
  <div class="flex flex-col px-8 py-2 my-4 md:my-0">
    <BaseInput
        class="my-2"
        @inputChange="filterChangeHandle" />
    
    <p class="font-semibold my-4 border-b">Filters</p>

    <div class="mt-2 flex items-center px-1">
        <BaseLabel 
            class="w-1/2"
            text="Category"
            :hidden="false" />
        <BaseFilter
            class="w-1/2 mx-1"
            id="categorySelect"
            :model="catSelected"
            :selectType="categoryType"
            filterSection="category"
            @onBaseFilterChange="filterChangeHandle"/>
    </div>
    
    <div class="mt-2 flex items-center px-1">
        <BaseLabel 
            class="w-1/2"
            text="Time Periode"
            :hidden="false" />
        <BaseFilter
            class="w-1/2 mx-1"
            id="dateSelect"
            :model="dateSelected"
            :selectType="dateType"
            filterSection="date"
            @onBaseFilterChange="filterChangeHandle"/>
    </div>

    <button v-show="catSelected !== 'All' || dateSelected !== 'All Time'" 
        class="w-full bg-red-500 text-white py-1 px-2 border border-red-500 
        rounded mt-6 mx-1"
        @click="reset">
        Reset Filter
    </button>
  </div>
</template>

<script>
import BaseInput from './Base/BaseInput.vue'
import BaseFilter from './Base/BaseFilter.vue'
import BaseLabel from './Base/BaseLabel.vue'

export default {
    name: 'filter-area-v4',

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
            ]
        }
    },

    components: {
        BaseInput,
        BaseFilter,
        BaseLabel
    },

    methods: {
        async filterChangeHandle(filterSection, value) {
            switch (filterSection) {
                case 'category':
                    this.catSelected = value
                    break
                case 'date':
                    this.dateSelected = value
                    break
            }
            this.$store.dispatch('apiUrl/filterChangeHandle', {
                section: filterSection,
                value: value
            })
        },

        async reset() {
            this.catSelected = 'All'
            this.dateSelected = 'All Time'
            const payload = {
                'pageSize': '20',
                'category': this.catSelected,
                'date': this.dateSelected
            }
            this.$store.dispatch('apiUrl/settingChangeHandle', payload)
            .then(() => {
                this.rerender = !this.rerender
            })
        }
    }
}
</script>

<style>

</style>