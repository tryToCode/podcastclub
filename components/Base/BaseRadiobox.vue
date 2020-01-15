<template>
  <div class="flex items-center my-2 justify-between cursor-pointer pl-2">
    <span class="font-semibold">
        {{ label }}
    </span>
    <input type="radio"
        @change="onCheckboxChanged($event)"
        :id="label"
        :name="filterSection"
        :value="label"
        v-model="modelName"
        class="form-radio"
        :class="color">
  </div>
</template>

<script>
export default {
    data() {
        return {
            modelName: this.model
        }
    },

    props: {
        label: {
            tpye: String,
            required: true
        },

        color: {
            type: String,
            default: "text-red-500"
        },

        model: {
            type: String,
            required: true
        },

        filterSection: {
            type: String,
            required: true
        },
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
        onCheckboxChanged: function(event) {
            this.$emit("onBaseInputChange", this.filterSection, event.target.value)
        }
    }
}
</script>