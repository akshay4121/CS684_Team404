const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');

afterAll(async () => {
  await pool.end();
});

describe('Home Check', () => {
  test('Checks if plain home page has general in it.', async () => {
    
    const response = await request(app)
      .get('/')
    
    expect(response.text).toContain('general');
  });

  
 
});


afterAll(done => {
  server.close(() => {
    console.log('app stopped');
    done();
  });
});