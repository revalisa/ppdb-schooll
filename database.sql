-- -- Hapus tabel events jika ada
DROP TABLE IF EXISTS events;

-- -- -- Buat ulang tabel events
CREATE TABLE events (
  id TEXT PRIMARY KEY,
  judul TEXT,
  isi TEXT,
  tanggal INTEGER
);

-- INSERT INTO events (
--   id,
--   judul,
--   isi,
--   tanggal
-- ) VALUES (
--   "1",
--   "Pengumuman Seleksi PPDB",
--   "Hasil seleksi diumumkan hari ini.",
--   1750830600
-- );

-- -- -- Hapus tabel students jika ada
-- DROP TABLE IF EXISTS students;

-- -- Buat ulang tabel students
-- CREATE TABLE students (
--   id TEXT PRIMARY KEY,
--   namaLengkap TEXT NOT NULL,
--   tempatLahir TEXT,
--   tanggalLahir INTEGER,
--   jenisKelamin TEXT,
--   alamat TEXT,
--   noTelepon TEXT,
--   asalSekolah TEXT
-- );

-- INSERT INTO students (
--   id,
--   namaLengkap,
--   tempatLahir,
--   tanggalLahir,
--   jenisKelamin,
--   alamat,
--   noTelepon,
--   asalSekolah
-- ) VALUES (
--   "1",
--   "Siti Revalisa",
--   "Bandung",
--   1749831960,
--   "P",
--   "Jl. Kenanga No.5",
--   "081234567890",
--   "SMPN 3 Bandung"
-- );


-- -- -- Menyisipkan data ke dalam tabel students
-- -- INSERT INTO students (id, namaLengkap, tempatLahir, tanggalLahir, jenisKelamin, alamat, noTelepon, asalSekolah) 
-- -- VALUES 
-- --   (1, 'Randi Satya', 'Malang', '2004-05-10', 'L', 'Malang', '081334138379', 'SMK 1 Malang');
