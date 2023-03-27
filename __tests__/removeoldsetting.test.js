const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');
const { JSDOM } = require('jsdom');

afterAll(async () => {
  await pool.end();
  await new Promise(resolve => server.close(resolve));
});

describe('Update Test', () => {
  test('Should log into a User and switch there catergories to only enable Sports and not show the old catergory', async () => {
    // Sign in as a user with other catergories enabled
    const signInResponse = await request(app)
      .post('/signin')
      .send({ emailOrUsername: 'test12345678a@Gmail.com', password: 'Test12345678' });

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
    const  generalCheckbox = dom.window.document.querySelector(
        'input#category-general[name="General"]'
      );
      const businessCheckbox = dom.window.document.querySelector(
        'input#category-business[name="Business"]'
      );
      const entertainmentCheckbox = dom.window.document.querySelector(
        'input#category-entertainment[name="Entertainment"]'
      );
      const healthCheckbox = dom.window.document.querySelector(
        'input#category-health[name="Health"]'
      );
      const scienceCheckbox = dom.window.document.querySelector(
        'input#category-science[name="Science"]'
      );
      const technologyCheckbox = dom.window.document.querySelector(
        'input#category-technology[name="Technology"]'
      );
    expect(sportsCheckbox).toBeTruthy();
    expect(sportsCheckbox.checked).toBe(true);
    expect(generalCheckbox).toBeTruthy();
    expect(generalCheckbox.checked).toBe(false);
    expect(businessCheckbox).toBeTruthy();
    expect(businessCheckbox.checked).toBe(false);
    expect(entertainmentCheckbox).toBeTruthy();
    expect(entertainmentCheckbox.checked).toBe(false);
    expect(healthCheckbox).toBeTruthy();
    expect(healthCheckbox.checked).toBe(false);
    expect(scienceCheckbox).toBeTruthy();
    expect(scienceCheckbox.checked).toBe(false);
    expect(technologyCheckbox).toBeTruthy();
    expect(technologyCheckbox.checked).toBe(false);
  });
});

afterAll(done => {
  server.close(() => {
    console.log('app stopped');
    done();
  });
});