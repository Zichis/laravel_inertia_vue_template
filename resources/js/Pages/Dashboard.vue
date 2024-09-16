<template>
    <div>
        Dashboard
        <Link :href="route('logout')" method="post" as="button">Logout</Link>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>