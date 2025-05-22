PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    namaLengkap TEXT NOT NULL,
    tempatLahir TEXT NOT NULL,
    tanggalLahir DATE NOT NULL,
    jenisKelamin TEXT NOT NULL,
    alamat TEXT NOT NULL,
    noTelepon TEXT NOT NULL,
    asalSekolah TEXT NOT NULL
);
INSERT INTO students VALUES(1,'Randi Satya','Malang','2004-05-10','L','Malang','081334138379','SMK 1 Malang');
INSERT INTO students VALUES(2,'Siti Revalisa','Pasuruan','2003-07-15','P','Pancur - Lumbang - Pasuruan','081334138374','SMK 1 Pasuruan');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('students',2);
