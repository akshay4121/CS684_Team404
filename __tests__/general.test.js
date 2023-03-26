const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');

afterAll(async () => {
  await pool.end();
});

describe('Dashboard Check', () => {
  test('Checks if plain dashboard has general in it.', async () => {
    
    const response = await request(app)
      .get('/')
    
    expect(response.text).toContain('general');
  });
 
});