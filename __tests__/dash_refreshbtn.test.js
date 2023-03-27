const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');

afterAll(async () => {
  await pool.end();
  await new Promise(resolve => server.close(resolve));
});

describe('Refresh button on dashboard', () => {
  let cookies;

  beforeAll(async () => {
    // Log in with a user from the database and store the session cookie
    const res = await request(app)
      .post('/signin')
      .send({ emailOrUsername: 'user', password: '123' });
    cookies = res.headers['set-cookie'];
  });

  test('refresh button test:  only accessed AFTER a successful login from a valid user', async () => {
    // Make a GET request to the dashboard page with the session cookie
    const dashboardResponse = await request(app)
      .get('/dashboard?loginSuccess=true')
      .set('Cookie', cookies);
  
    // Extract the csrfToken from the response body
    const csrfTokenMatch = dashboardResponse.text.match(/<input type="hidden" name="_csrf" value="([^"]+)">/);
    const csrfToken = csrfTokenMatch ? csrfTokenMatch[1] : null;
  
    // Make a POST request to the /dashboard/dashrefresh endpoint with the session cookie and csrfToken
    const refreshResponse = await request(app)
      .post('/dashboard/dashrefresh')
      .set('Cookie', cookies)
      .send({ _csrf: csrfToken });
  
    // Assert that the response is a redirect to the dashboard page
    expect(refreshResponse.status).toEqual(302);
    expect(refreshResponse.header.location).toEqual('/dashboard?loginSuccess=true');
  });
  
});
