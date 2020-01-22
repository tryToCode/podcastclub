<template>
    <div class="bg-gray-100">
        <div class="md:max-w-6xl flex flex-col md:flex-row md:mx-auto py-10 md:py-6">
            <div class="md:w-3/5 lg:w-2/3 px-8 py-4">
                <ItemArea />
            </div>

            <div class="border md:hidden">
            </div>

            <div class="md:w-2/5 lg:w-1/3 py-4">
                <FilterAreaV4 />
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ItemArea from '@/components/ItemArea.vue'
import FilterAreaV4 from '@/components/FilterAreaV4.vue'

export default {
    middleware: 'error',

    head () {
        return {
            title: 'Podcast Club',
            meta: [
            { name: 'description', 
            content: 'Podcast club home index page, a daily updated podcast aggregator' }
            ]
        }
    },

    mounted() {
        this.resetRoute();
    },

    components: {
        ItemArea,
        FilterAreaV4
    },

    computed: {
        ...mapState({
            loadItemUrl: state => state.apiUrl.url
        })
    },

    watch: {
        loadItemUrl: {
            handler(val, oldVal) {
                this.resetRoute();
                this.$store.dispatch("items/loadItems");
            }
        }
    },

    methods: {
        resetRoute() {
            const url = new URL(this.loadItemUrl);
            let urlKey = ["search", "category", "date", "pageSize", "page"];
            let query = Object.assign({}, this.$route.query);
            for (var keyValue of url.searchParams.entries()) {
                const [key, value] = keyValue;
                let obj = {};
                obj[key] = value;
                query = Object.assign({}, query, obj);
                urlKey = urlKey.filter(e => e !== key);
            }
            this.$router.replace({ query: query });
            urlKey.forEach(e => this.deleteQuery(e));
        },

        deleteQuery(filterSection) {
            let query = Object.assign({}, this.$route.query);
            switch (filterSection) {
                case "search":
                delete query.search;
                break;
                case "category":
                delete query.category;
                break;
                case "date":
                delete query.date;
                break;
                case "page":
                delete query.page;
                break;
                case "pageSize":
                delete query.pageSize;
                break;
            }
            this.$router.replace({ query });
        }
    }
}
</script>