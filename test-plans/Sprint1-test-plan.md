

# Test Plan
<h2> Introduction </h2>
<p> 
 Introduction:
The test plan for Project 404 has been designed to ensure that the personal news feed application is fully functional, meets user requirements, and operates as expected. The application gathers and displays news catered towards the user's interest from various sources such as "https://newsapi.org/." The sign-up and login page have been created, along with the home page, and users can search for certain subjects using a search engine. This test plan will cover the testing of sign-up and login functionality, database functionality, API development, and the manual testing of test cases.

Scope:
The scope of this test plan is to verify the functionality of Project 404's sign-up and login pages, home page, database, and API development. The testing will ensure that the application meets the user's requirements and operates as expected. This test plan covers the manual testing of test cases and API testing using postman for sprint 1. The test cases will be designed to verify the functional and non-functional requirements of the application. The manual testing of test cases will be conducted to ensure the application's quality and reliability. The API testing will ensure that the application's APIs work as expected and fulfill their intended purpose.

Overall, this test plan aims to ensure that Project 404 is a reliable and efficient personal news feed application that provides users with up-to-date news catered towards their interests. The testing will cover all aspects of the application to ensure its quality and functionality.
</p>
<details><summary>Sprint 1</summary>
 <p>
   
| Test Items | Feature to be tested | Approach | Testing task  | Responsbility | Schedule |  Pass/Fail Criteria |
| --- | --- | ---  | --- | --- | --- | --- |
| Login page | Functionality for the login email and password. | Manual testing | Email and password must be entered in the login form. | Zal, Akshay, Ahsan | 26-27 feb'23 | Pass - if user already have an existing account, username/email and password for their account details should be matched with existing user account <br> Fail - if the credentials don't match with the database. </br> |
| Registration Page | Functionality of the registration page and the specifications for the various fields. | Manual testing | Click on 'Register for our site!' button and try signing up with username, email and password  | Zal, Akshay, Ahsan | 26-27 feb'23 | Pass - if username atleast have 8 characters, valid email, password and confirmed password should be matched, which should include 1 uppercase, 1 lowercase and atleast non-alphabetical character and also password should not contain any space <br> Fail - if the above conditions are voilated </br>|
| Link between signup page and login page | Link between sign up page and login page after filling out the sign up details | Manual testing | After registering, it should go to the sign-in page and allow users to log in using their new login information. | Zal, Akshay, Ahsan | 26-27 feb'23 | Pass - if user is navigated to the login page after successfully signing in <br>Fail - if the user is not navigated to the login page after successfully signing in </br> |
| API response | API response | Manual testing using the Postman application. | Validating the response received using postman | Akshay | 27-28 feb'23 | Pass - if the API response returns with status code "200 OK" <br> Fail - if the API response returns with any other status code </br>|
| Database | Database | Check by examining | Putting in a user name and password, then searching the database for that entry  | Cristofer, Joshua | 27-28 feb'23  | Pass - if after successfully registering a user, if database has an entry for the same user with its details <br> Fail - if the entry for the user doesn't exist in the database </br> |
</p>
</details>

