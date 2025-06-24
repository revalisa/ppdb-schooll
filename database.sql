-- Hapus tabel events jika ada
DROP TABLE IF EXISTS events;

-- -- -- Buat ulang tabel events
CREATE TABLE events (
  id INTEGER PRIMARY KEY,
  judul TEXT NOT NULL,
  isi TEXT NOT NULL,
  tanggal DATE
);

INSERT INTO events (judul,isi,tanggal) 
VALUES
  ( 'Pembukaan PPDB Online 2025', 'Pendaftaran dibuka mulai 1 Juni hingga 15 Juni 2025 secara online.', '2025-06-01'),
  ('Pengumuman Hasil Seleksi Tahap 1', 'Hasil seleksi tahap pertama akan diumumkan pada 18 Juni 2025.', '2025-06-18');

-- -- -- Hapus tabel students jika ada
-- Drop tabel jika sudah ada
-- DROP TABLE IF EXISTS students;

-- -- Buat ulang tabel students
-- CREATE TABLE students (
--   id INTEGER PRIMARY KEY,
--   namaLengkap TEXT NOT NULL,
--   tempatLahir TEXT,
--   tanggalLahir DATE,
--   jenisKelamin TEXT,
--   alamat TEXT,
--   noTelepon TEXT,
--   asalSekolah TEXT
-- );

-- -- Menyisipkan data ke dalam tabel students
-- INSERT INTO students (id, namaLengkap, tempatLahir, tanggalLahir, jenisKelamin, alamat, noTelepon, asalSekolah) 
-- VALUES 
--   (1, 'Randi Satya', 'Malang', '2004-05-10', 'L', 'Malang', '081334138379', 'SMK 1 Malang');
