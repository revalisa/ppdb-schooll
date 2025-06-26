<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const router = useRouter();

const route = useRoute()
const id = route.params.id

const judul    = ref ('')
const isi      = ref ('')
const tanggal  = ref ('')

const saveData = async () => {
    const event = JSON.stringify({
        judul: judul.value,
        isi: isi.value,
        tanggal: Date.parse(tanggal.value)/1000,
    })

    const response = await fetch(`/api/events/${id}`, {
        method:'PUT',
        body: event,
    })
    const data = await response.json()

    router.push('/')
}

//ambil data dari server saat komponen muncul.
onMounted(() => {
    fetch(`/api/events/${id}`)
        .then(response => response.json())
        .then(data => {
            judul.value = data.judul
            isi.value = data.isi,
            tanggal.value = new Date(data.tanggal * 1000).toISOString().slice(0, 10)//date
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
      <h1 class="text-2xl font-semibold text-center mb-6">Pengumuman Kegiatan</h1>

      <form @submit.prevent="saveData" class="space-y-5">
        <div>
          <label class="block mb-1 font-medium">Judul</label>
          <Input type="text" v-model="judul" class="w-full" />
        </div>
        <div>
           <label class="block mb-1 font-medium">Isi</label>
          <Input type="text" v-model="isi" class="w-full" />
       </div>
        <div>
         <label class="block mb-1 font-medium">Tanggal</label>
          <Input type="date" v-model="tanggal" class="w-full" />
        </div>
        <div class="text-center">
          <Button type="submit" class="mt-4">Kirim</Button>
        </div>
      </form>
    </main>
  </div>
</template>