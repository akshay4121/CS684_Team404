const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');
const { JSDOM } = require('jsdom');


afterAll(async () => {
  await pool.end();
  await new Promise(resolve => server.close(resolve));
});

//for this test we are testing Category: Technology
describe('Category Test', () => {
        test('should display Technology as enabled on dashboard page for user with "Technology" enabled', async () => {
        // Sign in as a user with Technology enabled
        const signInResponse = await request(app)
          .post('/signin')
          .send({ emailOrUsername: 'user', password: '123' });
      
        // Make a GET request to the dashboard page
        const dashboardResponse = await request(app)
          .get('/dashboard?loginSuccess=true')
          .set('Cookie', signInResponse.headers['set-cookie']);
      
        // Check that the response contains the expected HTML content
        expect(dashboardResponse.status).toEqual(200);
        const dom = new JSDOM(dashboardResponse.text);
        const technologyCheckbox = dom.window.document.querySelector('input#category-technology[name="Technology"]');
        expect(technologyCheckbox).toBeTruthy();
        expect(technologyCheckbox.checked).toBe(true);
      });
    

});


afterAll(done => {
    server.close(() => {
      console.log('app stopped');
      done();
    });
  });