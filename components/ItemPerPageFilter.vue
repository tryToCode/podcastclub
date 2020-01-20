<template>
    <div class="flex items-center justify-center md:justify-end p-4 m-4 md:p-0 md:m-0">
        <BaseLabel
            class="text-sm text-gray-500"
            text="Episodes Per Page"
            :hidden="false" />
        <BaseFilter 
            id="pageSizeSelect"
            :model="itemPerPage"
            :selectType="selectOptions"
            filterSection="pageSize"
            @onBaseFilterChange="onFilterChange"/>
    </div>
</template>

<script>
import BaseLabel from './Base/BaseLabel.vue'
import BaseFilter from './Base/BaseFilter.vue'

export default {
    data() {
        return {
            itemPerPage: '20',
            selectOptions: [
                {value: '10', id: 0},
                {value: '20', id: 1},
                {value: '30', id: 2},
                {value: '50', id: 3}
            ]
        }
    },

    components: {
        BaseLabel,
        BaseFilter
    },

    methods: {
        onFilterChange: function(filterSection, value) {
            this.itemPerPage = value
            this.$store.dispatch('apiUrl/filterChangeHandle', {
                section: filterSection,
                value: value
            })
        }
    }
}
</script>