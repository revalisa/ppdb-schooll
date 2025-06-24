<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

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
    });

    const response = await fetch('/api/students', {
        method:'POST',
        body: newStudent,
    })

    const data = await response.json()
    router.push('/pendaftar')
}

</script>

<template>
 <div class="min-h-screen bg-gray-50">
    <nav class="bg-slate-800 text-white px-8 py-4 shadow-md border-b border-slate-300">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <ul class="flex gap-8 text-base">
          <li>
            <RouterLink to="/" class="hover:text-slate-300">Beranda</RouterLink>
          </li>
          <li>
            <RouterLink to="/pendaftar" class="hover:text-slate-300">Data Pendaftar</RouterLink>
          </li>
          <li>
            <RouterLink to="/student" class="hover:text-slate-300">Tambah Siswa</RouterLink>
          </li>
           <li>
            <RouterLink to="/about" class="hover:text-slate-300">Pengumuman</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Main Content Area -->
    <main class="max-w-4xl mx-auto px-8 py-10 bg-white mt-6 shadow rounded">
      <h1 class="text-2xl font-semibold text-center mb-6">Biodata Siswa Baru</h1>

      <form @submit.prevent="saveData" class="space-y-5">
        <div>
          <label class="block mb-1 font-medium">Nama Lengkap</label>
          <Input type="text" v-model="namaLengkap" class="w-full" />
        </div>
        <div>
           <label class="block mb-1 font-medium">Tempat Lahir</label>
          <Input type="text" v-model="tempatLahir" class="w-full" />
       </div>
        <div>
         <label class="block mb-1 font-medium">Tanggal Lahir</label>
          <Input type="datetime-local" v-model="tanggalLahir" class="w-full" />
        </div>  
        <div>
         <label class="block mb-1 font-medium">Jenis Kelamin</label>
          <Input type="text" v-model="jenisKelamin" class="w-full" />
        </div>
        <div>
              <label class="block mb-1 font-medium">Alamat</label>
          <Input type="text" v-model="alamat" class="w-full" />
       
        </div>
         <div>
          <label class="block mb-1 font-medium">No. Telepon</label>
          <Input type="text" v-model="noTelepon" class="w-full" />
        </div>
        <div>
          <label class="block mb-1 font-medium">Asal Sekolah</label>
          <Input type="text" v-model="asalSekolah" class="w-full" />
        </div>
        <div class="text-center">
          <Button type="submit" class="mt-4">Kirim</Button>
        </div>
      </form>
    </main>
  </div>
</template>