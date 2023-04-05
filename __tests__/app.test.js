const request = require('supertest');
const { app, server } = require('../app');

describe('GET /', () => {
  test('should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

afterAll(done => {
  server.close(() => {
    console.log('app stopped');
    done();
  });
});
