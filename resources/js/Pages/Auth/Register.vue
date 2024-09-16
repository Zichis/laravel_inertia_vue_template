<template>
    <div>
        <form @submit.prevent="login">
            <h1>Signup</h1>
            <div>
                <input v-model="form.name" class="border px-5 py-2" type="text" name="name" placeholder="Enter name" autofocus required>
                <p class="text-red-500">{{ errors.name }}</p>
            </div>
            <div>
                <input v-model="form.email" class="border px-5 py-2" type="text" name="email" placeholder="Enter email" autofocus required>
                <p class="text-red-500">{{ errors.email }}</p>
            </div>
            <div>
                <input v-model="form.password" class="border px-5 py-2" type="password" name="password" placeholder="Enter password" required>
                <p class="text-red-500">{{ errors.password }}</p>
            </div>
            <div>
                <input v-model="form.password_confirmation" class="border px-5 py-2" type="password" name="password" placeholder="Enter password confirmation" required>
                <p class="text-red-500">{{ errors.password_confirmation }}</p>
            </div>
            <button class="px-3 py-1 my-2 inline-block bg-blue-500 text-white">Sign Up</button>
        </form>
    </div>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';
defineProps({
    errors: Object,
})

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const login = () => {
    console.log("Okay");
    form.post(route('signup'), {
        onFinish: () => {
            form.reset('password');
            console.log(errors);
        },
    });
};
</script>