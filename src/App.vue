<script setup lang="ts">

</script>

<template>
  <form>
    <div>
      <label>Id</label>
      <input type="number" placeholder="Id">
    </div>
    <div>
      <label>Nama Lengkap</label>
      <input type="text" placeholder="Nama Lengkap">
    </div>
    <div>
      <label> Tempat Lahir</label>
      <input type="text" placeholder="Tempat Lahir">
    </div>
    <div>
      <label>Tanggal Lahir</label>
      <input type="date" placeholder="Tanggal Lahir">
    </div>
    <div>
      <label>Jenis Kelamin</label>
      <select>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
    </div>
    <div>
      <label>Alamat</label>
      <input type="text" placeholder="Alamat">
    </div>
    <div>
      <label>No. Telepon</label>
      <input type="text" placeholder="No. Telepon">
    </div>  
    <div>
      <label>Asal Sekolah</label>
      <input type="text" placeholder="Asal Sekolah">
    </div>
  <button>Submit</button>
  <button type="reset">Reset</button>
  </form>

</template>