<template>
    <div class="max-w-5xl flex flex-wrap md:justify-around bg-gray-100 mx-auto py-2">
        <div class="flex flex-wrap items-center text-sm">
            <div class="ml-2 flex flex-wrap items-center">
                <BaseLabel :text="CAT_LABEL"
                    :hidden="hiddenOnMobile" />
                <BaseFilter
                    :id="CAT_ID"
                    :model="catSelected"
                    :selectType="categoryType"
                    :filterSection="CAT_SECTION"
                    @onBaseFilterChange="onFilterChange"/>
            </div>
            <div class="flex flex-wrap items-center">
                <BaseLabel :text="DATE_LABEL"
                    :hidden="hiddenOnMobile" />
                <BaseFilter 
                    :id="DATE_ID"
                    :model="dateSelected"
                    :selectType="dateType"
                    :filterSection="DATE_SECTION"
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
        }),

        CAT_ID: () => 'categorySelect',

        DATE_ID: () => 'dateSelect',

        CAT_SECTION: () => 'category',

        DATE_SECTION: () => 'date',

        CAT_LABEL: () => "Search Episodes of",

        DATE_LABEL: () => "for",
        
        hiddenOnMobile() {
            return true
        }
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