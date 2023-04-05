**Team 404:  Sprint 2 Test Cases**

**Ahsan Hasnath, Cristofer Carcamo, Joshua Steinerman, Zal Patel, Akshay
Patel**

**CS-684: Quality Assurance**

 

  -----------------------------------------------------------------------
  Test Case ID: 14
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - Not signed-in new article display.

  Subsystem: Landing page - Display

  Sprint number: 2

  Execution Date: 3/25/2023

  Test Method: Manual - Functional Testing

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

Description:

Verification of the landing page article displayed when the user is not
signed in.

Precondition:

·        The system is running.

·        Landing page is available.

·        NewsAPI is functional along with application configurations.

·        User has not previously signed in with an account.

 

  --------------------------------------------------------------------------------
  Step   Action                  Expected Result             Pass/Fail   Comment
  ------ ----------------------- --------------------------- ----------- ---------
  1      Open a new browser and  The landing page is         Pass         
         access the application. displayed for Team 404.                 

  2      Verify the user is not  The user should not be      Pass         
         already signed in.      signed in from previous                 
                                 sessions.                               

  3      Verify the landing page The landing page displays   Pass         
         displays a list of      various general articles                
         articles within the     when the user is not signed             
         page.                   in.                                     
  --------------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 15
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - Not signed in - Refresh button

  Subsystem: Landing page - Refresh button

  Sprint number: 2

  Execution Date: 3/25/2023

  Test Method: Manual - Functional Testing

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

Description:

Verification of the landing page provides a functional link or button to
refresh the displayed articles when the user is not signed in.

Precondition:

·        The system is running.

·        Landing page is available.

·        NewsAPI is functional along with application configurations.

·        User has not previously signed in with an account.

 

  --------------------------------------------------------------------------------
  Step   Action                 Expected Result              Pass/Fail   Comment
  ------ ---------------------- ---------------------------- ----------- ---------
  1      Open a new browser and The landing page is          Pass         
         access the             displayed for Team 404.                  
         application.                                                    

  2      Verify the user is not The user should not be       Pass         
         already signed in.     signed in from previous                  
                                sessions.                                

  3      Verify the page        The landing page provides a  Pass         
         provides a link or     link or button to refresh                
         button to refresh the  the displayed articles when              
         displayed articles.    the user is not signed in.               
  --------------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 16
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - Signed in - Refresh button

  Subsystem: Landing page - Refresh button

  Sprint number: 2

  Execution Date: 3/25/2023

  Test Method: Manual - Functional Testing

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides a functional link or button to
refresh the displayed articles when the user is signed in.

Precondition:

·        The system is running.

·        Landing page is available.

·        NewsAPI is functional along with application configurations.

 

  -------------------------------------------------------------------------------
  Step   Action                  Expected Result            Pass/Fail   Comment
  ------ ----------------------- -------------------------- ----------- ---------
  1      Access the landing page The user is now viewing    Pass         
         as a signed-in user.    the landing page as a                  
                                 signed-in user.                        

  2      Verify that the landing The landing page provides  Pass        
         page provides a link or a link or button to                    
         button to refresh the   refresh the displayed                  
         displayed articles.     articles when the user is              
                                 signed in.                             
  -------------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 17
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - settings - preferences- Negative

  Subsystem: Landing page - Settings - Preferences

  Sprint number: 2

  Execution Date: 3/25/2023

  Test Method: Manual - Functional Testing

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides a functional link or button to
open a settings page and submit and cancel button along with selection
requirements.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account.

 

+---+----------------------+------------------+------+---------------+
| S | Action               | Expected Result  | P    | Comment       |
| t |                      |                  | ass/ |               |
| e |                      |                  | Fail |               |
| p |                      |                  |      |               |
+===+======================+==================+======+===============+
| 1 | Access the landing   | The user is now  | P    |               |
|   | page as a signed-in  | viewing the      | ass  |               |
|   | user.                | landing page as  |      |               |
|   |                      | a signed-in      |      |               |
|   |                      | user.            |      |               |
+---+----------------------+------------------+------+---------------+
| 2 | Verify that the      | The landing page | Pass |               |
|   | landing page         | provides a link  |      |               |
|   | provides a link or   | or button to     |      |               |
|   | button to open a     | open a settings  |      |               |
|   | settings page        | page when the    |      |               |
|   |                      | user is signed   |      |               |
|   |                      | in.              |      |               |
+---+----------------------+------------------+------+---------------+
| 3 | Click the settings   | The settings     | P    |               |
|   | link or button.      | page is          | ass  |               |
|   |                      | available and    |      |               |
|   |                      | now accessed.    |      |               |
+---+----------------------+------------------+------+---------------+
| 4 | Click and access the | Preferences are  | Pass | Preferences   |
|   | preferences.         | available within |      | are available |
|   |                      | settings.        |      | without       |
|   |                      |                  |      | clicking.     |
+---+----------------------+------------------+------+---------------+
| 5 | Verify the following | All mentioned    | Pass |               |
|   | categories are       | categories are   |      |               |
|   | available for        | available for    |      |               |
|   | selection:           | selection.       |      |               |
|   |                      |                  |      |               |
|   | -   General          |                  |      |               |
|   |                      |                  |      |               |
|   | -   Business         |                  |      |               |
|   |                      |                  |      |               |
|   | -   Entertainment    |                  |      |               |
|   |                      |                  |      |               |
|   | -   Health           |                  |      |               |
|   |                      |                  |      |               |
|   | -   Science          |                  |      |               |
|   |                      |                  |      |               |
|   | -   Sports           |                  |      |               |
|   |                      |                  |      |               |
|   | -   Technology       |                  |      |               |
+---+----------------------+------------------+------+---------------+
| 6 | Unselect all         | The system       | Fail | The user is   |
|   | categories and click | should not allow |      | able to       |
|   | the submit button.   | submission       |      | submit        |
|   |                      | without          |      | preferences   |
|   |                      | selecting at     |      | without       |
|   |                      | least 1          |      | selecting a   |
|   |                      | preference.      |      | category.     |
+---+----------------------+------------------+------+---------------+
| 7 | Click the Cancel     | The user should  | Pass |               |
|   | button.              | now return to    |      |               |
|   |                      | the landing      |      |               |
|   |                      | page.            |      |               |
+---+----------------------+------------------+------+---------------+

  -----------------------------------------------------------------------
  Test Case ID: 18
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - settings - preferences - Positive.

  Subsystem: Landing page - Settings - Preferences

  Sprint number: 2

  Execution Date: 3/25/2023

  Test Method: Manual - Functional Testing

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides a functional link or button to
open a settings page and the ability to submit a preference.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account.

 

+---+-------------------------+-----------------------+------+-------+
| S | Action                  | Expected Result       | P    | Co    |
| t |                         |                       | ass/ | mment |
| e |                         |                       | Fail |       |
| p |                         |                       |      |       |
+===+=========================+=======================+======+=======+
| 1 | Access the landing page | The user is now       | Pass |       |
|   | as a signed-in user.    | viewing the landing   |      |       |
|   |                         | page as a signed-in   |      |       |
|   |                         | user.                 |      |       |
+---+-------------------------+-----------------------+------+-------+
| 2 | Verify that the landing | The landing page      | Pass |       |
|   | page provides a link or | provides a link or    |      |       |
|   | button to open a        | button to open a      |      |       |
|   | settings page           | settings page when    |      |       |
|   |                         | the user is signed    |      |       |
|   |                         | in.                   |      |       |
+---+-------------------------+-----------------------+------+-------+
| 3 | Click the settings link | The settings page is  | Pass |       |
|   | or button.              | available and now     |      |       |
|   |                         | accessed.             |      |       |
+---+-------------------------+-----------------------+------+-------+
| 4 | Click and access the    | Preferences are       | Pass |       |
|   | preferences.            | available within      |      |       |
|   |                         | settings.             |      |       |
+---+-------------------------+-----------------------+------+-------+
| 5 | Verify the following    | All mentioned         | Pass |       |
|   | categories are          | categories are        |      |       |
|   | available for           | available for         |      |       |
|   | selection:              | selection.            |      |       |
|   |                         |                       |      |       |
|   | -   General             |                       |      |       |
|   |                         |                       |      |       |
|   | -   Business            |                       |      |       |
|   |                         |                       |      |       |
|   | -   Entertainment       |                       |      |       |
|   |                         |                       |      |       |
|   | -   Health              |                       |      |       |
|   |                         |                       |      |       |
|   | -   Science             |                       |      |       |
|   |                         |                       |      |       |
|   | -   Sports              |                       |      |       |
|   |                         |                       |      |       |
|   | -   Technology          |                       |      |       |
+---+-------------------------+-----------------------+------+-------+
| 6 | Select a category and   | The system should     | Pass |       |
|   | click the submit        | accept the change and |      |       |
|   | button.                 | the user should now   |      |       |
|   |                         | return to the landing |      |       |
|   |                         | page.                 |      |       |
+---+-------------------------+-----------------------+------+-------+

  -----------------------------------------------------------------------
  Test Case ID: 19
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - settings - preferences - Multiple
  Positive.

  Subsystem: Landing page - Settings - Preferences

  Sprint number: 2

  Execution Date: 3/25/2023

  Test Method: Manual - Functional Testing

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides a functional link or button to
open a settings page and the ability to submit multiple preferences.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account.

 

+---+-------------------------+-----------------------+------+-------+
| S | Action                  | Expected Result       | P    | Co    |
| t |                         |                       | ass/ | mment |
| e |                         |                       | Fail |       |
| p |                         |                       |      |       |
+===+=========================+=======================+======+=======+
| 1 | Access the landing page | The user is now       | Pass |       |
|   | as a signed-in user.    | viewing the landing   |      |       |
|   |                         | page as a signed-in   |      |       |
|   |                         | user.                 |      |       |
+---+-------------------------+-----------------------+------+-------+
| 2 | Verify that the landing | The landing page      | Pass |       |
|   | page provides a link or | provides a link or    |      |       |
|   | button to open a        | button to open a      |      |       |
|   | settings page           | settings page when    |      |       |
|   |                         | the user is signed    |      |       |
|   |                         | in.                   |      |       |
+---+-------------------------+-----------------------+------+-------+
| 3 | Click the settings link | The settings page is  | Pass |       |
|   | or button.              | available and now     |      |       |
|   |                         | accessed.             |      |       |
+---+-------------------------+-----------------------+------+-------+
| 4 | Click and access the    | Preferences are       | Pass |       |
|   | preferences.            | available within      |      |       |
|   |                         | settings.             |      |       |
+---+-------------------------+-----------------------+------+-------+
| 5 | Verify the following    | All mentioned         | Pass |       |
|   | categories are          | categories are        |      |       |
|   | available for           | available for         |      |       |
|   | selection:              | selection.            |      |       |
|   |                         |                       |      |       |
|   | -   General             |                       |      |       |
|   |                         |                       |      |       |
|   | -   Business            |                       |      |       |
|   |                         |                       |      |       |
|   | -   Entertainment       |                       |      |       |
|   |                         |                       |      |       |
|   | -   Health              |                       |      |       |
|   |                         |                       |      |       |
|   | -   Science             |                       |      |       |
|   |                         |                       |      |       |
|   | -   Sports              |                       |      |       |
|   |                         |                       |      |       |
|   | -   Technology          |                       |      |       |
+---+-------------------------+-----------------------+------+-------+
| 6 | Select multiple         | The system should     | Pass |       |
|   | categories and click    | accept the change and |      |       |
|   | the submit button.      | the user should now   |      |       |
|   |                         | return to the landing |      |       |
|   |                         | page.                 |      |       |
+---+-------------------------+-----------------------+------+-------+

  -----------------------------------------------------------------------
  Test Case ID: 20
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - Signed out - settings.

  Subsystem: Landing page - Settings - Preferences

  Sprint number: 2

  Execution Date: 3/25/2023

  Test Method: Manual - Functional Testing

  Executed By: Ahsan Hasnath
  -----------------------------------------------------------------------

 Description:

Verification of the landing page does not provide a functional link or
button to open a settings page.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account.

 

  -------------------------------------------------------------------------------
  Step   Action                   Expected Result           Pass/Fail   Comment
  ------ ------------------------ ------------------------- ----------- ---------
  1      Access the landing page  The user is now viewing   Pass         
         as a signed-out user.    the landing page as a                 
                                  signed-out user.                      

  2      Verify that the landing  The landing page does not Pass         
         page does not provide a  provide a link or button              
         functional link or       to open a settings page               
         button to open the       when the user is not                  
         settings page.           signed in.                            
  -------------------------------------------------------------------------------
