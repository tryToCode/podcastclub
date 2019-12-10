<template>
    <div class="max-w-5xl flex flex-wrap md:justify-around bg-gray-100 mx-auto py-2">
        <div class="flex flex-wrap items-center text-sm">
            <div class="ml-2 flex flex-wrap items-center">
                <BaseLabel :text="catLabel"
                    :hidden="hiddenOnMobile" />
                <BaseFilter 
                    :model="catSelected"
                    :selectType="categoryType"
                    :filterSection="catSection"
                    @onBaseFilterChange="onFilterChange"/>
            </div>
            <div class="flex flex-wrap items-center">
                <BaseLabel :text="dateLabel"
                    :hidden="hiddenOnMobile" />
                <BaseFilter 
                    :model="dateSelected"
                    :selectType="dateType"
                    :filterSection="dateSection"
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
import BaseLabel from './BaseLabel.vue'

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

    computed: {
        catSection() {
            return 'category'
        },

        dateSection() {
            return 'date'
        },

        catLabel() {
            return "Search Episodes of"
        },

        dateLabel() {
            return "for"
        },

        hiddenOnMobile() {
            return true
        }
    },

    methods: {
        onFilterChange: function(value, filterSection) {
            localStorage.setItem(filterSection, value)
            this.$emit('onFilterChange', value, filterSection)
        }
    }
}
</script>