<template>
    <div class="relative mx-2 md:mx-0">
        <select class="block appearance-none bg-gray-200 
                border border-gray-200 text-gray-700 py-1 
                px-1 pr-6 md:pr-6 rounded leading-tight focus:outline-none 
                focus:bg-white focus:border-gray-500" 
            :id="id"
            @change="onFilterChange($event)"
            v-model="modelName">
            <option v-for="t in selectType" 
                :value="t.value" 
                :key="t.id">
                {{ t.value }}
            </option>
        </select>
        <DownArrowIcon />
    </div>
</template>

<script>
import DownArrowIcon from '@/components/Icon/DownArrowIcon.vue'

export default {
    name: 'base-filter',

    data() {
        return {
            modelName: this.model
        }
    },

    props: {
        id: {
            type: String,
            required: true
        },

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
        DownArrowIcon
    },

    mounted() {
        if (localStorage.getItem('apiUrl')) {
            let model = null
            JSON.parse(localStorage.getItem('apiUrl'), (key, value) => {
                if (key === this.filterSection) {
                    model = value
                    return
                }
            })
            this.modelName = model
        }
    },

    methods: {
        onFilterChange: function(event) {
            this.$emit('onBaseFilterChange', this.filterSection, event.target.value)
        }
    }
}
</script>
