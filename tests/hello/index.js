const request = require('supertest');

it('should return 200 statuscode', async () => {
  await request(strapi.server.httpServer)
    .get('/api/hello')
    .expect(200) // Expect response http code 200
});


it('should return hello world', async () => {
  const res = await request(strapi.server.httpServer)
    .get('/api/hello');

    expect(res.text).toEqual("Hello World! With added content so we can test the whole GitHub workflow!");
});
