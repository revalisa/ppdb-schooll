-- Migration number: 0001 	 2025-06-26T08:20:30.768Z
CREATE TABLE students (
  id TEXT PRIMARY KEY,
  namaLengkap TEXT NOT NULL,
  tempatLahir TEXT,
  tanggalLahir INTEGER,
  jenisKelamin TEXT,
  alamat TEXT,
  noTelepon TEXT,
  asalSekolah TEXT
);

INSERT INTO students (
  id,
  namaLengkap,
  tempatLahir,
  tanggalLahir,
  jenisKelamin,
  alamat,
  noTelepon,
  asalSekolah
) VALUES (
  "1",
  "Siti Revalisa",
  "Bandung",
  1749831960,
  "P",
  "Jl. Kenanga No.5",
  "081234567890",
  "SMPN 3 Bandung"
);