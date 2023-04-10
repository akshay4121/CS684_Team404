> **Team 404:  Sprint 3 Test Cases**

**Ahsan Hasnath, Cristofer Carcamo, Joshua Steinerman, Zal Patel, Akshay
Patel**

**CS-684: Quality Assurance**

  -----------------------------------------------------------------------
  Test Case ID: 21
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - Category and Home tab.

  Subsystem: Landing page - Tabs

  Sprint number: 3

  Execution Date: 4/08/2023

  Test Method: Manual - Functional Testing

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides functional tabs for each
category along with a Home tab.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account and is able to utilize the account
to log in.

 

+---+---------------------------+----------------------+------+-------+
| S | Action                    | Expected Result      | P    | Co    |
| t |                           |                      | ass/ | mment |
| e |                           |                      | Fail |       |
| p |                           |                      |      |       |
+===+===========================+======================+======+=======+
| 1 | Access the landing page   | The user is now      | Pass |       |
|   | as a signed-in user.      | viewing the landing  |      |       |
|   |                           | page as a signed-in  |      |       |
|   |                           | user.                |      |       |
+---+---------------------------+----------------------+------+-------+
| 2 | Verify the following      | All mentioned        | Pass |       |
|   | tabs/categories are       | tabs/categories are  |      |       |
|   | available for selection   | available for        |      |       |
|   | within the landing page:  | selection.           |      |       |
|   |                           |                      |      |       |
|   | -   Home                  |                      |      |       |
|   |                           |                      |      |       |
|   | -   General               |                      |      |       |
|   |                           |                      |      |       |
|   | -   Business              |                      |      |       |
|   |                           |                      |      |       |
|   | -   Entertainment         |                      |      |       |
|   |                           |                      |      |       |
|   | -   Health                |                      |      |       |
|   |                           |                      |      |       |
|   | -   Science               |                      |      |       |
|   |                           |                      |      |       |
|   | -   Sports                |                      |      |       |
|   |                           |                      |      |       |
|   | -   Technology            |                      |      |       |
+---+---------------------------+----------------------+------+-------+
| 3 | Verify the Home tab is    | The home tab is      | Pass |       |
|   | selected by default when  | highlighted in Blue  |      |       |
|   | the user first signs in.  | by default.          |      |       |
+---+---------------------------+----------------------+------+-------+
| 4 | Click and access each tab | All tabs are         | Pass |       |
|   | to verify they are        | functional and       |      |       |
|   | functional and provide    | provide article      |      |       |
|   | content.                  | listings according   |      |       |
|   |                           | to their categories. |      |       |
+---+---------------------------+----------------------+------+-------+

  -----------------------------------------------------------------------
  Test Case ID: 22
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - Home tab.

  Subsystem: Landing page - Preferences - Home

  Sprint number: 3

  Execution Date: 4/08/2023

  Test Method: Manual - Integration Test

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

 Description:

Verification of the landing page Home tab functionality.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account and can utilize the account to log
in.

 

+---+-----------------------+--------------------------+------+-------+
| S | Action                | Expected Result          | P    | Co    |
| t |                       |                          | ass/ | mment |
| e |                       |                          | Fail |       |
| p |                       |                          |      |       |
+===+=======================+==========================+======+=======+
| 1 | Access the landing    | The user is now viewing  | Pass |       |
|   | page as a signed-in   | the landing page as a    |      |       |
|   | user.                 | signed-in user.          |      |       |
+---+-----------------------+--------------------------+------+-------+
| 2 | Click the "Adjust     | A pop-up should appear   | Pass |       |
|   | your Preferences"     | with the following       |      |       |
|   | button.               | listings along with a    |      |       |
|   |                       | Cancel and Submit        |      |       |
|   |                       | button:                  |      |       |
|   |                       |                          |      |       |
|   |                       | -   General              |      |       |
|   |                       |                          |      |       |
|   |                       | -   Business             |      |       |
|   |                       |                          |      |       |
|   |                       | -   Entertainment        |      |       |
|   |                       |                          |      |       |
|   |                       | -   Health               |      |       |
|   |                       |                          |      |       |
|   |                       | -   Science              |      |       |
|   |                       |                          |      |       |
|   |                       | -   Sports               |      |       |
|   |                       |                          |      |       |
|   |                       | -   Technology           |      |       |
+---+-----------------------+--------------------------+------+-------+
| 3 | Select one or more of | The selected categories  | Pass |       |
|   | the following         | are checked and          |      |       |
|   | categories within the | highlighted in blue.     |      |       |
|   | preference pop-up:    |                          |      |       |
|   |                       |                          |      |       |
|   | -   General           |                          |      |       |
|   |                       |                          |      |       |
|   | -   Business          |                          |      |       |
|   |                       |                          |      |       |
|   | -   Entertainment     |                          |      |       |
|   |                       |                          |      |       |
|   | -   Health            |                          |      |       |
|   |                       |                          |      |       |
|   | -   Science           |                          |      |       |
|   |                       |                          |      |       |
|   | -   Sports            |                          |      |       |
|   |                       |                          |      |       |
|   | -   Technology        |                          |      |       |
+---+-----------------------+--------------------------+------+-------+
| 4 | Click the submit      | Preferences are selected | Pass |       |
|   | button.               | and the pop-up is        |      |       |
|   |                       | closed, the user returns |      |       |
|   |                       | to a landing page.       |      |       |
+---+-----------------------+--------------------------+------+-------+
| 5 | Click the Home tab,   | The home tab is          | Pass |       |
|   | if it's not already   | highlighted in Blue.     |      |       |
|   | selected.             |                          |      |       |
+---+-----------------------+--------------------------+------+-------+
| 6 | Verify the home tabs  | The home tab should only | Pass |       |
|   | articles consist of   | display articles related |      |       |
|   | only the selected     | to the selections made   |      |       |
|   | categories.           | within the preference    |      |       |
|   |                       | setting.                 |      |       |
+---+-----------------------+--------------------------+------+-------+
| 7 | Verify the articles   | Articles are time        | Pass |       |
|   | are listed in         | stamped and displayed in |      |       |
|   | descending order with | a descending order.      |      |       |
|   | the most recent       |                          |      |       |
|   | first.                |                          |      |       |
+---+-----------------------+--------------------------+------+-------+

  -----------------------------------------------------------------------
  Test Case ID: 23
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page -pagination.

  Subsystem: Landing page - Pagination

  Sprint number: 3

  Execution Date: 4/08/2023

  Test Method: Manual - Integration Testing

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides pagination for each tab.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account and is able to utilize the account
to log in.

 

+---+------------------------+------------------------+------+-------+
| S | Action                 | Expected Result        | P    | Co    |
| t |                        |                        | ass/ | mment |
| e |                        |                        | Fail |       |
| p |                        |                        |      |       |
+===+========================+========================+======+=======+
| 1 | Access the landing     | The user is now        | Pass |       |
|   | page as a signed-in    | viewing the landing    |      |       |
|   | user.                  | page as a signed-in    |      |       |
|   |                        | user.                  |      |       |
+---+------------------------+------------------------+------+-------+
| 2 | Verify the following   | All mentioned          | Pass |       |
|   | tabs/categories are    | tabs/categories are    |      |       |
|   | available for          | available for          |      |       |
|   | selection within the   | selection.             |      |       |
|   | landing page:          |                        |      |       |
|   |                        |                        |      |       |
|   | -   Home               |                        |      |       |
|   |                        |                        |      |       |
|   | -   General            |                        |      |       |
|   |                        |                        |      |       |
|   | -   Business           |                        |      |       |
|   |                        |                        |      |       |
|   | -   Entertainment      |                        |      |       |
|   |                        |                        |      |       |
|   | -   Health             |                        |      |       |
|   |                        |                        |      |       |
|   | -   Science            |                        |      |       |
|   |                        |                        |      |       |
|   | -   Sports             |                        |      |       |
|   |                        |                        |      |       |
|   | -   Technology         |                        |      |       |
+---+------------------------+------------------------+------+-------+
| 3 | Verify that each tab   | Pagination is          | Pass |       |
|   | provides pagination    | available with First   |      |       |
|   | within the top and     | page, Next, Last Page, |      |       |
|   | bottom sections of the | along with numbers     |      |       |
|   | tab listings.          | buttons to navigate    |      |       |
|   |                        | through the article    |      |       |
|   |                        | listings.              |      |       |
+---+------------------------+------------------------+------+-------+
| 4 | Verify the user is     | All tab paginations    | Pass |       |
|   | able to click and use  | are functional         |      |       |
|   | the pagination for     | respective to their    |      |       |
|   | each tab.              | logic.                 |      |       |
+---+------------------------+------------------------+------+-------+

  -----------------------------------------------------------------------
  Test Case ID: 24
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - Category and Home tab- Logged out.

  Subsystem: Landing page - Tabs

  Sprint number: 3

  Execution Date: 4/08/2023

  Test Method: Manual - Functional Testing

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides functional tabs for each
category along with a Home tab as logged out user.

Precondition:

·        The system is running.

·        Landing page is available.

 

+---+--------------------------+----------------------+------+-------+
| S | Action                   | Expected Result      | P    | Co    |
| t |                          |                      | ass/ | mment |
| e |                          |                      | Fail |       |
| p |                          |                      |      |       |
+===+==========================+======================+======+=======+
| 1 | Access the landing page  | The user is now      | Pass |       |
|   | as a Logged-out user.    | viewing the landing  |      |       |
|   |                          | page as a logged-out |      |       |
|   |                          | user.                |      |       |
+---+--------------------------+----------------------+------+-------+
| 2 | Verify the following     | All mentioned        | Pass |       |
|   | tabs/categories are      | tabs/categories are  |      |       |
|   | available for selection  | available for        |      |       |
|   | within the landing page: | selection.           |      |       |
|   |                          |                      |      |       |
|   | -   Home                 |                      |      |       |
|   |                          |                      |      |       |
|   | -   General              |                      |      |       |
|   |                          |                      |      |       |
|   | -   Business             |                      |      |       |
|   |                          |                      |      |       |
|   | -   Entertainment        |                      |      |       |
|   |                          |                      |      |       |
|   | -   Health               |                      |      |       |
|   |                          |                      |      |       |
|   | -   Science              |                      |      |       |
|   |                          |                      |      |       |
|   | -   Sports               |                      |      |       |
|   |                          |                      |      |       |
|   | -   Technology           |                      |      |       |
+---+--------------------------+----------------------+------+-------+
| 3 | Verify the Home tab is   | The home tab is      | Pass |       |
|   | selected by default.     | highlighted in Blue  |      |       |
|   |                          | by default and       |      |       |
|   |                          | displays articles    |      |       |
|   |                          | from all categories. |      |       |
+---+--------------------------+----------------------+------+-------+
| 4 | Click and access each    | All tabs are         | Pass |       |
|   | tab to verify they are   | functional and       |      |       |
|   | functional and provide   | provide article      |      |       |
|   | content.                 | listings according   |      |       |
|   |                          | to their categories. |      |       |
+---+--------------------------+----------------------+------+-------+

  -----------------------------------------------------------------------
  Test Case ID: 25
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page -pagination - logged out.

  Subsystem: Landing page - Pagination

  Sprint number: 3

  Execution Date: 4/08/2023

  Test Method: Manual - Integration Testing

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides pagination for each tab for
logged-out users.

Precondition:

·        The system is running.

·        Landing page is available.

 

+---+------------------------+------------------------+------+-------+
| S | Action                 | Expected Result        | P    | Co    |
| t |                        |                        | ass/ | mment |
| e |                        |                        | Fail |       |
| p |                        |                        |      |       |
+===+========================+========================+======+=======+
| 1 | Access the landing     | The user is now        | Pass |       |
|   | page as a Logged-out   | viewing the landing    |      |       |
|   | user.                  | page as a logged-out   |      |       |
|   |                        | user.                  |      |       |
+---+------------------------+------------------------+------+-------+
| 2 | Verify the following   | All mentioned          | Pass |       |
|   | tabs/categories are    | tabs/categories are    |      |       |
|   | available for          | available for          |      |       |
|   | selection within the   | selection.             |      |       |
|   | landing page:          |                        |      |       |
|   |                        |                        |      |       |
|   | -   Home               |                        |      |       |
|   |                        |                        |      |       |
|   | -   General            |                        |      |       |
|   |                        |                        |      |       |
|   | -   Business           |                        |      |       |
|   |                        |                        |      |       |
|   | -   Entertainment      |                        |      |       |
|   |                        |                        |      |       |
|   | -   Health             |                        |      |       |
|   |                        |                        |      |       |
|   | -   Science            |                        |      |       |
|   |                        |                        |      |       |
|   | -   Sports             |                        |      |       |
|   |                        |                        |      |       |
|   | -   Technology         |                        |      |       |
+---+------------------------+------------------------+------+-------+
| 3 | Verify that each tab   | Pagination is          | Pass |       |
|   | provides pagination    | available with First   |      |       |
|   | within the top and     | page, Next, Last Page, |      |       |
|   | bottom sections of the | along with numbers     |      |       |
|   | tab listings.          | buttons to navigate    |      |       |
|   |                        | through the article    |      |       |
|   |                        | listings.              |      |       |
+---+------------------------+------------------------+------+-------+
| 4 | Verify the user can    | All tab paginations    | Pass |       |
|   | click and use the      | are functional         |      |       |
|   | pagination for each    | respective to their    |      |       |
|   | tab.                   | logic.                 |      |       |
+---+------------------------+------------------------+------+-------+


 -----------------------------------------------------------------------
  Test Case ID: 26
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Catergory preferences  intergration with pagination.

  Subsystem: Landing page - Pagination

  Sprint number: 3

  Execution Date: 4/09/2023

  Test Method: Manual - Integration Testing

  Executed By: Joshua Steinerman
  -----------------------------------------------------------------------

 Description:

The User Preferences  should not change when pagaination occurs. 

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account and can utilize the account to log
in.

 

+---+------------------------+------------------------+------+-------+
| S | Action                 | Expected Result        | P    | Co    |
| t |                        |                        | ass/ | mment |
| e |                        |                        | Fail |       |
| p |                        |                        |      |       |
+===+========================+========================+======+=======+
| 1 | Access the landing     | The user is now        | Pass |       |
|   | page as a signed-in    | viewing the landing    |      |       |
|   | user.                  | page as a signed-in    |      |       |
|   |                        | user.                  |      |       |
+---+------------------------+------------------------+------+-------+
| 2 | Verify the following   | All mentioned          | Pass |       |
|   | tabs/categories are    | tabs/categories are    |      |       |
|   | available for          | available for          |      |       |
|   | selection within the   | selection.             |      |       |
|   | landing page:          |                        |      |       |
|   |                        |                        |      |       |
|   | -   Home               |                        |      |       |
|   |                        |                        |      |       |
|   | -   General            |                        |      |       |
|   |                        |                        |      |       |
|   | -   Business           |                        |      |       |
|   |                        |                        |      |       |
|   | -   Entertainment      |                        |      |       |
|   |                        |                        |      |       |
|   | -   Health             |                        |      |       |
|   |                        |                        |      |       |
|   | -   Science            |                        |      |       |
|   |                        |                        |      |       |
|   | -   Sports             |                        |      |       |
|   |                        |                        |      |       |
|   | -   Technology         |                        |      |       |
+---+------------------------+------------------------+------+-------+
| 3 | Select one of the      | That categorys is saved| Pass |       |
|   | catergories.           | as a selected catergory       |       |
+---+------------------------+------------------------+------+-------+
| 4 | Verify that each tab   | Pagination is          | Pass |       |
|   | provides pagination    | available with First   |      |       |
|   | within the top and     | page, Next, Last Page, |      |       |
|   | bottom sections of the | along with numbers     |      |       |
|   | tab listings.          | buttons to navigate    |      |       |
|   |                        | through the article    |      |       |
|   |                        | listings.              |      |       |
+---+------------------------+------------------------+------+-------+
| 5 | Verify the user is     | All tab paginations    | Pass |       |
|   | able to click and use  | are functional         |      |       |
|   | the pagination for     | respective to their    |      |       |
|   | each tab.              | logic.                 |      |       |
+---+------------------------+------------------------+------+-------+
| 6 | Verify the previously  | All previously selected| Pass |       |
|   | selected catergory is  | catergories are still  |      |       |
|   | still selected.        | selected.              |      |       |
+---+------------------------+------------------------+------+-------+


