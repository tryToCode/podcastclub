<template>
    <nav class="max-w-5xl flex flex-wrap bg-red-400 h-16 mx-auto">
        <div class="flex flex-wrap p-1">
            <div class="flex pl-6 items-center">
                <font-awesome-icon :icon="['fas', 'podcast']"/>
                <a class="pl-2 tracking-wide text-xl" href="#">
                    Podcasts Zone
                </a>
            </div>
        </div>
        
        <div class="flex flex-wrap py-2 px-4 items-center lg:w-3/4 justify-around">
            <div class="w-3xl shadow flex xl:w-2/3 items-center relative">
                <input class="w-full rounded py-3 pl-12 font-medium" type="text" 
                    placeholder="Search Episode by title, url or author">
                <span class="absolute w-auto flex justify-start items-center text-grey px-4">
                    <font-awesome-icon :icon="['fas', 'search']"/>
                </span>
            </div>
            <div class="flex items-center">
                <font-awesome-icon :icon="['fas', 'cog']"/>
                <a class="p-1 pr-6 tracking-wide text-xl" href="#">
                    Setting
                </a>
            </div>
        </div>            
    </nav>
</template>