<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const namaLengkap = ref ('')
const tempatLahir = ref ('')
const tanggalLahir = ref ('')
const jenisKelamin = ref ('')
const alamat = ref ('')
const noTelepon = ref ('')
const asalSekolah = ref ('')

const saveData = async () => {
    const newStudent = JSON.stringify({
        namaLengkap: namaLengkap.value,
        tempatLahir: tempatLahir.value,
        tanggalLahir: Date.parse(tanggalLahir.value)/1000,
        jenisKelamin: jenisKelamin.value,
        alamat: alamat.value,
        noTelepon: noTelepon.value,
        asalSekolah: asalSekolah.value
    })
    
    const response = await fetch('/api/addStudent',{
        method: 'POST',
        body: 'newStudent',
    })

    const data = await response.json()

    router.push('/')
}

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
        <input type="date" v-model="tanggalLahir" placeholder="Tanggal Lahir">
        </div>
        <div>
        <label>Jenis Kelamin</label>
        <select v-model="jenisKelamin">
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
        </select>
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
        <div>
            <input type="submit">
        </div>
    </form>

</template>