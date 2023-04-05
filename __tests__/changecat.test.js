const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');
const { JSDOM } = require('jsdom');

afterAll(async () => {
  await pool.end();
  await new Promise(resolve => server.close(resolve));
});

describe('Category Test', () => {
  test('should display Sports as enabled on dashboard page for user with "Sports" enabled', async () => {
    // Sign in as a user with Technology enabled
    const signInResponse = await request(app)
      .post('/signin')
      .send({ emailOrUsername: 'user', password: '123' });

    // Change the category to "Sports"
    const updateResponse = await request(app)
      .post('/dashboard/update')
      .set('Cookie', signInResponse.headers['set-cookie'])
      .send({
        general: 0,
        business: 0,
        entertainment: 0,
        health: 0,
        science: 0,
        sports: 1,
        technology: 0
      });
    expect(updateResponse.status).toEqual(302);

    // Make a GET request to the dashboard page
    const dashboardResponse = await request(app)
      .get('/dashboard?loginSuccess=true')
      .set('Cookie', signInResponse.headers['set-cookie']);

    // Check that the response contains the expected HTML content
    expect(dashboardResponse.status).toEqual(200);
    const dom = new JSDOM(dashboardResponse.text);
    const sportsCheckbox = dom.window.document.querySelector(
      'input#category-sports[name="Sports"]'
    );
    expect(sportsCheckbox).toBeTruthy();
    expect(sportsCheckbox.checked).toBe(true);
  });
});

afterAll(done => {
  server.close(() => {
    console.log('app stopped');
    done();
  });
});
