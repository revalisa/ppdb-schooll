<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

interface Student {
  id          : string
  namaLengkap : string
  tempatLahir : string
  tanggalLahir: string
  jenisKelamin: string
  alamat      : string
  noTelepon   : string
  asalSekolah : string
}

const students = ref<Student[]>([])

const fetchStudents = async () => {
  const response = await fetch('/api/students')
  const data = await response.json()
  students.value = data
}

onMounted(() => {
  fetchStudents()
})

const removeStudent = async (id: string) => {
  const response = await fetch(`/api/students/${id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    fetchStudents()
  }
}

</script>
<template>
  <main>
    <div>Data Murid</div>
    <div>
      <RouterLink to="/student">Daftar</RouterLink>
    </div>
    <div>
      <ul>
        <li v-for="student in students" :key="student.id">
          <div>{{ student.namaLengkap }}</div>
          <div>{{ student.tempatLahir }}</div>
          <div>{{ new Date(Number(student.tanggalLahir) * 1000).toLocaleString() }}</div>
          <div>{{ student.jenisKelamin }}</div>
          <div>{{ student.alamat }}</div>
          <div>{{ student.noTelepon }}</div>
          <div>{{ student.asalSekolah }}</div>
          <div>
            <RouterLink :to="`/student/${student.id}`">Edit</RouterLink>
          </div>
          <div>
            <button @click="removeStudent(student.id)">Hapus</button>
          </div>
          </li>
      </ul>
    </div>
  </main>
</template>