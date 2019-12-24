<template>
    <div class="max-w-5xl flex flex-wrap md:justify-around bg-gray-100 mx-auto py-2">
        <div class="flex flex-wrap items-center text-sm">
            <div class="ml-2 flex flex-wrap items-center">
                <BaseLabel text="Search Episodes of"
                    :hidden="true" />
                <BaseFilter
                    id="categorySelect"
                    :model="catSelected"
                    :selectType="categoryType"
                    filterSection="category"
                    @onBaseFilterChange="onFilterChange"/>
            </div>
            <div class="flex flex-wrap items-center">
                <BaseLabel text="for"
                    :hidden="true" />
                <BaseFilter 
                    id="dateSelect"
                    :model="dateSelected"
                    :selectType="dateType"
                    filterSection="date"
                    @onBaseFilterChange="onFilterChange"/>
            </div>
        </div>

        <div class="hidden md:flex flex-wrap items-center text-sm">
            <span class="p-2">
                {{Number(itemsCount)}} results 
                ( {{Number(timeSpent)}} seconds )
            </span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseFilter from './Base/BaseFilter.vue'
import BaseLabel from './Base/BaseLabel.vue'

export default {
    name: 'filter-row',

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
        BaseFilter,
        BaseLabel
    },

    computed: {
        ...mapState({
            itemsCount: state => state.items.itemsCount,
            timeSpent: state => state.items.timeSpent
        })
    },

    methods: {
        onFilterChange: function(filterSection, value) {
            switch (filterSection) {
                case 'category':
                    this.catSelected = value
                    break
                case 'date':
                    this.dateSelected = value
                    break
            }
            this.$emit('onFilterChange', filterSection, value)
        }
    }
}
</script>