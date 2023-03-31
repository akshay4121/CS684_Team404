# Test Plan for Team 404 Personal News Feed Application

## Team Members: Ahsan Hasnath, Cristofer Carcamo, Joshua Steinerman, Zal Patel, Akshay Patel*
## Class: CS-684: Quality Assurance*

### Introduction
The purpose of this test plan for Project 404 has been designed to ensure that the personal news feed application is fully functional, meets user requirements, and operates as expected. The project involves retrieving the most recent and fresh headlines from "https://newsapi.org/," allowing users to sign up and log in to their accounts, select categories of interest, and search for specific subjects.

### Scope:
This test plan covers the testing of the personal news feed project sprint by sprint. Sprint 1 included creating sign-up and sign-in pages with a generic home page, developing the API, and manual testing. Sprint 2 includes adding a home page with general headlines and a settings page, along with unit testing. Sprint 3 involves developing a custom home page, implementing pagination, and integrating testing. Sprint 4 includes the implementation of the searching feature and system testing.

Throughout the sprints team, 404 will cover Manual, functional, API, Unit, integration, and system testing The goal is to identify any defects, issues, or inconsistencies in the project and ensure that it meets the requirements and expectations of the stakeholders.
The testing will be conducted in a test environment that closely mimics the production environment to ensure accurate results. The testing team will consist of qualified testers with relevant expertise and experience. The test plan will be reviewed and updated regularly to ensure that it is aligned with the project's progress and objectives.
This test plan covers four sprints:
Sprint 1 (Feb 20 - Mar 6): Sign-up and login pages with a generic home page.
Sprint 2 (Mar 6 - Mar 27): Home page with general headlines and a settings page.
Sprint 3 (Mar 27 - Apr 10): Custom home page and pagination.
Sprint 4 (Apr 10 - Apr 24): Searching.

—----------------------------------------------------------------------------------------------------------------------------
## Sprint 1 (Feb 20 - Mar 06)
### Test Objectives
The objectives of the testing activities for the Team 404 Personal News Feed Application are as follows:

1. To ensure that the application meets the specified requirements.
2. To identify any defects or bugs in the application.
3. To ensure that the application functions as intended.
4. To ensure that the application is user-friendly and easy to navigate.

### Test Approach
The testing approach for the Team 404 Personal News Feed Application will consist of manual, unit, integration, and system tests. Each sprint will have a specific focus and set of testing activities as described below:

#### Sprint 1 (Feb 20 - Mar 6)

## Test Items
### The following items will be tested:
- Users can navigate to the Sign-up page from the Landing page.
- Users can navigate to the Sign-in page from the Landing page.
- Users can sign up with a valid username and password.
- Users cannot sign up with an invalid username or password.
- Users can sign in with a valid username and password.
- Users cannot sign in with an invalid username or password.
- Users can sign out from the Landing page.

## Features to be Tested
### The features to be tested include:
#### Landing Page
- Requirement 1: When not signed in, the landing page shall display a method (button or link) to navigate to a “Sign-in” page.
- Requirement 2: When signed in, the landing page shall display the user’s name.
- Requirement 3: When signed in, the landing page shall display a sign-out method (button or link).
- Sign-up Page
- Requirement 1: Implement a form that will sign up a user.
- Requirement 2: The user name shall be a string at least 8 characters long.
- Requirement 3: The user name shall not include any spaces.
- Requirement 4: The UX shall automatically trim leading and trailing spaces.
- Requirement 5: The password shall not include any spaces.
- Requirement 6: The password shall be at least 8 characters long.
- Requirement 7: The UX shall automatically trim leading and trailing spaces.
- Requirement 8: The password must contain at least one upper case letter.
- Requirement 9: The password must contain at least one lowercase letter.
- Requirement 10: The password must contain at least one character that is not a letter.
- Requirement 11: The confirmation password shall be required.
- Requirement 12: When the form is correctly filled out and submitted, navigate to the Landing Page as signed in.
- Requirement 13: When an incorrect entry is made, display an appropriate message.
#### Sign-in Page
- Requirement 1: Implement a form that will sign in a user.
- Requirement 2: The form shall use a textbox to collect a username.
- Requirement 3: The username shall be required.
- Requirement 4: The form shall use a textbox to collect a password.
- Requirement 5: The password shall be required.
- Requirement 6: The form shall use a button to submit the form.

## Approach
### API Testing
#### For API testing, the following approach will be used:
- Verify that each endpoint is returning the expected status codes.
- Verify that each endpoint is returning the expected response data.
- Verify that each endpoint is handling invalid input appropriately.

### Functional Testing
#### For functional testing, the following approach will be used:
- Verify that the Landing Page displays a "Sign-in" button when not signed in.
- Verify that the Landing Page displays the user's name and a "Sign-out" button when signed in.
- Verify that the Sign-up Page correctly validates the username and password fields.
- Verify that the Sign-up Page displays an appropriate message when an incorrect entry is made.
- Verify that the Sign-up Page navigates to the Landing Page as signed in when the form is correctly filled out and submitted.
- Verify that the Sign-in Page correctly authenticates the user and displays an appropriate message when an incorrect entry is made.

## Pass/Fail Criteria
#### The following pass/fail criteria will be used:
- All API endpoints return the expected status codes and response data.
- All API endpoints handle invalid input appropriately.
- The Landing Page displays a "Sign-in" button when not signed in.
- The Landing Page displays the user's name and a "Sign-out" button when signed in.
- The Sign-up Page correctly validates the username and password fields.
- The Sign-up Page displays an appropriate message when an incorrect entry is made.
- The Sign-up Page navigates to the Landing Page as signed in when the form is correctly filled out and submitted.
- The Sign-in Page correctly authenticates the user and displays an appropriate message when an incorrect entry is made.

## Testing Tasks
#### The following tasks will be performed:
- Identify all API endpoints and their expected input and output.
- Write test cases to verify the expected input and output of each API endpoint.
- Verify that the Landing Page displays a "Sign-in" button when not signed in.
- Verify that the Landing Page displays the user's name and a "Sign-out" button when signed in.
- Verify that the Sign-up Page correctly validates the username and password fields.
- Verify that the Sign-up Page displays an appropriate message when an incorrect entry is made.
- Verify that the Sign-up Page navigates to the Landing Page as signed in when the form is correctly filled out and submitted.
- Verify that the Sign-in Page correctly authenticates the user and displays an appropriate message when an incorrect entry is made.

## Responsibilities

#### The following responsibilities will be assigned:
- Back-end developers are responsible for the development of the database. - Joshua Steinerman
- The development team is responsible for creating the front-end UX - Cristofer Carcamo
- The testing team is responsible for creating and executing the API test suite. - Akshay Patel
- The development team is responsible for fixing defects found during testing - Cristofer Carcamo
- The testing team is responsible for creating test artifacts such as: 
	- Test Plan - Zal Patel
	- Test Cases - Ahsan Hasnath
	- Test Reports - Ahsan Hasnath
- The test team is responsible for executing the test cases and running ad-hoc test activities. - Ahsan Hasnath, Zal Patel, Akshay Patel.
- The testing team is responsible for identifying defects and verifying that they are fixed. - Ahsan Hasnath

## Schedule
#### The following schedule will be used:
- Database development will begin on [2/20/2023] and end on [2/23/2023].
- Development will begin on [2/23/2023] and end on [2/27/2023].
- API Suite development begins on [2/27/2023] and execution will begin on [2/30/2023].
- Test Artifacts development will begin on [2/20/2023] and end on [2/30/2023].
- Testing will begin on [2/27/2023] and end on [3/5/2023].
- The testing team will provide the final test report to the stakeholders by  [3/5/2023].

—----------------------------------------------------------------------------------------------------------------------------
## Sprint 2 (Mar 6 - Mar 27)
## Test Items
#### The following items will be tested:
#### Landing page
    - Displaying articles from the NewsAPI "General" category.
    - Refreshing the list of articles.
    - Displaying a link (or button) to open a Settings page.
#### Settings page
    - Saving users' preferences.
    - Verifying at least one category is selected.
    - Cancelling the changes and navigating back to the landing page.
#### Database
    - User table schema
    
## Features to be Tested
#### The following features will be tested:
#### Landing Page
- Verify that the landing page displays a list of articles from the NewsAPI "General" category when the user is not signed in.
- Verify that the number of articles displayed can be adjusted (may be configured by the developer).
- Verify that there is a link or button to refresh the list of articles.
- Verify that when the user is signed in, a link or button is displayed to open the Settings page (may be displayed in a modal dialog).

#### Settings Page/Modal Dialog
- Verify that the user can select one or more categories from the list (General, Business, Entertainment, Health, Science, Sports, Technology).
- Verify that the form uses a button, link, or image to submit the user's preferences.
- Verify that there is a button, link, or image to cancel the changes.
- Verify that when the user clicks Ok or Cancel, the app displays the landing page.

#### Database Schema
- Verify that the user table exists in the RDBMS and has the following columns:
  - userid (integer) - primary key unique sequence number.
  - username (string) - user name from sign up.
  - password (string) - password from sign up.
  - general (boolean) - true if the user has chosen General.
  - business (boolean) - true if the user has chosen Business.
  - entertainment (boolean) - true if the user has chosen Entertainment.
  - health (boolean) - true if the user has chosen Health.
  - science (boolean) - true if the user has chosen Science.
  - sports (boolean) - true if the user has chosen Sports.
  - technology (boolean) - true if the user has chosen Technology.

## Approach
#### Functional Testing Approach
- Identify the user workflows on the landing and settings pages.
- Determine the expected behavior for each workflow.
- Create test cases to cover each workflow and expected behavior.
- Execute the test cases and compare actual results with expected results.
- Report any discrepancies as bugs and retest after fixes are made.

#### API Testing Approach
- Identify the API endpoints used by the landing and settings pages.
- Determine the expected response format and data for each endpoint.
- Create test cases to cover each endpoint and expected response.
-  Execute the test cases and compare actual responses with expected responses.
-  Report any discrepancies as bugs and retest after fixes are made.

#### Unit Testing Approach (using Jest)
-  Write test cases for each function in the landing and settings pages and any API interaction functions.
-  Mock any external dependencies (e.g. NewsAPI) and input/output data as necessary.
- Run the tests using Jest and compare actual results with expected results.
- Refactor code as needed to improve testability and maintainability.   
   
## Pass/Fail Criteria
#### Landing Page
- Pass: The landing page displays a list of articles from the NewsAPI "General" category when the user is not signed in, and the number of articles can be adjusted.
- Pass: There is a link or button to refresh the list of articles.
- Pass: When the user is signed in, a link or button is displayed to open the Settings page (may be displayed in a modal dialog).
- Fail: The landing page does not display the list of articles from the NewsAPI "General" category when the user is not signed in.

#### Settings Page/Modal Dialog
- Pass: The user can select one or more categories from the list.
- Pass: The form uses a button, link, or image to submit.

## Testing Tasks
### The following testing tasks will be conducted:
- Update and execute the API suite to accommodate new features.
- Create Unit test cases and suites prior to development completion. 
- Execute Unit test suite throughout code development and changes. 
- Create robust test cases to cover sprint 2 functionalities and requirements.
- Create and update test deliverables such as Test plans, test case suites, and test reports. 
- Conduct functional and API testing and report bugs as needed, 
- Manage bugs until resolved. 
#### Landing page
    - Functional tests for displaying articles from the NewsAPI "General" category.
    - Functional tests for refreshing the list of articles.
    - Functional tests for displaying a link (or button) to open a Settings page.
#### Settings page
    - Functional tests for saving user preferences.
    - Functional tests for verifying at least one category is selected.
    - Functional tests for canceling the changes and navigating back to the landing page.
#### Database
 - Unit tests for the user table schema.
- API testing: This will involve testing the integration of the NewsAPI with the application.
- Unit testing: This will involve testing the individual units of code using Jest.

## Responsibilities
#### The following responsibilities will be assigned:
- Back-end developers are responsible for developing the database and updating the schema. - Joshua Steinerman
- The development team is responsible for creating the front-end UX - Cristofer Carcamo
- The development team is responsible for attaining New API key and configurations. - Akshay Patel and Cristofer Carcamo
- The Development team is responsible for creating Unit test cases - Zal Patel
- The Development team is responsible for creating Unit Test scripts in Jest. - Akshay Patel, Joshua Steinerman,  Cristofer Carcamo
- The testing team is responsible for Updating and executing API test suite. - Akshay Patel
- The development team is responsible for fixing defects found during testing - Cristofer Carcamo
- The testing team is responsible for creating test artifacts such as: 
	- Test Plan - Ahsan Hasnath
	- Test Cases - Ahsan Hasnath
	- Test Reports - Ahsan Hasnath, Zal Patel, Akshay patel, Joshua Steinerman
- The test team executes the test cases and runs ad-hoc test activities. - Ahsan Hasnath, Zal Patel, Akshay Patel.
- The testing team is responsible for identifying defects and verifying they are fixed. - Ahsan Hasnath

## Schedule
#### The following schedule will be used:
- Database Schema updates will begin on [3/06/2023] and end on [3/20/2023].
- Development will begin on [3/06/2023] and end on [3/23/2023].
- Unit testing suite is to be developed beginning [3/08/2023] and ending on [3/16/2023].
- API Suite updates/development begins on [3/06/2023] and ends on [3/20/2023].
- Test Artifacts development will begin on [3/06/2023] and end on [3/27/2023].
- Testing will begin on [2/22/2023] and end on [3/27/2023].
- The testing team will provide the final test report to the stakeholders by  [3/26/2023].

—----------------------------------------------------------------------------------------------------------------------------
## Sprint 3 (Mar 27 - Apr 10)

## Test Items
#### The following items will be tested:
#### Landing page
- Landing page links or tabs to select articles
- Home link functionality to display articles from chosen categories
- Landing page display of articles upon signing in
- Highlighting of currently selected link or tab
- Pagination functionality for the list of articles

## Features to be Tested
#### The following features will be tested:
#### Landing Page
### Functional Testing:
- Functionality and accuracy of links or tabs to select articles
- Home link functionality to display articles from chosen categories in descending order with the most recent first
- Landing page display of articles upon signing in for the "Home" link
- Highlighting of currently selected link or tab
- Pagination functionality for the list of articles

### Integration Testing:
- Integration between the landing page and settings page to ensure that the "Home" link displays articles from chosen categories on the settings page.

## Approach
#### Functional Testing Approach:
- Manual testing will be performed to verify the functionality and accuracy of the links or tabs to select articles.
- Manual testing will be performed to verify the home link functionality to display articles from chosen categories in descending order with the most recent first.
- Manual testing will be performed to verify that articles are displayed upon signing in for the "Home" link.
- Manual testing will be performed to verify the highlighting of the currently selected link or tab.
- Manual testing will be performed to verify the pagination functionality for the list of articles.

### Integration Testing Approach:
- Integration testing will be performed to ensure that the landing page and settings page are communicating correctly and that the "Home" link displays articles from chosen categories on the settings page.

## Pass/Fail Criteria
- All links or tabs to select articles should be functional and accurate. Otherwise, the test will be considered a failure.
- The home link should display articles from chosen categories in descending order with the most recent first. Otherwise, the test will be considered a failure.
- Articles should be displayed upon signing in for the "Home" link. Otherwise, the test will be considered a failure.
- The currently selected link or tab should be highlighted. Otherwise, the test will be considered a failure.
- The pagination functionality for the list of articles should work smoothly. Otherwise, the test will be considered a failure.
- The integration between the landing page and settings page should be functional and accurate. Otherwise, the test will be considered a failure.

## Testing Tasks:
### Functional Testing:
- Verify links or tabs to select articles.
- Verify home link functionality to display articles from chosen categories in descending order with the most recent first.
- Verify articles display upon signing in for the "Home" link.
- Verify highlighting of currently selected link or tab.
- Verify pagination functionality for the list of articles.

### Integration Testing:
- Verify integration between the landing page and settings page.

## Responsibilities:
- Back-end developers are responsible for developing/updating the database. - Joshua Steinerman
- The development team is responsible for creating the front-end UX. - Cristofer Carcamo 
- The development team will resolve any bugs or issues identified by the QA team. - Ahsan Hasnath
- The Development team is responsible for running Jest for unit testing to test code changes. - Akshay Patel, Joshua Steinerman
- The develoment team is responsible for creating integration tests in API test suite. - Akshay Patel
- The testing team is responsible for Updating and executing Integration and API test suite. - Akshay Patel
- The testing team is responsible for creating test artifacts such as: 
	- Test Plan - Ahsan Hasnath
	- Test Cases - Ahsan Hasnath
        - Manual Integration Test cases - Ahsan Hasnath
	- Test Reports - Ahsan Hasnath
- The test team is responsible for executing the test cases and running ad-hoc test activities. - Zal Patel
- The testing team is responsible for identifying defects and verifying they are fixed. - Zal Patel

## Schedule:
- Development will begin on [3/28/2023] and end on [4/10/2023].
- Integration testing suite is to be developed beginning [3/27/2023] and ending on [4/10/2023].
- API Suite updates/development begins on [3/27/2023] and ends on [4/10/2023].
- Test Artifacts development will begin on [3/27/2023] and end on [4/10/2023].
- Testing will begin on [4/03/2023] and end on [4/10/2023].
- Bug fixes and retesting efforts will begin on [4/03/2023] and end on [4/09/2023].
- The testing team will provide the final test report to the stakeholders by [4/09/2023].

