<template>
   <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <nav class="bg-slate-800 text-white px-8 py-4 shadow-md border-b border-slate-300">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
         <ul class="flex gap-6 text-sm sm:text-base">
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
    <main class="min-h-screen bg-gray-50">
      <div class="max-w-4xl mx-auto px-8 py-10 bg-white mt-6 shadow rounded">
        <h2 class="text-xl font-semibold mb-6 text-slate-800 text-center">Pengumuman</h2>
      </div>
    </main>
  </div>
</template>

<style>

</style>
