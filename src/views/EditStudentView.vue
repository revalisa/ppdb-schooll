<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter();

const route = useRoute()
const id = route.params.id

const namaLengkap = ref ('')
const tempatLahir = ref ('')
const tanggalLahir = ref ('')
const jenisKelamin = ref ('')
const alamat = ref ('')
const noTelepon = ref ('')
const asalSekolah = ref ('')


    const saveData = async () => {
        const student = JSON.stringify({
            namaLengkap: namaLengkap.value,
            tempatLahir: tempatLahir.value,
            tanggalLahir: Date.parse(tanggalLahir.value)/1000,
            jenisKelamin: jenisKelamin.value,
            alamat: alamat.value,
            noTelepon: noTelepon.value,
            asalSekolah: asalSekolah.value
    });

    const response = await fetch('/api/students/${id}', {
        method:'PUT',
        body: student,
    })

    const data = await response.json()

    router.push('/')
}

onMounted(() => {
    fetch(`/api/students/${id}`)
        .then(response => response.json())
        .then(data => {
            namaLengkap.value = data.namaLengkap
            tempatLahir.value = data.tempatLahir
            tanggalLahir.value = new Date(data.tanggalLahir * 1000).toISOString().slice(0, 16)
            jenisKelamin.value = data.jenisKelamin
            alamat.value = data.alamat
            noTelepon.value = data.noTelepon
            asalSekolah.value = data.asalSekolah
        })
})

</script>
<template>
      <div class="container px-4 py-6 mx-auto">
        <h1 class="text-lg sm:text-2xl">Daftar Siswa Baru</h1>
        <form @submit.prevent="saveData">
            <div class="w-full">
                <label>Nama Lengkap</label>
                <input type="text" v-model="namaLengkap" class="border">
            </div>
            <div>
                <label>Tempat Lahir</label>
                <input type="text" v-model="tempatLahir" class="border">
            </div>
            <div>
                <label>Tanggal Lahir</label>
                <input type="datetime-local" v-model="tanggalLahir" class="border">
            </div>
            <div>
                <label>Jenis Kelamin</label>
                <input type="text" v-model="jenisKelamin" class="border">
            </div>
            <div>
                <label>Alamat</label>
                <input type="text" v-model="alamat" class="border">
            </div>
            <div>
                <label>No Telepon</label>
                <input type="text" v-model="noTelepon" class="border">
            </div>
            <div>
                <label> Asal Sekolah </label>
                <input type="text" v-model="asalSekolah" class="border">
            </div>
            <div class="mt-3">
                <input type="submit" class="rounded-full text-white bg-sky-500 py-2 px-6 hover:bg-sky-800 hover:cursor-pointer">
            </div>
        </form>
    </div>
</template>