<template>
    <div class="max-w-5xl flex flex-wrap justify-around bg-gray-100 mx-auto">
        <div class="flex flex-wrap py-1 justify-start text-sm">
            <div class="items-center mb-6 md:mb-0 flex">
                <label class="block tracking-wide text-gray-700 py-2" for="grid-state">
                Search Podcasts
                </label>
            </div>
            <div class="pl-2 mb-6 md:mb-0 flex items-center">
                <label class="block tracking-wide text-gray-700 py-2 pr-2" for="grid-state">
                of
                </label>
                <div class="relative">
                    <select class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option value="">IT</option>
                        <option value="Date">Entrepreneurship</option>
                        <option value="Date">Finance</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div class="px-2 mb-6 md:mb-0 flex items-center">
                <label class="block tracking-wide text-gray-700 p-2" for="grid-state">
                for
                </label>
                <div class="relative">
                    <select class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option value="">All time</option>
                        <option value="Last 24">Last 24</option>
                        <option value="Past Week">Past Week</option>
                        <option value="Past Month">Past Month</option>
                        <option value="Past Year">Past Year</option>
                        <option value="Custom Range">Custum Range</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap items-center text-sm">
            <span class="p-2">19.302.956 results ( 0.008 seconds )</span>
            <font-awesome-icon :icon="['fas', 'share-alt']"/>
        </div>
    </div>
</template>