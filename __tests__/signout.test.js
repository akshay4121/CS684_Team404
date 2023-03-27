const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');
const { JSDOM } = require('jsdom');


afterAll(async () => {
  await pool.end();
  await new Promise(resolve => server.close(resolve));
});


describe('Reload button', () => {
  test('clicking on the refresh button should reload the page', async () => {
    // Sign with a user with Technology enabled
    const signInResponse = await request(app)
      .post('/signin')
      .send({ emailOrUsername: 'user', password: '123' });
  
    // Make a GET request to the dashboard page
    const dashboardResponse = await request(app)
      .get('/dashboard?loginSuccess=true')
      .set('Cookie', signInResponse.headers['set-cookie']);
    
    // Mock the XMLHttpRequest object and its methods
    const xhrMockObj = {
      open: jest.fn(),
      send: jest.fn(),
      addEventListener: jest.fn()
    };
    window.XMLHttpRequest = jest.fn(() => xhrMockObj);

    // Create a spy on the location object's reload method
    const reloadSpy = jest.spyOn(window.location, 'reload');

    // Find the refresh button element and simulate a click event
    const refreshButton = document.getElementById('refresh-button');
    refreshButton.dispatchEvent(new MouseEvent('click'));

    // Assert that the XMLHttpRequest object was created with the correct arguments
    expect(xhrMockObj.open).toHaveBeenCalledWith('POST', '/dashboard/dashrefresh');
    expect(xhrMockObj.send).toHaveBeenCalled();

    // Call the event listener for the load event and assert that the page was reloaded
    const loadEvent = new Event('load');
    xhrMockObj.addEventListener.mock.calls[0][1](loadEvent);
    expect(reloadSpy).toHaveBeenCalled();

  });

});


afterAll(done => {
  server.close(() => {
    console.log('app stopped');
    done();
  });
});
