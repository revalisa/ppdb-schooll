<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted, computed } from 'vue'

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

      <!-- Pengumuman Section -->
      <div class="bg-white rounded shadow p-8 mt-10">
        <h1 class="text-4xl font-bold text-center text-gray-800 my-8">📢 Event</h1>

        <!-- Search Box -->
        <div class="max-w-6xl mx-auto px-4 mb-6">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari Pengumuman..."
            class="w-full sm:w-1/2 px-4 py-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Event Cards -->
        <div class="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="event in filteredEvents"
            :key="event.id"
            class="bg-white rounded-lg shadow-md p-6 space-y-2 hover:shadow-lg transition"
          >
            <h2 class="text-lg font-semibold text-slate-800">{{ event.judul }}</h2>
            <p><span class="font-medium">Isi:</span> {{ event.isi }}</p>
            <p>
              <span class="font-medium">Tanggal:</span>
              {{ new Date(event.tanggal).toLocaleDateString('id-ID') }}
            </p>
              <div>
                <RouterLink :to="'/event'" class="text-blue-600 hover:underline font-medium">Tambah Event</RouterLink>
              </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredEvents.length === 0" class="text-center text-gray-500 mt-12 text-lg">
          Tidak ada data yang cocok.
        </div>
      </div>
    </main>
  </div>
</template>