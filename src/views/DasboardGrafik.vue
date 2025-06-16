<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface Stats {
  diterima: number
  menunggu: number
  ditolak: number
}

const stats = ref<Stats>({
  diterima: 0,
  menunggu: 0,
  ditolak: 0
})

const fetchStats = async () => {
  try {
    const res = await fetch('/api/students/stats') // Endpoint contoh
    const data = await res.json()
    stats.value = data
  } catch (error) {
    console.error('Gagal mengambil data statistik:', error)
  }
}

onMounted(fetchStats)

// Chart Data dan Options
const chartData = ref({
  labels: ['Diterima', 'Menunggu', 'Ditolak'],
  datasets: [
    {
      label: 'Jumlah Pendaftar',
      backgroundColor: ['#16a34a', '#ca8a04', '#dc2626'], // hijau, kuning, merah
      data: [stats.value.diterima, stats.value.menunggu, stats.value.ditolak]
    }
  ]
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Statistik Status Pendaftar PPDB'
    }
  }
}

// Update chart data saat stats berubah
import { watch } from 'vue'
watch(stats, (newStats) => {
  chartData.value.datasets[0].data = [
    newStats.diterima,
    newStats.menunggu,
    newStats.ditolak
  ]
})
</script>

<template>
  <div class="bg-white p-6 rounded shadow max-w-xl mx-auto">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
