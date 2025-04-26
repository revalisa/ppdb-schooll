interface Env {
    ASSETS: Fetcher;
}
export default {
    async fetch(request, env) {
        // Handle the request and return a response
     const url = new URL(request.url);

     if (url.pathname === '/api/addstudent') {
        return Response.json([
            {
                id:'1',
                nama_lengkap: 'John Doe',
                tempat_lahir: 'Jakarta',
                tanggal_lahir: '2000-01-01',
                jenis_kelamin: 'Laki-laki',
                alamat: 'Jl. Merdeka No. 1',
                no_telepon: '08123456789',
                asal_sekolah: 'SMA 1 Jakarta',
            },
            {
                id:'2',
                nama_lengkap: 'Jane Smith',
                tempat_lahir: 'Bandung',
                tanggal_lahir: '2001-02-02',
                jenis_kelamin: 'Perempuan',
                alamat: 'Jl. Kebangsaan No. 2',
                no_telepon: '08234567890',
                asal_sekolah: 'SMA 2 Bandung',
            },
            {
                id:'3',
                nama_lengkap: 'Alice Johnson',
                tempat_lahir: 'Surabaya',
                tanggal_lahir: '2002-03-03',
                jenis_kelamin: 'Perempuan',
                alamat: 'Jl. Pahlawan No. 3',
                no_telepon: '08345678901',
                asal_sekolah: 'SMA 3 Surabaya',
            },
        ]);
     } 
     return env.ASSETS.fetch(request);
    },
} satisfies ExportedHandler<Env>;
