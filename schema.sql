-- Buat database (opsional, tergantung sistem yang digunakan)
-- Pada SQLite, tidak perlu perintah CREATE DATABASE
-- Gunakan perintah berikut di SQLite CLI atau dalam aplikasi

-- Hapus tabel jika sudah ada
DROP TABLE IF EXISTS students;

-- Buat tabel dengan skema yang sudah diperbaiki
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    namaLengkap TEXT NOT NULL,
    tempatLahir TEXT NOT NULL,
    tanggalLahir DATE NOT NULL,
    jenisKelamin TEXT NOT NULL,
    alamat TEXT NOT NULL,
    noTelepon TEXT NOT NULL,
    asalSekolah TEXT NOT NULL
);


-- Contoh data untuk dimasukkan
INSERT INTO students (namaLengkap, tempatLahir, tanggalLahir, jenisKelamin, alamat, noTelepon, asalSekolah) 
VALUES 
('Randi Satya', 'Malang', '2004-05-10', 'L', 'Malang', '081334138379', 'SMK 1 Malang'),
('Siti Revalisa', 'Pasuruan', '2003-07-15', 'P', 'Pancur - Lumbang - Pasuruan', '081334138374', 'SMK 1 Pasuruan');

-- Cek apakah data berhasil masuk

SELECT namaLengkap, strftime('%Y', 'now') - strftime('%Y', tanggalLahir) AS umur FROM students;