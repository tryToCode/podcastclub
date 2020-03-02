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
    data() {
        return {
        }
    },

    mounted() {
        this.$axios.setHeader('Authorization', 'token ' + this.$route.params.token)
        this.$axios.post(process.env.verifyTokenUrl)
        .then(( resp ) => {
            this.$auth.setToken('local', 'token ' + this.$route.params.token)
            this.$auth.setUser(resp.data)
            this.$router.push({ path: '/account' })
        })
    },

    computed: {
        ...mapState({
            message: state => state.token.message,
            error: state => state.token.error
        })
    }
}
</script>