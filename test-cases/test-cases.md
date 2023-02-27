Team 404:

Ahsan Hasnath, Cristofer Carcamo, Joshua Steinerman, Zal Patel, Akshay Patel

CS-684: Quality Assurance

Sign in in Test Cases

| Test Case #: 1 |
| --- |
| System: 404 App |
| Test Case Name: Sign in - Positive |
| Subsystem: Sign-in Page |
| Sprint number: |
| Execution Date: |
| Executed By: |

Short Description:

Precondition:

- The system displays the sign-in page.
- The user has an existing account with the app.
- The user remembers their username and password for their account.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | 1 Type a username into the first text box. | The system displays a message underneath the first text box telling the user that they have entered a legitimate email address. |
 |
 |
| 2 | Enter the appropriate password. | As the user types in their password, the system will mask the password as it is being written. |
 |
 |
| 3 | Click the login/submit button. | The system then brings the user to the landing page |
 |
 |

Sign in in Test Cases

| Test Case #: 2 |
| --- |
| System: 404 App |
| Test Case Name: Sign in - Negative |
| Subsystem: Sign-in Page |
| Sprint number: |
| Execution Date: |
| Executed By: |

Short Description:

Precondition:

- The system displays the sign-in page.
- The user has an existing account with the app.
- The user remembers their username and password for their account.

| Step | Action | Expected Result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | 1 Type a username into the first text box. | The system displays a message underneath the first text box telling the user that they have entered a legitimate email address. |
 |
 |
| 2 | Enter the wrong password. | As the user types in their password, the system will mask the password as it is being written. |
 |
 |
| 3 | Click the login/submit button. | The system displays an error message saying the username or password was incorrect. |
 |
 |