<template>
    <div class="pointer-events-none flex items-center justify-center px-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="full-current text-gray-400"
            :width="width"
            :height="height"
            viewBox="0 0 24 24"
            :aria-labelledby="iconName"
            role="presentation">
            <title :id="iconName" lang="en">{{ iconName }} icon</title>
            <slot />
        </svg>
    </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box"
    },

    width: {
      type: [Number, String],
      default: 18
    },

    height: {
      type: [Number, String],
      default: 18
    },

    iconColor: {
      type: String,
      default: "text-gray-400"
    }
  }
}
</script>
