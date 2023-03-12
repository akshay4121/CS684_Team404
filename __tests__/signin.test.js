const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');

afterAll(async () => {
  await pool.end();
  await new Promise(resolve => server.close(resolve));
});

describe('signin router', () => {
  test('should respond with signin page on GET /signin', async () => {
    const res = await request(app).get('/signin');
    expect(res.status).toEqual(200);
    expect(res.text).toContain('Log in');
  });

  // sign in with user in database
  test('should redirect to dashboard on successful login', async () => {
    const res = await request(app)
      .post('/signin')
      .send({ emailOrUsername: 'user', password: '123' });
    expect(res.status).toEqual(200);
    expect(res.text).toContain('Welcome to your dashboard');
  });

  // should fail to sign in and throw an error
  test('should render signin page with error message on invalid login', async () => {
    const res = await request(app)
      .post('/signin')
      .send({ emailOrUsername: 'user', password: '1234' }); // invalid user
    expect(res.status).toEqual(401);
    expect(res.text).toContain('Invalid email or password');
  });
});
