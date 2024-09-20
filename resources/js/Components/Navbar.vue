<template>
    <nav :class="{ 'bg-gradient-to-r from-gray-800 to-gray-700 shadow': $page.url !== '/' }" class="fixed w-full bg-transparent px-5 py-2 md:py-5 flex justify-between items-center">
        <h2 class="text-3xl my-5 lg:my-0 text-amber-100 font-bold uppercase md:mb-0">{{ $page.props.appName }}</h2>
        <button class="md:hidden text-white border px-2" @click="open = !open">
            <font-awesome-icon icon="bars"></font-awesome-icon>
        </button>
        <ul :class="[open ? 'left-0' : 'left-[-100%]']" class="absolute left-0 top-20 w-full p-5 bg-white md:backdrop-blur-sm md:ring-4 md:ring-white/20 md:bg-white/30 md:rounded-full text-amber-900 duration-200 ease-in md:static md:w-auto md:flex md:items-center md:p-2 md:text-gray-100">
            <li class="my-5 md:mx-0 md:my-0"><Link href="/" :class="{ 'text-orange-400 bg-white': $page.url === '/' }" class="p-2 rounded-full duration-300 ease-in hover:text-orange-400 hover:bg-white/20">Home</Link></li>
            <li class="my-5 md:mx-2 md:my-0"><Link href="/about" :class="{ 'text-orange-400 bg-white': $page.url === '/about' }" class="p-2 rounded-full duration-300 ease-in hover:text-orange-400 hover:bg-white/20">About</Link></li>
            <li class="my-5 md:mx-0 md:my-0"><Link href="/contact" :class="{ 'text-orange-400 bg-white': $page.url === '/contact' }" class="p-2 rounded-full duration-300 ease-in hover:text-orange-400 hover:bg-white/20">Contact</Link></li>
            <li class="block md:hidden my-5 md:mx-4 md:my-0" v-if="$page.props.auth.user"><Link href="/dashboard" class="p-2 hover:text-orange-400">Dashboard</Link></li>
            <li class="block md:hidden my-5 md:mx-4 md:my-0" v-if="$page.props.auth.user"><Link :href="route('logout')" method="post" as="button" class="p-2 hover:text-orange-400">Sign Out</Link></li>
            <li class="block md:hidden my-5 md:mx-4 md:my-0" v-if="!$page.props.auth.user"><Link href="/login" class="p-2 hover:text-orange-400">Login</Link></li>
            <li class="block md:hidden my-5 md:mx-4 md:my-0" v-if="!$page.props.auth.user"><Link href="/signup" class="p-2 hover:text-orange-400">Sign Up</Link></li>
        </ul>
        <ul class="hidden p-5 bg-white text-amber-900 md:flex md:items-center md:p-0 md:bg-transparent md:text-gray-100">
            <li class="my-5 md:mx-4 md:my-0" v-if="$page.props.auth.user"><Link href="/dashboard" class="hover:text-orange-400">Dashboard</Link></li>
            <li class="my-5 md:mx-4 md:my-0" v-if="$page.props.auth.user"><Link :href="route('logout')" method="post" as="button" class="hover:text-orange-400">Sign Out</Link></li>
            <li class="my-5 md:mx-4 md:my-0" v-if="!$page.props.auth.user"><Link href="/login" class="hover:text-orange-400">Login</Link></li>
            <li class="my-5 md:mx-4 md:my-0" v-if="!$page.props.auth.user"><Link href="/signup" class="hover:text-orange-400">Sign Up</Link></li>
        </ul>
    </nav>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const open = ref(false);
</script>