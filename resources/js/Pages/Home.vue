<template>
    <div>
        <h1>Home</h1>
    </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';

const swal = inject('$swal');

onMounted(() => {
    swal.fire({
        toast: true,
        title: "Success",
        text: "Welcome",
        position: 'top-right',
        showConfirmButton: false,
        showCloseButton: true,
        icon: 'success',
    })
});


</script>