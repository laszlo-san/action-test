const request = require('supertest');

it('should return hello world', async () => {
  await request(strapi.server.httpServer)
    .get('/api/hello')
    .expect(200) // Expect response http code 200
});
