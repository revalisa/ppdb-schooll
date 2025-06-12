<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


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
      <div class="container px-4 py-6 mx-auto w-lg">
        <h1 class="text-lg sm:text-2xl text-center">Daftar Siswa Baru</h1>
        <form @submit.prevent="saveData">
            <div class="w-full">
                <label>Nama Lengkap</label>
                <Input type="text" v-model="namaLengkap" />
            </div>
            <div>
                <label>Tempat Lahir</label>
                <Input type="text" v-model="tempatLahir" />
            </div>
            <div>
                <label>Tanggal Lahir</label>
                <Input type="datetime-local" v-model="tanggalLahir" />
            </div>
            <div>
                <label>Jenis Kelamin</label>
                <Input type="text" v-model="jenisKelamin" />
            </div>
            <div>
                <label>Alamat</label>
                <Input type="text" v-model="alamat" />
            </div>
            <div>
                <label>No Telepon</label>
                <Input type="text" v-model="noTelepon" />
            </div>
            <div>
                <label> Asal Sekolah </label>
                <Input type="text" v-model="asalSekolah" />
            </div>
            <div class="mt-3">
               <Button type="submit">Simpan</Button>
            </div>
        </form>
    </div>
</template>