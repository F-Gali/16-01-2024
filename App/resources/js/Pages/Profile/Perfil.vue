<script setup>

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import {computed} from 'vue';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = computed(()=>usePage().props.auth.user);
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>

        <div class="py-12">
            <div class="mx-auto max-w-2xl space-y-6 sm:px-6 lg:px-8">
                <div
                    class="bg-white p-4 shadow sm:rounded-lg sm:p-8"
                >
                    <h2 class="text-lg font-medium text-gray-900">
                        Perfil
                    </h2>
                    <div class="text-center">
                        <div class="h-40 inline-block">
                            <svg class="h-40 stroke-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                    </div>
                    <h2 class="text-3xl font-bold text-center text-slate-800">{{ user.name }} {{ user.apellido }}</h2>
                    <h4 class="text-1xl font-bold text-center text-slate-600">{{ user.email }}</h4>
                    <h4 class="text-1xl font-bold text-center text-slate-600">{{ user.telefono }}</h4>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
