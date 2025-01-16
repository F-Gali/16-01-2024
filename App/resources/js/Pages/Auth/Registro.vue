<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    apellido:'',
    telefono:'',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    document.getElementById('telefono').setCustomValidity("");
    if( !(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(document.getElementById('telefono').value)) ){
        document.getElementById('telefono').setCustomValidity("Campo vacío o con formato incorrecto");
        document.getElementById('telefono').reportValidity();
        return;
    }
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />

        <div class="-mx-6 -mt-3 mb-6 text-sm font-medium text-center text-slate-300 border-b border-slate-300 dark:text-slate-300 dark:border-slate-300">
            <ul class="flex flex-wrap justify-center">
                <li class="me-2">
                    <a href="/login" class="inline-block p-4 border-b-2 border-transparent text-slate-400 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Login</a>
                </li>
                <li class="me-2">
                    <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Registro</a>
                </li>
            </ul>
        </div>

        <form @submit.prevent="submit">
            <div class="columns-2">
                <div class="inline-block">
                    <InputLabel for="name" value="Nombre" />

                    <TextInput
                        id="name"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.name"
                        required
                        autofocus
                        autocomplete="name"
                        placeholder="Primer Nombre"
                    />

                    <InputError class="mt-2" :message="form.errors.name" />
                </div>
                <div class="mt-4">
                    <InputLabel for="apellido" value="Apellido" />

                    <TextInput
                        id="apellido"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.apellido"
                        required
                        autofocus
                        autocomplete="apellido"
                        placeholder="Primer Apellido"
                    />

                    <InputError class="mt-2" :message="form.errors.name" />
                </div>
            </div>

            

            

            <div class="mt-4">
                <InputLabel for="telefono" value="Número de teléfono"/>

                <TextInput
                    id="telefono"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.telefono"
                    required
                    autofocus
                    autocomplete="telefono"
                    placeholder="+56911223344"
                />

                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div class="mt-4">
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                    placeholder="user@dominio.cl"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Contraseña" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-4">
                <InputLabel
                    for="password_confirmation"
                    value="Repetir Contraseña"
                />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                />

                <InputError
                    class="mt-2"
                    :message="form.errors.password_confirmation"
                />
            </div>

            <div class="mt-4 flex items-center justify-end">
                <PrimaryButton
                    class="ms-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Registrar Cuenta
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
