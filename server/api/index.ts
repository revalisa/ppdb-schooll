interface Env {
    ASSETS: Fetcher;
    DB: D1Database;
}
export default {
    async fetch(request, env) {
        const url = new URL(request.url);

     if (url.pathname.startsWith("/api/students")) {
        if (request.method == 'GET'){
            let { results } = await env.DB.prepare('SELECT * FROM students').all();
            return Response.json(results);
        } else if (request.method == 'POST') {
            const newId = crypto.randomUUID()
            const input = await request.json<any>()
            const query = `INSERT INTO students (id,namaLengkap,tempatLahir,tanggalLahir,jenisKelamin,alamat,noTelpon,asalSekolah) 
            values ("${newId}","${input.namaLengkap}","${input.tempatLahir}",${input.tanggalLahir},"${input.jenisKelamin}","${input.alamat}","${input.noTelpon}","${input.asalSekolah}")`;
            const newStudent= await env.DB.exec(query);
            return Response.json(newStudent); 
        }
     } 

     return env.ASSETS.fetch(request);
    },
} satisfies ExportedHandler<Env>;
