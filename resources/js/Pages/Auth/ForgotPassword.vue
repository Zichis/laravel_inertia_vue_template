<template>
    <div>
        <Head title="Forgot Password" />
        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Forgot your password? No problem. Just let us know your email address and we will email you a password reset
            link that will allow you to choose a new one.
        </div>
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
            {{ status }}
        </div>
        <form @submit.prevent="submit" class="w-1/2">
            <div>
                <label for="email">Email</label>

                <input
                    id="email"
                    type="email"
                    class="mt-1 block w-full border"
                    v-model="form.email"
                    required
                    autofocus
                />

                <p class="mt-2" v-if="form.errors.email">{{ form.errors.email }}</p>
            </div>

            <div class="flex items-center justify-end mt-4">
                <button type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Email Password Reset Link
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
});
defineProps({
    status: String,
});

const submit = () => {
    form.post(route('password.email'));
};
</script>