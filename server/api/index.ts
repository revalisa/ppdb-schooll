import { Hono } from 'hono'

type Bindings = {
    DB: D1Database
    ASSETS: Fetcher
};

const app = new Hono<{ Bindings: Bindings}>()

app.get('/api/students', async (c) => {
    let { results } = await c.env.DB.prepare('SELECT * FROM students').all();
    return c.json(results); 
})

app.post('/api/students', async (c) => {
    const newId = crypto.randomUUID()
    const input = await c.req.json<any>()
    const query = `INSERT INTO students (id,namaLengkap,tempatLahir,tanggalLahir,jenisKelamin,alamat,noTelepon,asalSekolah) values ("${newId}","${input.namaLengkap}","${input.tempatLahir}","${input.tanggalLahir}","${input.jenisKelamin}","${input.alamat}","${input.noTelepon}","${input.asalSekolah}")`
    const newStudent= await c.env.DB.exec(query)
    return c.json(newStudent)
})

//update dan delete student
app.get('/api/students/:id', async (c) => {
    const studentId = c.req.param('id')
    let { results } = await c.env.DB.prepare('SELECT * FROM students WHERE id = ?').bind(studentId).all()
    return c.json(results[0])
})

app.put('/api/students/:id', async (c) => {
    const studentId = c.req.param('id')

    const input = await c.req.json<any>()
    const query = `UPDATE students SET namaLengkap = "${input.namaLengkap}", tempatLahir = "${input.tempatLahir}", jenisKelamin = "${input.jenisKelamin}", alamat = "${input.alamat}", noTelepon = "${input.noTelepon}", asalSekolah = "${input.asalSekolah}" WHERE id = "${studentId}"`
    const student = await c.env.DB.exec(query)
    return c.json(student)
})

app.delete('/api/students/:id', async (c) => {
  const studentId = c.req.param('id')

    const query = `DELETE FROM students WHERE id = "${studentId}"`
    const student = await c.env.DB.exec(query)

    return c.json(student)
})

//event 
app.get('/api/events', async (c) => {
    let { results} = await c.env.DB.prepare('SELECT * FROM events'). all();
    return c.json(results)
})

app.post('/api/events', async(c) => {
   const newId = crypto.randomUUID()
    const input = await c.req.json<any>()
    const query = `INSERT INTO events (id,judul,isi,tanggal) values ( "${newId}","${input.judul}","${input.isi}","${input.tanggal}")`
    const newEvent = await c.env.DB.exec(query)
    return c.json(newEvent)
})

//update dan delete event
app.get('/api/events/:id', async (c) => {
    const eventId = c.req.param('id')
    let { results } = await c.env.DB.prepare('SELECT * FROM events WHERE id = ?').bind(eventId).all()
    return c.json(results[0])
})

app.put('/api/events/:id', async (c) => {
    const eventId = c.req.param('id')
    const input = await c.req.json<any>()
    const query = `UPDATE events SET judul = "${input.judul}", isi = "${input.isi}", tanggal = "${input.tanggal}" WHERE id = "${eventId}"`
    const event = await c.env.DB.exec(query)
    return c.json(event)
})

app.delete('/api/events/:id', async (c) => {
  const eventId = c.req.param('id')

    const query = `DELETE FROM events WHERE id = "${eventId}"`
    const event = await c.env.DB.exec(query)

    return c.json(event)
})

app.get('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app