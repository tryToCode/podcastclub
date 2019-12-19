<template>
  <div>
    <TheNavbar
      @onInputChange="filterChangeHandle"/>

    <TopFilterRow 
      @onFilterChange="filterChangeHandle"/>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue'
import TopFilterRow from './TopFilterRow.vue'

export default {
    components: {
        TheNavbar,
        TopFilterRow
    },

    methods: {
        async filterChangeHandle(value, filterSection) {
            this.$store.dispatch('items/selectChangeHandle', {
                value: value,
                filterSection: filterSection
            })
        }
    }
}
</script>
