<template>
  <div class="flex my-2 items-center">
    <a class="py-1 flex items-center mr-2 justify-center cursor-pointer"
        @click="play">
        <svg v-if="isTimerPlaying" class="fill-current text-red-400 hover:text-red-500 w-8 h-8 mr-2"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/>
        </svg>
        <svg v-else class="fill-current text-red-400 hover:text-red-500 w-8 h-8 mr-2" 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 
            10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 
            17v-10l9 5.146-9 4.854z"/>
        </svg>
    </a>
    <div class="flex items-center justify-between" ref="progress">
        <div class="px-2 opacity-50">{{ currentTime }}</div>
        <div class="inline-block h-2 w-64 bg-gray-400 cursor-pointer rounded mx-2 opacity-75"
            @click="clickProgress">
            <div class="h-2 bg-red-500 rounded" :style="{ width : barWidth }"></div>
        </div>
        <div class="px-2 opacity-75">{{ duration }}</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'audio-player',

    props: {
        audioSource: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false   
        }
    },

    mounted() {
        let vm = this
        this.audio = new Audio(this.audioSource)
        this.audio.ontimeupdate = function() {
            vm.generateTime()
        }
        this.audio.onloadedmetadata = function() {
            console.log('audio metadata loaded...')
            vm.generateTime()
        }
        this.audio.onended = function() {
            vm.resetPlayer()
        }
    },

    methods: {
        play() {
            if (this.audio.paused) {
                this.audio.play()
                this.isTimerPlaying = true
            } else {
                this.audio.pause()
                this.isTimerPlaying = false
            }
        },

        generateTime() {
            let width = (100 / this.audio.duration) * this.audio.currentTime
            this.barWidth = width + "%"
            this.circleLeft = width + "%"
            let durmin = Math.floor(this.audio.duration / 60)
            let dursec = Math.floor(this.audio.duration - durmin * 60)
            let curmin = Math.floor(this.audio.currentTime / 60)
            let cursec = Math.floor(this.audio.currentTime - curmin * 60)
            if (durmin < 10)
                durmin = "0" + durmin          
            if (dursec < 10) 
                dursec = "0" + dursec
            if (curmin < 10) 
                curmin = "0" + curmin
            if (cursec < 10) 
                cursec = "0" + cursec
            this.duration = durmin + ":" + dursec
            this.currentTime = curmin + ":" + cursec
        },

        updateBar(x) {
            let progress = this.$refs.progress
            let maxduration = this.audio.duration
            let position = x - progress.offsetLeft
            let percentage = (100 * position) / progress.offsetWidth
            if (percentage > 100)
                percentage = 100
            if (percentage < 0)
                percentage = 0
            this.barWidth = percentage + "%"
            this.circleLeft = percentage + "%"
            this.audio.currentTime = (maxduration * percentage) / 100
            this.audio.play()
        },

        clickProgress(e) {
            this.isTimerPlaying = true
            this.audio.pause()
            this.updateBar(e.pageX)
        },

        resetPlayer() {
            this.isTimerPlaying = false
            this.barWidth = 0
            this.circleLeft = 0
            this.audio.src = this.audioSource
        }
    }
}
</script>