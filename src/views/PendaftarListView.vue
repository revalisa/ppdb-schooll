<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Student {
  id: string
  namaLengkap: string
  tempatLahir: string
  tanggalLahir: string
  jenisKelamin: string
  alamat: string
  noTelepon: string
  asalSekolah: string
  status: 'diterima' | 'menunggu' | 'ditolak'
}

const students = ref<Student[]>([])
const search = ref('')
const filterStatus = ref<'all' | 'diterima' | 'menunggu' | 'ditolak'>('all')

// Pagination
const currentPage = ref(1)
const itemsPerPage = 10

const fetchStudents = async () => {
  const response = await fetch('/api/students')
  const data = await response.json()
  students.value = data
}

onMounted(fetchStudents)

const filteredStudents = computed(() => {
  return students.value.filter((student) => {
    const matchesSearch = student.namaLengkap.toLowerCase().includes(search.value.toLowerCase())
    const matchesStatus = filterStatus.value === 'all' || student.status === filterStatus.value
    return matchesSearch && matchesStatus
  })
})

const paginatedStudents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredStudents.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(filteredStudents.value.length / itemsPerPage))

const removeStudent = async (id: string) => {
  const confirmed = confirm('Yakin ingin menghapus data ini?')
  if (!confirmed) return

  const response = await fetch(`/api/students/${id}`, { method: 'DELETE' })
  if (response.ok) fetchStudents()
}
</script>

<template>
  <main class="p-6">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">📋 Data Pendaftar</h1>

    <!-- Filter & Search -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
      <input
        v-model="search"
        type="text"
        placeholder="Cari berdasarkan nama..."
        class="border border-gray-300 rounded px-3 py-2 w-full md:w-1/3 text-sm"
      />

      <select
        v-model="filterStatus"
        class="border border-gray-300 rounded px-3 py-2 text-sm"
      >
        <option value="all">Semua Status</option>
        <option value="diterima">Diterima</option>
        <option value="menunggu">Menunggu</option>
        <option value="ditolak">Ditolak</option>
      </select>
    </div>

    <!-- Table -->
    <div class="overflow-auto bg-white rounded shadow">
      <table class="min-w-full text-sm text-left border">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="px-4 py-2 border">Nama Lengkap</th>
            <th class="px-4 py-2 border">TTL</th>
            <th class="px-4 py-2 border">JK</th>
            <th class="px-4 py-2 border">Asal Sekolah</th>
            <th class="px-4 py-2 border">Status</th>
            <th class="px-4 py-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in paginatedStudents" :key="student.id" class="hover:bg-gray-50">
            <td class="px-4 py-2 border">{{ student.namaLengkap }}</td>
            <td class="px-4 py-2 border">{{ student.tempatLahir }}, {{ new Date(Number(student.tanggalLahir) * 1000).toLocaleDateString('id-ID') }}</td>
            <td class="px-4 py-2 border">{{ student.jenisKelamin }}</td>
            <td class="px-4 py-2 border">{{ student.asalSekolah }}</td>
            <td class="px-4 py-2 border">
              <span
                class="px-2 py-1 rounded-full text-xs font-semibold"
                :class="{
                  'bg-green-100 text-green-800': student.status === 'diterima',
                  'bg-yellow-100 text-yellow-800': student.status === 'menunggu',
                  'bg-red-100 text-red-800': student.status === 'ditolak',
                }"
              >
                {{ student.status }}
              </span>
            </td>
            <td class="px-4 py-2 border space-x-2">
              <RouterLink
                :to="`/student/${student.id}`"
                class="text-blue-600 hover:underline"
              >
                Edit
              </RouterLink>
              <button
                @click="removeStudent(student.id)"
                class="text-red-600 hover:underline"
              >
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Empty state -->
      <div v-if="paginatedStudents.length === 0" class="p-4 text-center text-gray-500">
        Tidak ada data pendaftar.
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center items-center mt-6 space-x-2">
      <button
        @click="currentPage--"
        :disabled="currentPage === 1"
        class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        &laquo;
      </button>
      <span class="text-sm font-medium">Halaman {{ currentPage }} dari {{ totalPages }}</span>
      <button
        @click="currentPage++"
        :disabled="currentPage === totalPages"
        class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        &raquo;
      </button>
    </div>
  </main>
</template>