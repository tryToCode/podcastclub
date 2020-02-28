<template>
    <div class="flex overflow-hidden border-b">
        <div v-if="this.$auth.loggedIn || loggedIn || loggedInWithMail" 
            class="flex flex-col justify-center pl-2 pr-1 text-center 
            hover:text-gray-500 cursor-pointer group"
            @click="add(item.id)">
            <AddIcon class="my-1 group-hover:text-red-500" />
            <span class="text-gray-500 text-base group-hover:text-red-500">Add</span>
        </div>
        
        <div class="flex flex-col pl-2 pr-4 lg:pr-8 py-2 mt-2">
            <div class="leading-tight">
                <nuxt-link
                    :to="'/show/' + item.id"
                    class="font-semibold">
                {{ item.title }}
                </nuxt-link>
                <br />
                <span v-if="item.item_url !== null" 
                    class="hidden md:inline text-gray-500 text-sm">
                    ({{ item.item_url }})
                </span>
            </div>
            <div class="md:flex text-sm text-gray-500 mt-3 items-center">
                <a class="md:flex pr-1 group"
                    :href="'https://' + item.creator.base_url">
                    <span class="hidden md:inline-block">
                        <UserIcon class="group-hover:text-red-500" />
                    </span>
                    <span class="group-hover:text-red-500">
                        {{ item.creator.name }}
                    </span>
                </a>
                <span class="text-gray-500 md:hidden">|</span>
                <span class="md:flex px-1 group">
                    <span class="hidden md:inline-block">
                        <GroupIcon class="group-hover:text-red-500" />
                    </span>
                    <span class="group-hover:text-red-500">
                        {{ item.creator.category.split('.')[1] }}
                    </span> 
                </span>
                <span class="text-gray-500 md:hidden    ">|</span>
                <span class="md:flex px-1 group">
                    <span class="hidden md:inline-block">
                        <ClockIcon class="group-hover:text-red-500" />
                    </span>
                    <span class="group-hover:text-red-500">
                        {{ $moment(item.pub_date).fromNow() }}
                    </span> 
                </span>
            </div>

        </div>
    </div>
</template>
    
<script>
import { mapState } from 'vuex'
import ClockIcon from './Icon/ClockIcon.vue'
import UserIcon from './Icon/UserIcon.vue'
import GroupIcon from './Icon/GroupIcon.vue'
import AddIcon from './Icon/AddIcon.vue'

export default {
    name: 'podcast-item',

    data() {
        return {
            loggedInWithMail: false
        }
    },

    mounted() {
        if (localStorage.getItem('apiUrl')) {
            let loggedInWithMail = null
            JSON.parse(localStorage.getItem('apiUrl'), (key, value) => {
                if (key === 'loggedInWithMail') {
                    loggedInWithMail = value
                    return
                }
            })
            this.loggedInWithMail = loggedInWithMail
        }
    },

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    components: {
        ClockIcon,
        UserIcon,
        GroupIcon,
        AddIcon
    },

    computed: {
        ...mapState({
            loggedIn: state => state.localAuth.loggedInWithMail
        })
    },

    methods: {
        add() {

        }
    }
}
</script>