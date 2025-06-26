<script setup lang="ts">
// //ref digunakan untuk membuat variabel reaktif.
// onMounted menjalankan fungsi saat komponen selesai dimuat.
// useRoute untuk mengambil parameter route (dalam hal ini id).
// useRouter untuk navigasi halaman.
// Komponen Button dan Input diimpor untuk digunakan dalam tampilan UI (tidak ditampilkan di skrip ini, hanya bagian logika).

import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

//Digunakan untuk melakukan navigasi antar halaman
const router = useRouter();
// Mengakses informasi rute saat ini, termasuk:
const route = useRoute()
// Ini mengambil nilai id dari URL yang sudah ditentukan di rute.
const id = route.params.id

// membuat variabel untuk menyimpan data
const namaLengkap = ref('')
const tempatLahir = ref('')
const tanggalLahir = ref('')
const jenisKelamin = ref('')
const alamat = ref('')
const noTelepon = ref('')
const asalSekolah = ref('')

const saveData = async () => { //untuk menyimpan datasiswa
  const student = JSON.stringify({ //mengubah objek menjadi string json
    namaLengkap: namaLengkap.value,
    tempatLahir: tempatLahir.value,
    tanggalLahir: Date.parse(tanggalLahir.value) / 1000,  // Mengonversi ke UNIX timestamp
    jenisKelamin: jenisKelamin.value,
    alamat: alamat.value,
    noTelepon: noTelepon.value,
    asalSekolah: asalSekolah.value
  })

  //Mengirim data ke endpoint API sesuai id.
    const response = await fetch(`/api/students/${id}`, {
      method: 'PUT',
      body: student,
    })

    //digunakan kalau kamu ingin tahu apakah berhasil atau gagal, atau menampilkan notifikasi.
    const data = await response.json();
    router.push('/pendaftar'); //
}

//mengambil data siswa dari server berdasarkan id, 
// lalu mengisi form edit siswa.
onMounted(() => {
  //Mengambil data dari server melalui endpoint API.
  fetch(`/api/students/${id}`)
  //Mengubah response HTTP menjadi objek JSON agar bisa digunakan.
    .then(response => response.json())
    .then(data => {
      namaLengkap.value = data.namaLengkap;
      tempatLahir.value = data.tempatLahir;
      tanggalLahir.value = new Date(data.tanggalLahir * 1000).toISOString().slice(0, 10); // Format date
      jenisKelamin.value = data.jenisKelamin;
      alamat.value = data.alamat;
      noTelepon.value = data.noTelepon;
      asalSekolah.value = data.asalSekolah;
    })
})
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
          <Input type="date" v-model="tanggalLahir" class="w-full" />
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