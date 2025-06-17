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
      <h1 class="text-4xl font-bold text-center text-gray-800 my-8">Tentang Aplikasi PPDB</h1>
      
      <section class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-800">Deskripsi Aplikasi</h2>
        <p class="text-lg text-gray-700 mt-2">
          Aplikasi ini digunakan untuk mengelola proses Penerimaan Peserta Didik Baru (PPDB) secara online.
          Pengguna dapat mendaftar, melihat pengumuman terbaru, dan mengikuti informasi lebih lanjut mengenai
          penerimaan siswa baru di sekolah kami.
        </p>
      </section>
    
      <section class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-700">Fitur Utama</h2>
        <ul class="list-disc pl-6 mt-2 text-gray-700">
          <li>Pendaftaran Siswa Baru</li>
          <li>Pengumuman Penerimaan Siswa Baru</li>
          <li>Informasi Detail Penerimaan</li>
          <li>Pengelolaan Data Pendaftar</li>
        </ul>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-700">Tim Pengembang</h2>
        <p class="text-lg text-gray-700 mt-2">Pengembang: <strong class="font-bold">Siti Revalisa</strong></p>
        <p class="text-lg text-gray-700 mt-2">
          Contact: <a href="mailto:sitirevalisa14@gmail.com" class="text-blue-500">sitirevalisa14@gmail.com</a>
        </p>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-700">Hubungi Kami</h2>
        <p class="text-lg text-gray-700 mt-2">
          Jika Anda memiliki pertanyaan atau kesulitan dalam menggunakan aplikasi ini, jangan ragu untuk menghubungi kami melalui email atau media sosial yang tersedia.
        </p>
      </section>
  </div>
</div>  
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
/* Style ini opsional, karena kita menggunakan Tailwind CSS untuk styling */
</style>
