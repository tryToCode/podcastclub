<template>
  <div class="flex flex-col border-2 p-4 m-4">
    <h1 class="text-xl font-bold m-2">{{ title }}</h1>
    <div>
        <span class="font-bold border-2 text-green-400 px-2 
            py-1 rounded uppercase m-2">
            Get
        </span>
        <span class="bg-green-100">
            {{ baseUrl }}
        </span>
    </div>
    <div class="m-2">
        <vue-json-pretty
            :data="jsonData">
        </vue-json-pretty>                
    </div>
  </div>
</template>

<script>
export default {
    props: {
        tilte: {
            type: String,
            required: true
        },

        baseUrl: {
            type: String,
            required: true
        },

        jsonData: {
            type: Object,
            required: true
        }
    }
}
</script>