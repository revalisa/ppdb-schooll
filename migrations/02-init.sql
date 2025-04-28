--tabel unutu data siswa
CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    namaLengkap VARCHAR(100) NOT NULL,
    tempatLahir VARCHAR(100) NOT NULL,
    tanggalLahir DATE NOT NULL,
    jenisKelamin VARCHAR(1) NOT NULL,
    alamat VARCHAR(255) NOT NULL,
    noTelepon VARCHAR(15) NOT NULL,
    asalSekolah VARCHAR(100) NOT NULL
)

