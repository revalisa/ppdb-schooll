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
    <form @submit.prevent="saveData">
        <div>
        <label>Nama Lengkap</label>
        <input type="text" v-model="namaLengkap" placeholder="Nama Lengkap">
        </div>
        <div>
        <label> Tempat Lahir</label>
        <input type="text" v-model="tempatLahir" placeholder="Tempat Lahir">
        </div>
        <div>
        <label>Tanggal Lahir</label>
        <input type="datetime-local" v-model="tanggalLahir" placeholder="Tanggal Lahir">
        </div>
        <div>
        <label>Jenis Kelamin</label>
        <input type="text" v-model="jenisKelamin" placeholder="Jenis Kelamin">
        </div>
        <div>
        <label>Alamat</label>
        <input type="text" v-model="alamat" placeholder="Alamat">
        </div>
        <div>
        <label>No. Telepon</label>
        <input type="text" v-model="noTelepon" placeholder="No. Telepon">
        </div>  
        <div>
        <label>Asal Sekolah</label>
        <input type="text" v-model="asalSekolah" placeholder="Asal Sekolah">
        </div>
        <div class="mt-3">
                <Button type="submit">Update</Button>
        </div>
    </form>

</template>