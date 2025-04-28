--tabel unutu data siswa
CREATE TABLE Students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    namaLengkap VARCHAR(100) NOT NULL,
    tempatLahir VARCHAR(100) NOT NULL,
    tanggalLahir DATE NOT NULL,
    jenisKelamin ENUM('L', 'P') NOT NULL,
    alamat VARCHAR(255) NOT NULL,
    noTelepon VARCHAR(15) NOT NULL,
    asalSekolah VARCHAR(100) NOT NULL
)