<template>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
    mounted() {
        console.log(this.$route.params.token);
        this.$store.dispatch('auth/verifyToken', {
            token: this.$route.params.token
        })
    },

    computed: {
        ...mapState({
            loggedIn: state => state.auth.isAuthenticated,
            redirectPage: state => state.auth.redirectPage,
            message: state => state.auth.message,
            error: state => state.auth.error
        })
    }
}
</script>