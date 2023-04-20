> **Team 404:  Sprint 4 Test Cases**

**Zal Patel, Cristofer Carcamo, Joshua Steinerman, Akshay Patel, Ahsan Hasnath**

**CS-684: Quality Assurance**

  -----------------------------------------------------------------------
  Test Case ID: 28
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Functionality of search box on landing page

  Subsystem: Landing page - Search Button

  Sprint number: 4

  Execution Date: 04/15/2023

  Test Method: Manual - Functional Testing

  Executed By: Zal Patel
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides functional button of search engine button for news with a Home tab.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account and is able to utilize the account
to log in.


| Step | Action | Expected result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | Access the landing page as a signed-in user | The user is now viewing the landing page as a signed-in user. | Pass | |
| 2 | Verify the following categories are available for selection | All mentions categories are available for selection. | Pass | |
| 3 | Enter keywords in the search box on home page | Serach result will display the news article related with the most recent first. | Pass | |

 -----------------------------------------------------------------------
  Test Case ID: 29
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Advanced search box

  Subsystem: Landing page - Advanced search box

  Sprint number: 4

  Execution Date: 04/18/2023

  Test Method: Manual - Functional Testing

  Executed By: Zal Patel
  -----------------------------------------------------------------------
  
Description:

Verification of the landing page provides functional of dvanced search box engine button for news with a Home tab. Also, 
Searching keyword with AND returns items that contain both the search terms.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account and is able to utilize the account
to log in.


| Step | Action | Expected result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | Access the landing page as a signed-in user | The user is now viewing the landing page as a signed-in user. | Pass | |
| 2 | Verify the following categories are available for selection | All mentions categories are available for selection. | Pass | |
| 3 | Type Tesla AND SpaceX in search box. | Serach result will display the news article related with tesla and spacex with most recent first | Pass | |

 -----------------------------------------------------------------------
  Test Case ID: 30
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Advanced search box

  Subsystem: Landing page - Advanced search box

  Sprint number: 4

  Execution Date: 04/18/2023

  Test Method: Manual - Functional Testing

  Executed By: Zal Patel
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides functional of dvanced search box engine button for news with a Home tab. Also, 
Searching keyword with OR returns items that contain both the search terms.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account and is able to utilize the account
to log in.


| Step | Action | Expected result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | Access the landing page as a signed-in user | The user is now viewing the landing page as a signed-in user. | Pass | |
| 2 | Verify the following categories are available for selection | All mentions categories are available for selection. | Pass | |
| 3 | Type tesla OR SpaceX in search box. | Serach result will display the news article either has tesla or spacex within its text. | Pass | |


 -----------------------------------------------------------------------
  Test Case ID: 31
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Advanced search box

  Subsystem: Landing page - Advanced search box

  Sprint number: 4

  Execution Date: 04/18/2023

  Test Method: Manual - Functional Testing

  Executed By: Zal Patel
  -----------------------------------------------------------------------
  
  
 Description:

Verification of the landing page provides functional of dvanced search box engine button for news with a Home tab. Also, 
Searching keyword with NOT returns items that contain both the search terms.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account and is able to utilize the account
to log in.


| Step | Action | Expected result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | Access the landing page as a signed-in user | The user is now viewing the landing page as a signed-in user. | Pass | |
| 2 | Verify the following categories are available for selection: | All mentions categories are available for selection. | Pass | |
| 3 | Type tesla NOT SpaceX in search box. | Serach result will display the news article that has only tesla within its text. | Pass | |

 -----------------------------------------------------------------------
  Test Case ID: 32
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Search API endpoint

  Subsystem: Landing page - Search API endpoint

  Sprint number: 4

  Execution Date: 04/18/2023

  Test Method: Manual - Functional Testing

  Executed By: Zal Patel
  -----------------------------------------------------------------------
  
  Description:

Verification of the landing page provides functional of dvanced search box engine button for news with a Home tab and Search for artciles.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account and is able to utilize the account
to log in.


| Step | Action | Expected result | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | Access the landing page as a signed-in user | The user is now viewing the landing page as a signed-in user. | Pass | |
| 2 | Verify the following categories are available for selection: | All mentions categories are available for selection. | Pass | |
| 3 | Check the search tearms in search tab. | It should get response code 200 | Pass | |
