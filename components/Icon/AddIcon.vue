<template>
    <div class="pointer-events-none flex items-center justify-center px-2 text-gray-400">
        <svg class="fill-current" 
            :width="width" 
            :height="height" 
            viewBox="0 0 24 24">
            <path d="M20 15h4.071v2H20v4.071h-2V17h-4.071v-2H18v-4.071h2V15zm-8 
            6H0v-2h12v2zm0-4.024H0v-2h12v2zM12 13H0v-2h12v2zm12-4H0V7h24v2zm0-4H0V3h24v2z"/>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: [Number, String],
            default: 18
        },

        height: {
            type: [Number, String],
            default: 18
        }
    }
}
</script>