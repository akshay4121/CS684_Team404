# Team 404: Sprint 1 Test Cases

## Ahsan Hasnath, Cristofer Carcamo, Joshua Steinerman, Zal Patel, Akshay Patel

## CS-684: Quality Assurance

| Test Case #: 1 |
| --- |
| System: 404 App |
| Test Case Name: Landing Page - Not signed in |
| Subsystem: Landing page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description:

Verification of the Sign-in option within the landing page when the user is not logged in.

Precondition:

- The system is running.
- Landing page is available.
- User has not previously signed in with an account.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | Open a new browser and access the application. | The landing page is displayed. |
 |
 |
| 2 | Verify the user is not already signed in. | The user should not be signed in from previous sessions. |
 |
 |
| 3 | Verify the landing page displays a "Sign-In" Button. | The landing page displays a sign-in button within the landing page when a user is not logged in. |
 |
 |

| Test Case #: 2 |
| --- |
| System: 404 App |
| Test Case Name: Landing Page - signed in |
| Subsystem: Landing page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description

Verification of the displaying username within the landing page when the user is already logged in.

Precondition:

- The system is running.
- Landing page is available.
- User has previously signed in with an account.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | As a signed-in user navigates to the landing page. | The landing page is displayed. |
 |
 |
| 2 | Verify the user is already signed in. | The landing page should not display a sign-in option. |
 |
 |
| 3 | View and verify that the landing page displays the name of the user. | The landing page displays the username if the user is already signed in. |
 |
 |

| Test Case #: 3 |
| --- |
| System: 404 App |
| Test Case Name: Landing Page - sign out |
| Subsystem: Landing page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description

Verification of the displaying sign-out option within the landing page when the user is already logged in.

Precondition:

- The system is running.
- Landing page is available.
- User has previously signed in with an account.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | As a signed-in user navigates to the landing page. | The landing page is displayed. |
 |
 |
| 2 | Verify the user is already signed in. | The landing page should not display a sign-in option. |
 |
 |
| 3 | View and verify that the landing page displays a sign-out button. | The landing page displays the Sign-out button if the user is already signed in. |
 |
 |
| 4 | Click the sign-out button. | User should not be signed out and view a sign-in option within the landing page. |
 |
 |

| Test Case #: 4 |
| --- |
| System: 404 App |
| Test Case Name: Registration page - Page |
| Subsystem: Registration page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description:

The following steps will cover the Registration page and its available features.

Precondition:

- The system is running, and the landing and sign-in pages are available.
- User is logged out.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | As a signed-out user navigate to the landing page. | The landing page is displayed with a sign-in option. |
 |
 |
| 2 | View and verify there is a "Create an Account" option within the login menu. | "Create an Account" is an option below the Log in button. |
 |
 |
| 3 | Click the Create an Account" option. | Sign up page should now display the following Text boxes and a submit button: Username, Email, Password, and Confirm Password. |
 |
 |

| Test Case #: 5 |
| --- |
| System: 404 App |
| Test Case Name: Registration page - Negative |
| Subsystem: Registration page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description:

The following steps will cover Registration requirements through negative tests.

Precondition:

- The system is running, and the landing and sign-in pages are available.
- User is logged out.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | As a signed-out user navigate to the Registration page by clicking the "Create an Account" within the sign-in menu. | The Registration page displays the following Text boxes and a submit button: Username, Email, Password, and Confirm Password. |
 |
 |
| 2 | Within the Registration, page enter an email within the Email: textbox and click Register. | A message should appear indicating Registration is unsuccessful, and that Username, Password, and Confirm Password are required. |
 |
 |
| 3 | Within the Registration page enter a valid username and Email within their respective textboxes and click Register. | A message should appear indicating Registration is unsuccessful, and that Password and Confirm Password is required. |
 |
 |
| 4 | Within the Registration page enter a valid username, Email, and password within their respective textboxes and click Register. | A message should appear indicating Registration is unsuccessful, and a Confirm Password is required. |
 |
 |
| 5 | Within the Registration page enter an existing username within the username textbox and a valid Email, password, and confirm password within their respective textboxes and click Register. | A message should appear indicating Registration is unsuccessful, and the User already exists. |
 |
 |
| 6 | Within the Registration page enter a valid Username, Email, password, and a DIFFERENT confirm password within their respective textboxes and click Register. | A message should appear indicating Registration is unsuccessful, and that the Passwords do not match. |
 |
 |

| Test Case #: 6 |
| --- |
| System: 404 App |
| Test Case Name: Registration page - Username 8 - character requirement. |
| Subsystem: Registration page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description:

The following steps will cover Registration pages' username requirements of a minimum of 8 characters.

Precondition:

- The system is running, and the landing and sign-in pages are available.
- User is logged out.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | As a signed-out user navigate to the Registration page by clicking the "Create an Account" within the sign-in menu. | The Registration page displays the following Text boxes and a submit button: Username, Email, Password, and Confirm Password. |
 |
 |
| 2 | Within the Registration page enter a username with less than 8 characters, a valid Email, password, and confirm password within their respective textboxes and then click Register. | A message should appear indicating Registration is unsuccessful, and the Username must be at least 8 characters. |
 |
 |

| Test Case #: 7 |
| --- |
| System: 404 App |
| Test Case Name: Registration page - Username Spacing requirement |
| Subsystem: Registration page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description:

The following steps will cover the Registration pages' spacing requirements, where username cannot include any spaces, and leading and trailing spaces will be trimmed.

Precondition:

- The system is running, and the landing and sign-in pages are available.
- User is logged out.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | As a signed-out user navigate to the Registration page by clicking the "Create an Account" within the sign-in menu. | The Registration page displays the following Text boxes and a submit button: Username, Email, Password, and Confirm Password. |
 |
 |
| 2 | Within the registration page enter a valid Email, password, and confirm password within their respective textboxes. | Valid Email, password, and confirm password should display within their respective textboxes. |
 |
 |
| 3 | Within the username field, enter a username that includes spacing between characters. | A message should appear indicating Registration is unsuccessful, and that the Username cannot include spaces. |
 |
 |
| 4 | Within the username field, enter a username that includes spacing before and after. | A message should appear indicating Registration is successful, and the system should now be on the landing page as logged in and displaying username trimmed of any spacing. |
 |
 |

| Test Case #: 8 |
| --- |
| System: 404 App |
| Test Case Name: Registration page - Password Character Requirements |
| Subsystem: Registration page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description:

The following steps will cover Registration pages' password requirements of a minimum of 8 characters, which must include 1 uppercase, one lowercase, and at least one nonalphabetical character.

Precondition:

- The system is running, and the landing and sign-in pages are available.
- User is logged out.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | As a signed-out user navigate to the Registration page by clicking the "Create an Account" within the sign-in menu. | The Registration page displays the following Text boxes and a submit button: Username, Email, Password, and Confirm Password. |
 |
 |
| 2 | Within the Registration page enter a password and Confirm Password with less than 8 characters, a valid Username, Email, within their respective textboxes and then click Register. | A message should appear indicating Registration is unsuccessful, and the password must be at least 8 characters. |
 |
 |
| 3 | Repeat the previous step, but this time enter a password and confirmation password that is 8 characters with no upper-case letters. | A message should appear indicating Registration is unsuccessful, and the password does not meet requirements. |
 |
 |
| 4 | Repeat the previous step, but this time enter a password and confirmation password that is 8 characters with no lowercase letters. | A message should appear indicating Registration is unsuccessful, and the password does not meet requirements. |
 |
 |
| 5 | Repeat the previous step, but this time enter a password and confirmation password that is 8 characters with no lowercase letters. | A message should appear indicating Registration is unsuccessful, and the password does not meet requirements. |
 |
 |
| 6 | Repeat the previous step, but this time enter a password and confirmation password that is 8 characters that only includes letters. | A message should appear indicating Registration is unsuccessful, and the password does not meet requirements. |
 |
 |

| Test Case #: 9 |
| --- |
| System: 404 App |
| Test Case Name: Registration page - Password Spacing requirement |
| Subsystem: Registration page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description:

The following steps will cover the Registration pages' spacing requirements, where the password cannot include any spaces, and leading and trailing spaces should be trimmed.

Precondition:

- The system is running, and the landing and sign-in pages are available.
- User is logged out.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | As a signed-out user navigate to the Registration page by clicking the "Create an Account" within the sign-in menu. | The Registration page displays the following Text boxes and a submit button: Username, Email, Password, and Confirm Password. |
 |
 |
| 2 | Within the registration page enter a valid Username and Email, within their respective textboxes. | Valid Username and Email should display within their respective textboxes. |
 |
 |
| 3 | Within the Password and Confirm password field, enter a valid password that includes spacing between characters. | A message should appear indicating Registration is unsuccessful, and that the Password cannot include spaces. |
 |
 |
| 4 | Within the Password and Confirm password field, enter a valid password that includes spacing before and after. | A message should appear indicating Registration is successful, and the system should now be in the landing page as logged in and displaying username trimmed of any spacing. |
 |
 |

| Test Case #: 10 |
| --- |
| System: 404 App |
| Test Case Name: Registration page - Positive |
| Subsystem: Registration page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description:

The following steps will cover Registration requirements through positive tests.

Precondition:

- The system is running, and the landing and sign-in pages are available.
- User is logged out.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | As a signed-out user navigate to the Registration page by clicking the "Create an Account" within the sign-in menu. | The Registration page displays the following Text boxes and a submit button: Username, Email, Password, and Confirm Password. |
 |
 |
| 2 | Within the Registration page enter a valid Username, Email, password, and confirm password within their respective textboxes and click Register. | The user should now have successfully registered and the system navigates to the landing page which displays the username. |
 |
 |

| Test Case #: 11 |
| --- |
| System: 404 App |
| Test Case Name: Sign in - Negative |
| Subsystem: Sign-in Page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description:

The following steps cover negative scenarios within sign-in attempts through the sign-in page.

Precondition:

- The system displays the sign-in page.
- The user has an existing account with the app.
- The user remembers their username and password for their account.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | Access the login page as a signed-out user. | User is now viewing the sign in page. |
 |
 |
| 2 | Type a username into the first text box. | The system displays a message underneath the first text box telling the user that they have entered a legitimate email address. |
 |
 |
| 3 | Enter the wrong password. | As the user types in their password, the system will mask the password as it is being written. |
 |
 |
| 4 | Click the login/submit button. | The system displays an error message saying the username or password was incorrect. |
 |
 |

| Test Case #: 12 |
| --- |
| System: 404 App |
| Test Case Name: Sign in - Positive |
| Subsystem: Sign-in Page |
| Sprint number: |
| Execution Date: |
| Executed By: |

Description:

The following steps covers positive scenarios within sign-in attempts through the sign-in page.

Precondition:

- The system displays the sign-in page.
- The user has an existing account with the app.
- The user remembers their username and password for their account.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | Access the login page as a signed-out user. | User is now viewing the sign in page. |
 |
 |
| 2 | Type a username into the username or email textbox. | The system displays a message underneath the first text box telling the user that they have entered a legitimate email address. |
 |
 |
| 3 | Enter the appropriate password. | As the user types in their password, the system will mask the password as it is being written. |
 |
 |
| 4 | Click the login/submit button. | The system then brings the user to the landing page |
 |
 |

| Test Case #: 13 |
| --- |
| System: 404 App |
| Test Case Name: Data landing check |
| Subsystem: Registration page |
| Sprint number: |
| Execution Date: |
| Test Method: |
| Executed By: |

Description:

This test is intended to verify data landing within the database when it is created through the user interface.

Precondition:

- The system is running, and the landing and the signup page are available.
- User is not logged in.
- Database tables are configured appropriately for the application.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | As a signed-out user navigate to the Registration page by clicking the "Create an Account" within the sign-in menu. | The Registration page displays the following Text boxes and a submit button: Username, Email, Password, and Confirm Password. |
 |
 |
| 2 | Within the Registration page enter a valid Username, Email, password, and confirm password within their respective textboxes and click Register. | The user should now have successfully registered and the system navigates to the landing page which displays the username. |
 |
 |
| 3 | Navigate to the database tables and run the appropriate query to retrieve the entered username. | Query should return a result for the newly created username. |
 |
 |