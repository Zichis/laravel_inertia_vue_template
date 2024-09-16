<template>
    <div>
        <form @submit.prevent="login">
            <h1>Login</h1>
            <div>
                <input v-model="form.email" class="border px-5 py-2" type="text" name="email" placeholder="Enter email" autofocus required>
                <p class="text-red-500">{{ errors.email }}</p>
            </div>
            <div>
                <input v-model="form.password" class="border px-5 py-2" type="password" name="password" placeholder="Enter password" required>
                <p class="text-red-500">{{ errors.password }}</p>
            </div>
            <div>
                <input v-model="form.remember" type="checkbox" name="remember" id="remember">
                <label for="remember" class="cursor-pointer">Remember me</label>
            </div>
            <Link :href="route('password.request')" class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                Forgot your password?
            </Link>
            <button class="px-3 py-1 my-2 inline-block bg-blue-500 text-white">Login</button>
        </form>
    </div>
</template>

<script setup>
import { useForm, Link } from '@inertiajs/vue3';
defineProps({
    errors: Object,
})

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const login = () => {
    console.log("Okay");
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password');
            console.log(errors);
        },
    });
};
</script>