const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');
const { JSDOM } = require('jsdom');


afterAll(async () => {
  await pool.end();
  await new Promise(resolve => server.close(resolve));
});


describe('Signout Test', () => {
    test('When a user with a technology setting is signed out the dashboard should have the General setting enabled', async () => {
    // Sign with a user with Technology enabled
    const signInResponse = await request(app)
      .post('/signin')
      .send({ emailOrUsername: 'user', password: '123' });
  
    // Make a GET request to the dashboard page
    const dashboardResponse = await request(app)
      .get('/dashboard?loginSuccess=true')
      .set('Cookie', signInResponse.headers['set-cookie']);
  
  
    const signOut = await request(app)
      .get('/signout?loginSuccess=true')
      .set('Cookie', signInResponse.headers['set-cookie']);

      const response = await request(app)
      .get('/dashboard?loginSuccess=true')
      .set('Cookie', signInResponse.headers['set-cookie']);

    
    expect(response.text).toContain('general');

  });


});


afterAll(done => {
  server.close(() => {
    console.log('app stopped');
    done();
  });
});