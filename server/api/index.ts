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
    const query = `INSERT INTO students (namaLengkap,tempatLahir,tanggalLahir,jenisKelamin,alamat,noTelepon,asalSekolah) values ("${input.namaLengkap}","${input.tempatLahir}","${input.tanggalLahir}","${input.jenisKelamin}","${input.alamat}","${input.noTelepon}","${input.asalSekolah}")`
    const newStudent= await c.env.DB.exec(query)
    return c.json(newStudent)
})

app.get('/api/students/:id', async (c) => {
    const studentId = c.req.param('id')
    let { results } = await c.env.DB.prepare('SELECT * FROM students WHERE id = ?').bind(studentId).all()
    return c.json(results[0])
})

app.put('api/students/:id', async (c) => {
    const studentId = c.req.param('id')

    const input = await c.req.json<any>()
    const query = 'UPDATE students SET namaLengkap = "${input.namaLengkap}", tempatLahir = "${input.tempatLahir}", jenisKelamin = "${input.jenisKelamin}", alamat = "${input.alamat}", noTelepon = "${input.noTelepon}", asalSekolah = "${input.asalSekolah}" WHERE id = "${studentId}}"'
    const student = await c.env.DB.exec(query)

    return c.json(student)
})

app.delete('api/students/:id', async (c) => {
    const studentId = c.req.param('id')

    const query = 'DELETE FROM students WHERE id = "${studentId}"'
    const student = await c.env.DB.exec(query)

    return c.json(student)
    })



export default app;