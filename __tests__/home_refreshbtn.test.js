const request = require('supertest');
const { app, server } = require('../app');

afterAll(async () => {
  await new Promise(resolve => server.close(resolve));
});

describe('Refresh button', () => {
  test('clicking on the refresh button should reload the page on home page, user does not need to be logged in', async () => {
    const homeResponse = await request(app)
      .get('/')
    
    // Extract the csrfToken from the response body
    const csrfTokenMatch = homeResponse.text.match(/<input type="hidden" name="_csrf" value="([^"]+)">/);
    const csrfToken = csrfTokenMatch ? csrfTokenMatch[1] : null;
  
    // Make a POST request to the /homerefresh endpoint with the csrfToken
    const refreshResponse = await request(app)
      .post('/homerefresh')
      .send({ _csrf: csrfToken });
  
    // Assert that the response is a redirect to the home page
    expect(refreshResponse.status).toEqual(302);
    expect(refreshResponse.header.location).toEqual('/');
  });
});
