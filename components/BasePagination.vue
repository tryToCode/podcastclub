<template>
    <div class="flex justify-center items-center my-3">
        <BaseButton
            :disabled="isPreviousButtonDisabled"
            @click.native="previousPage"
        >
            <font-awesome-icon :icon="['fas', 'arrow-left']"/>
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
            :disabled="isNextButtonDisabled"
            @click.native="nextPage"
        >
            <font-awesome-icon :icon="['fas', 'arrow-right']"/>
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
            const visiblePagesCount = this.visiblePagesCount
            const visiblePagesThreshold = (visiblePagesCount - 1) / 2
            const pagintationTriggersArray = Array(this.visiblePagesCount - 1).fill(0)
            if (currentPage <= visiblePagesThreshold + 1) {
                pagintationTriggersArray[0] = 1
                const pagintationTriggers = pagintationTriggersArray.map(
                (paginationTrigger, index) => {
                    return pagintationTriggersArray[0] + index
                    }
                )
                pagintationTriggers.push(pageCount)
                return pagintationTriggers
            }
            if (currentPage >= pageCount - visiblePagesThreshold + 1) {
                const pagintationTriggers = pagintationTriggersArray.map(
                (paginationTrigger, index) => {
                    return pageCount - index
                    }
                )
                pagintationTriggers.reverse().unshift(1)
                return pagintationTriggers
            }
            pagintationTriggersArray[0] = currentPage - visiblePagesThreshold + 1
            const pagintationTriggers = pagintationTriggersArray.map(
                (paginationTrigger, index) => {
                    return pagintationTriggersArray[0] + index
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
