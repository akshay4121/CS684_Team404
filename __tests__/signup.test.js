
const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');

afterAll(async () => {
  await pool.end();
});

describe('Signup API', () => {
  test('POST /signup with valid user data should create a new user', async () => {
    const userData = {
      username: 'JestUser4',//change for new user 
      password: 'Testpass123',
      confirmPassword: 'Testpass123',
      email: 'JestUser4@example.com'// change for new user
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(200)  // expect redirection
      .redirects(1);  // follow redirection
    expect(response.text).toContain('Registration successful. Please log in.');
  });

  //password does not match
  test('POST /signup with invalid user data should return an error message: password does not match', async () => {
    const userData = {
      username: 'useruser1',
      password: 'Testpass1234', //pass mistmatch
      confirmPassword: 'Testpass123',
      email: 'jestjest@jest.com'
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(400);
    expect(response.text).toContain('Passwords do not match');
  });
  
  //Username cannot contain spaces
  test('POST /signup with invalid user data should return an error message: Username cannot contain spaces', async () => {
    const userData = {
      username: 'user user1',//username has spaces
      password: 'Testpass123', 
      confirmPassword: 'Testpass123',
      email: 'jestjest@jest.com'
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(400);
    expect(response.text).toContain('Username cannot contain spaces');
  });
  //username must be 8 char long
  test('POST /signup with invalid user data should return an error message: username must be 8 char long', async () => {
    const userData = {
      username: 'usern',//invalid username
      password: 'Testpass123',
      confirmPassword: 'Testpass123',
      email: 'jestjest@jest.com'
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(400);
    expect(response.text).toContain('Username must be at least 8 characters long');
  });

  //password must be 8 char long
  test('POST /signup with invalid user data should return an error message: password must be 8 char long', async () => {
    const userData = {
      username: 'useruser1',
      password: 'Tpass1',//6 char
      confirmPassword: 'Tpass1',//6 char
      email: 'jestjest@jest.com'
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(400);
    expect(response.text).toContain('Password must be at least 8 characters long');
  });

  //Password must contain at least one lowercase letter
  test('POST /signup with invalid user data should return an error message: Password must contain at least one lowercase letter', async () => {
    const userData = {
      username: 'useruser1',
      password: 'TESTPASS123',//no lowercase
      confirmPassword: 'TESTPASS123',//no lowercase
      email: 'jestjest@jest.com'
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(400);
    expect(response.text).toContain('Password must contain at least one lowercase letter');
  });

   //Password must contain at least one uppercase letter
   test('POST /signup with invalid user data should return an error message: Password must contain at least one uppercase letter', async () => {
    const userData = {
      username: 'useruser1',
      password: 'testpass123',//no UPPERCASE
      confirmPassword: 'testpass123',//no UPPERCASE
      email: 'jestjest@jest.com'
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(400);
    expect(response.text).toContain('Password must contain at least one uppercase letter');
  });

  //Password must contain at least one non-alphabetical character
  test('POST /signup with invalid user data should return an error message: Password must contain at least one non-alphabetical character', async () => {
    const userData = {
      username: 'useruser1',
      password: 'Testpass',//no non-alphabetical char
      confirmPassword: 'Testpass',//no non-alphabetical char
      email: 'jestjest@jest.com'
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(400);
    expect(response.text).toContain('Password must contain at least one non-alphabetical character');
  });

  //Password cannot contain spaces
  test('POST /signup with invalid user data should return an error message: Password cannot contain spaces', async () => {
    const userData = {
      username: 'useruser1',
      password: 'Test pass123', //spaces
      confirmPassword: 'Test pass123',//spaces
      email: 'jestjest@jest.com'
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(400);
    expect(response.text).toContain('Password cannot contain spaces');
  });

  //Invalid email format
  test('POST /signup with invalid user data should return an error message: Invalid email format', async () => {
    const userData = {
      username: 'useruser1',
      password: 'Testpass123', 
      confirmPassword: 'Testpass123',
      email: 'jestjest'//invalid email
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(400);
    expect(response.text).toContain('Invalid email format');
  });

  //username exits in DB
  test('POST /signup with existing username should return an error message', async () => {
    const userData = {
      username: 'DemoUser1',//username exits in DB
      password: 'Aa1Bb2Cc3Dd4',
      confirmPassword: 'Aa1Bb2Cc3Dd4',
      email: 'Demo3@Demo.com'
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(400);
    expect(response.text).toContain('User already exists');
  });

  //Email already exists
  test('POST /signup with existing email should return an error message', async () => {
    const userData = {
      username: 'DemoUser2',
      password: 'Aa1Bb2Cc3Dd4',
      confirmPassword: 'Aa1Bb2Cc3Dd4',
      email: 'Demo1@Demo.com' //email exist in DB
    };
    const response = await request(app)
      .post('/signup')
      .send(userData)
      .expect(400);
    expect(response.text).toContain('Email already exists');
  });
});

afterAll(done => {
  server.close(() => {
    console.log('app stopped');
    done();
  });
});