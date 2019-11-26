<template>
    <div class="max-w-3xl flex flex-col mx-auto justify-center px-4 py-2">
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
