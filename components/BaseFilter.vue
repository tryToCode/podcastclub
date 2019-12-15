<template>
    <div class="relative mx-2 md:mx-0">
        <select class="block appearance-none bg-gray-200 
                border border-gray-200 text-gray-700 py-1 
                px-1 pr-6 md:pr-6 rounded leading-tight focus:outline-none 
                focus:bg-white focus:border-gray-500" 
            @change="onFilterChange($event)"
            v-model="model">
            <option v-for="t in selectType" 
                :value="t.value" 
                :key="t.id">
                {{ t.value }}
            </option>
        </select>
        <BaseDownArrow />
    </div>
</template>

<script>
import BaseDownArrow from './BaseDownArrow.vue'

export default {
    props: {
        model: {
            type: String,
            required: true
        },

        filterSection: {
            type: String,
            required: true
        },

        selectType: {
            type: Array,
            required: true
        }
    },

    components: {
        BaseDownArrow
    },

    mounted() {
        if (localStorage.getItem(this.filterSection))
            this.model = localStorage.getItem(this.filterSection)
    },

    methods: {
        onFilterChange: function(event) {
            this.$emit('onBaseFilterChange', event.target.value, this.filterSection)
        }
    }
}
</script>
