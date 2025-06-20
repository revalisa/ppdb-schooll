-- Buat tabel events
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  judul TEXT NOT NULL,
  isi TEXT NOT NULL,
  tanggal TEXT NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sisipkan data awal dengan menyebutkan kolom yang diisi
INSERT INTO events (judul, isi, tanggal) VALUES
  ('Pembukaan PPDB Online 2025', 'Pendaftaran dibuka mulai 1 Juni hingga 15 Juni 2025 secara online.', '2025-06-01'),
  ('Pengumuman Hasil Seleksi Tahap 1', 'Hasil seleksi tahap pertama akan diumumkan pada 18 Juni 2025.', '2025-06-18'),
  ('Daftar Ulang Tahap 1', 'Peserta yang lolos wajib daftar ulang pada 19-21 Juni 2025.', '2025-06-19');
