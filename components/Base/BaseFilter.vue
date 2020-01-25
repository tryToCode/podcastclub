<template>
    <div class="">
        <select class="form-select block w-full" 
            :id="id"
            @change="onFilterChange($event)"
            v-model="modelName">
            <option v-for="t in selectType" 
                :value="t.value" 
                :key="t.id">
                {{ t.value }}
            </option>
        </select>
    </div>
</template>

<script>
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
