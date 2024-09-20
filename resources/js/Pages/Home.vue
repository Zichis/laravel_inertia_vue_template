<template>
    <MainLayout>
        <div class="default-background h-screen">
            <div class="flex flex-col p-5 items-center justify-center min-h-screen">
                <h1 class="text-5xl md:text-9xl p-5 font-bold bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 inline-block text-transparent bg-clip-text">Coming Soon</h1>
                <p class="text-center text-2xl text-orange-50">We are building the greatest innovation of the 21st century.</p>
                <p class="text-center text-2xl text-orange-50">Stay tuned!</p>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { onMounted, inject } from 'vue';
import MainLayout from '../Layouts/MainLayout.vue';

const swal = inject('$swal');

onMounted(() => {
    // swal.fire({
    //     toast: true,
    //     title: "Success",
    //     text: "Welcome",
    //     position: 'top-right',
    //     showConfirmButton: false,
    //     showCloseButton: true,
    //     icon: 'success',
    // })
});
</script>

<style scoped>
.default-background {
    background: url('../../images/inertia-default-landing-page-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>