<template>
  <div class="flex items-center justify-center py-20 bg-white h-screen">
      <p class="bg-green-500" v-if="message">
          {{ message }}
      </p>
      <p class="bg-red-500" v-else-if="error">
          {{ error }}
      </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    mounted() {
        this.$store.dispatch('auth/verifyToken', {
            token: this.$route.params.token
        })
        .then(() => 
            this.$router.push({ path: '/account' })
        )
    },

    computed: {
        ...mapState({
            message: state => state.auth.message,
            error: state => state.auth.error
        })
    }
}
</script>