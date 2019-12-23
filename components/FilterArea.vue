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
    name: 'Filter Area',

    components: {
      TheNavbar,
      TopFilterRow
    },

    methods: {
      async filterChangeHandle(filterSection, value) {
        this.$store.dispatch('apiUrl/filterChangeHandle', {
            section: filterSection,
            value: value
        })
      }
    }
}
</script>
