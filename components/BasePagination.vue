<template>
    <div class="flex justify-center items-center my-4">
        <BaseButton
            class="mr-1"
            :disabled="isPreviousButtonDisabled"
            :class="{
                'hover:text-red-500': 
                !isPreviousButtonDisabled
            }"
            @click.native="previousPage"
        >
            ←
        </BaseButton>
        <BasePaginationTrigger 
            v-for="paginationTrigger in paginationTriggers"
            :class="{
                'text-red-500 border-red-500': 
                paginationTrigger === currentPage
            }"
            :key="paginationTrigger"
            :pageNumber="paginationTrigger"
            class="flex mx-1"
            @loadPage="onLoadPage"
        />
        <BaseButton
            class="ml-1"
            :disabled="isNextButtonDisabled"
            :class="{
                'hover:text-red-500': 
                !isNextButtonDisabled
            }"
            @click.native="nextPage"
        >
            →
        </BaseButton>
    </div>
    
</template>

<script>
import BaseButton from './BaseButton.vue'
import BasePaginationTrigger from './BasePaginationTrigger.vue'
export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        pageCount: {
            type: Number,
            required: true
        },
        visiblePagesCount: {
            type: Number,
            default: 5
        }
    },
    components: {
        BaseButton,
        BasePaginationTrigger
    },
    computed: {
        isPreviousButtonDisabled() {
            return this.currentPage === 1
        },
        isNextButtonDisabled() {
            return this.currentPage === this.pageCount
        },
        paginationTriggers() {
            const currentPage = this.currentPage
            const pageCount = this.pageCount
            var visiblePagesCount = this.visiblePagesCount
            if (pageCount < visiblePagesCount)
                visiblePagesCount = pageCount
            const visiblePagesThreshold = Math.ceil((visiblePagesCount - 1) / 2) 
            const paginationTriggersArray = Array(visiblePagesCount - 1).fill(0)
            if (currentPage <= visiblePagesThreshold + 1) {
                paginationTriggersArray[0] = 1
                const pagintationTriggers = paginationTriggersArray.map(
                (paginationTrigger, index) => {
                    return paginationTriggersArray[0] + index
                    }
                )
                if (pageCount > currentPage)
                    pagintationTriggers.push(pageCount)
                return pagintationTriggers
            }
            if (currentPage >= pageCount - visiblePagesThreshold + 1) {
                const pagintationTriggers = paginationTriggersArray.map(
                (paginationTrigger, index) => {
                    return pageCount - index
                    }
                )
                pagintationTriggers.reverse().unshift(1)
                return pagintationTriggers
            }
            paginationTriggersArray[0] = currentPage - visiblePagesThreshold + 1
            const pagintationTriggers = paginationTriggersArray.map(
                (paginationTrigger, index) => {
                    return paginationTriggersArray[0] + index
                }
            )
            pagintationTriggers.unshift(1)
            pagintationTriggers[pagintationTriggers.length - 1] = pageCount
            return pagintationTriggers
        }
    },
    methods: {
        previousPage() {
            this.$emit("previousPage")
        },
        nextPage() {
            this.$emit("nextPage")
        },
        onLoadPage(value) {
            this.$emit("loadPage", value)
        }
    }
}
</script>
