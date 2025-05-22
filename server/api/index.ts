import { Hono } from 'hono';

type Bindings = {
    DB: D1Database;
    ASSETS: Fetcher;
};

const app = new Hono<{ Bindings: Bindings}>()

app.get('/api/students', async (c) => {
    let { results } = await c.env.DB.prepare('SELECT * FROM students').all();
    return c.json(results); 
})

app.post('/api/students', async (c) => {
    const newId = crypto.randomUUID()
    const input = await c.req.json<any>()
    const query = `INSERT INTO students (namaLengkap,tempatLahir,tanggalLahir,jenisKelamin,alamat,noTelepon,asalSekolah) values ("${input.namaLengkap}","${input.tempatLahir}","${input.tanggalLahir}","${input.jenisKelamin}","${input.alamat}","${input.noTelepon}","${input.asalSekolah}")`;
    const newStudent= await c.env.DB.exec(query);
    return c.json(newStudent);
})

export default app;