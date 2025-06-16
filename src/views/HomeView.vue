<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
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

    <!-- Main Content -->
    <main class="min-h-screen bg-gray-50">
      <!-- Header and Illustration -->
      <div class="bg-white rounded shadow p-8 grid md:grid-cols-2 gap-10 items-center">
        <!-- Left Column: Text -->
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

        <!-- Right Column: Image -->
        <div class="flex justify-center">
          <img src="/utama.svg" alt="Gambar PPDB" class="w-80 h-auto" />
        </div>
      </div>

      <!-- Statistik Pendaftaran -->
      <div class="mt-10 bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-6 text-slate-800 text-center">Statistik Pendaftaran</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-slate-200 p-6 rounded-lg text-center shadow">
            <h3 class="text-3xl font-bold text-slate-800">120</h3>
            <p class="mt-2">Total Pendaftar</p>
          </div>
          <div class="bg-green-300 p-6 rounded-lg text-center shadow">
            <h3 class="text-3xl font-bold text-green-900">80</h3>
            <p class="mt-2">Diverifikasi</p>
          </div>
          <div class="bg-red-300 p-6 rounded-lg text-center shadow">
            <h3 class="text-3xl font-bold text-red-900">40</h3>
            <p class="mt-2">Belum Verifikasi</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>