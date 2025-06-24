<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted} from 'vue'
import { Button } from '@/components/ui/button'


interface Event {
  id: string
  judul: string
  isi: string
  tanggal: string
}

const events = ref<Event[]>([])

const fetchEvents = async () => {
  const response = await fetch('/api/events')
  const data = await response.json()
  events.value = data
}

onMounted(() => {
  fetchEvents()
})

const removeEvent = async (id: string) => {
  const response = await fetch(`/api/events/${id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    fetchEvents()
  }
}
</script>



<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <nav class="bg-slate-800 text-white px-8 py-4 shadow-md border-b border-slate-300">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <ul class="flex gap-8 text-base">
          <li><RouterLink to="/" class="hover:text-slate-300">Beranda</RouterLink></li>
          <li><RouterLink to="/pendaftar" class="hover:text-slate-300">Data Pendaftar</RouterLink></li>
          <li><RouterLink to="/student" class="hover:text-slate-300">Tambah Siswa</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-slate-300">Pengumuman</RouterLink></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <main class="min-h-screen bg-gray-50">
      <div class="bg-white rounded shadow p-8 grid md:grid-cols-2 gap-10 items-center">
        <!-- Left Text -->
        <div>
          <h1 class="text-3xl font-bold text-slate-800 mb-4">
            PENERIMAAN PESERTA DIDIK BARU (PPDB)
          </h1>
          <ul class="list-disc list-inside space-y-2 text-slate-700">
            <li>Selamat datang di halaman admin PPDB.</li>
            <li>Gunakan panel ini untuk mengelola data pendaftar dan siswa baru.</li>
            <li>Verifikasi, edit, dan hapus data calon peserta didik dengan mudah.</li>
            <li>Informasi pendaftar ditampilkan secara real-time dan bisa diperbarui kapan saja.</li>
          </ul>
        </div>
        <!-- Right Image -->
        <div class="flex justify-center">
          <img src="/utama.svg" alt="Gambar PPDB" class="w-80 h-auto" />
        </div>
      </div>

      <!-- //event -->
      <div  class="bg-white rounded shadow p-8 gap-10 items-center mt-6">
        <h1 class="text-3xl font-bold text-slate-800 mb-4">
          Pengumuman Kegiatan
        </h1>
          <div>
            <RouterLink to="/event">Buat Event</RouterLink>
          </div>
            <div>
              <ul>
                <li v-for="event in events" :key="event.id">
                <h2 class="text-lg font-semibold text-slate-800">{{ event.judul }}</h2>
                <p><span class="font-medium">Isi :</span>{{ event.isi }}</p>
                <p><span class="font-medium">Tanggal :</span>{{ event.tanggal}}</p>
              <div>
                <RouterLink :to="`/event/${event.id}`" class="text-blue-600 hover:underline font-medium">
                  Edit
                </RouterLink>
                <Button class="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded"
                @click="removeEvent(event.id)">
                  Hapus
                </Button>
              </div>
            </li>
          </ul>
          </div>
      </div>
    </main>
  </div>
</template>