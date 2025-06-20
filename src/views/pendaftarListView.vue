<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'

interface Student {
  id: string
  namaLengkap: string
  tempatLahir: string
  tanggalLahir: string
  jenisKelamin: string
  alamat: string
  noTelepon: string
  asalSekolah: string
}

const students = ref<Student[]>([])
const searchQuery = ref('')
const genderFilter = ref('')

const fetchStudents = async () => {
  const response = await fetch('/api/students')
  const data = await response.json()
  students.value = data
}

onMounted(() => {
  fetchStudents()
})

const removeStudent = async (id: string) => {
  if (!confirm('Yakin ingin menghapus siswa ini?')) return
  const response = await fetch(`/api/students/${id}`, { method: 'DELETE' })
  if (response.ok) fetchStudents()
}

// Filtered and searched list
const filteredStudents = computed(() => {
  return students.value.filter((student) => {
    const matchesSearch = student.namaLengkap
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
    const matchesGender =
      !genderFilter.value || student.jenisKelamin === genderFilter.value
    return matchesSearch && matchesGender
  })
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-slate-800 text-white px-8 py-4 shadow-md">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <ul class="flex gap-6 text-sm sm:text-base font-medium">
          <li><RouterLink to="/" class="hover:text-slate-300">Beranda</RouterLink></li>
          <li><RouterLink to="/pendaftar" class="hover:text-slate-300">Data Pendaftar</RouterLink></li>
          <li><RouterLink to="/student" class="hover:text-slate-300">Tambah Siswa</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-slate-300">Pengumuman</RouterLink></li>
        </ul>
      </div>
    </nav>
    <div  class="bg-white rounded shadow p-8 gap-10 items-center">
    <!-- Title -->
    <h1 class="text-4xl font-bold text-center text-gray-800 my-8">Data Siswa</h1>

    <!-- Search & Filter -->
    <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-4 mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Cari berdasarkan nama..."
        class="w-full sm:w-1/2 px-4 py-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        v-model="genderFilter"
        class="w-full sm:w-1/4 px-4 py-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Semua Jenis Kelamin</option>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
    </div>

    <!-- Student Cards -->
    <div class="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="student in filteredStudents"
        :key="student.id"
        class="bg-white rounded-lg shadow-md p-6 space-y-2 hover:shadow-lg transition"
      >
        <h2 class="text-lg font-semibold text-slate-800">{{ student.namaLengkap }}</h2>
        <p><span class="font-medium">Tempat Lahir:</span> {{ student.tempatLahir }}</p>
        <p><span class="font-medium">Tanggal Lahir:</span> {{ new Date(Number(student.tanggalLahir) * 1000).toLocaleDateString() }}</p>
        <p><span class="font-medium">Jenis Kelamin:</span> {{ student.jenisKelamin }}</p>
        <p><span class="font-medium">Alamat:</span> {{ student.alamat }}</p>
        <p><span class="font-medium">No Telepon:</span> {{ student.noTelepon }}</p>
        <p><span class="font-medium">Asal Sekolah:</span> {{ student.asalSekolah }}</p>

        <!-- Action Buttons -->
        <div class="flex justify-between items-center mt-4">
          <RouterLink
            :to="`/student/${student.id}`"
            class="text-blue-600 hover:underline font-medium"
          >
            Edit
          </RouterLink>
          <Button
            class="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded"
            @click="removeStudent(student.id)"
          >
            Hapus
          </Button>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredStudents.length === 0" class="text-center text-gray-500 mt-12 text-lg">
      Tidak ada data yang cocok.
    </div>
  </div>
  </div>
</template>