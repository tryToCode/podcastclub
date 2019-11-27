<template>
    <div class="max-w-3xl flex flex-col mx-auto justify-center px-4 py-2">
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" 
            role="alert">
            <div class="flex">
                <div class="py-1">
                    <svg class="fill-current h-6 w-6 text-teal-500 mr-4" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                    </svg>
                </div>
                <div>
                <p class="font-bold">
                    This page is still under development and may not working correctly
                </p>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center justify-between my-2">
            <h1 class="text-3xl font-semibold my-1">Contact Page</h1>
            <p>
                Thanks for visiting Podcast Club. If you have any comments or 
                suggestions of podcasts in terms of IT, Entrepreneurship or Finance,
                please use the form below.
            </p>
        </div>
        <form class="w-full">
            <div class="flex flex-col mb-1">
                <label class="block text-gray-500 font-semibold mb-1 md:mb-0 py-1" 
                    for="inline-name">
                    Name
                </label>
                <input class="bg-gray-200 appearance-none border-2 border-gray-100 
                    rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-purple-500" 
                    id="inline-name" 
                    type="text" 
                    placeholder="Enter your name">
            </div>
            <div class="flex flex-col mb-1">
                <label class="block text-gray-500 font-semibold mb-1 md:mb-0 py-1" 
                    for="inline-email">
                    Email
                </label>
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 
                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-purple-500" 
                    id="inline-email" 
                    type="text" 
                    placeholder="Enter your Email">
            </div>
            <div class="flex flex-col mb-1">
                <label class="block text-gray-500 font-semibold mb-1 md:mb-0 py-1" 
                    for="inline-email">
                    Message
                </label>
                <textarea class="form-textarea border-2 mt-1 block w-full bg-gray-200 rounded
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none
                    focus:bg-white focus:border-purple-500" 
                    rows="3" 
                    placeholder="Enter your Message here.">
                </textarea>    
            </div>
            <div class="md:flex mb-6">
                <label class="block text-gray-500 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-sm">
                        Send me your newsletter!
                    </span>
                </label>
            </div>
            <div class="md:flex md:items-center">
                <button class="shadow bg-gray-500 hover:bg-purple-400 focus:shadow-outline 
                    focus:outline-none text-white font-bold py-2 px-4 rounded" 
                    type="button">
                    Send Mail
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    head () {
        return {
            title: "Contact",
            meta: [
            { name: 'description', 
              content: 'Podcast club contact page contact us get in touch' }
            ]
        }
    }
}
</script>
