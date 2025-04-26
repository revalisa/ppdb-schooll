interface Env {
    ASSETS: Fetcher;
    DB: D1Database;
}
export default {
    async fetch(request, env) {
        // Handle the request and return a response
     const url = new URL(request.url);

     if (url.pathname === '/api/addstudents') {

        let { results } = await env.DB.prepare('SELECT * FROM students').all();
        return Response.json(results);
     } 
     
     return env.ASSETS.fetch(request);
    },
}
