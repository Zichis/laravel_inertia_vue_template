<template>
    <div>
        <Head title="Reset Password" />
        <form @submit.prevent="submit">
            <div>
                <label for="email">Email</label>
                <input class="border" v-model="form.email" type="email" name="email" required>
                <p v-if="form.errors.email" class="text-red-500">{{ form.errors.email }}</p>
            </div>
            <div>
                <label for="password">Password</label>
                <input class="border" v-model="form.password" type="password" name="password" required>
                <p v-if="form.errors.password" class="text-red-500">{{ form.errors.password }}</p>
            </div>
            <div>
                <label for="password">Confirm Password</label>
                <input class="border" v-model="form.password_confirmation" type="password" name="password_confirmation" required>
                <p v-if="form.errors.password_confirmation" class="text-red-500">{{ form.errors.password_confirmation }}</p>
            </div>
            <div>
                <button class="uppercase" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Reset Password</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { Head, useForm } from '@inertiajs/vue3';

const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onError: () => {
            alert("Something went wrong!");
        },
        onSuccess: () => {
            alert("Good!");
        },
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>