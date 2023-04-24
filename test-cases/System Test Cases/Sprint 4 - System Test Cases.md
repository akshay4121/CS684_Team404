# Team 404: Sprint 4 System Test Cases

## Ahsan Hasnath, Cristofer Carcamo, Joshua Steinerman, Zal Patel, Akshay Patel

## CS-684: Quality Assurance

  -----------------------------------------------------------------------
  Test Case #: 34
  -----------------------------------------------------------------------
  System: Team 404 App

  Test Case Name: Test Sign-up

  Subsystem: Registration page

  Sprint number: 4

  Execution Date:

  Test Method: Manual - System Test

  Executed By:
  -----------------------------------------------------------------------

Description:

The following steps will cover the majority of registration requirements
through negative tests.

Precondition:

-   The system is running, and the landing and sign-in pages are
    available.

-   User is logged out.

  ---------------------------------------------------------------------------
  Step   Action            Expected Result         Pass/Fail   Comment
  ------ ----------------- ----------------------- ----------- --------------
  1      As a signed-out   The Registration page               
         user navigate to  displays the following              
         the Registration  Text boxes and a submit             
         page by clicking  button: Username,                   
         the "Create an    Email, Password, and                
         Account" within   Confirm Password.                   
         the sign-in menu.                                     

  2      Within the        A message should appear             
         Registration page indicating Registration             
         enter an email    is unsuccessful, and                
         within the Email: that Username,                      
         textbox and click Password, and Confirm               
         Register.         Password are required.              

  3      Within the        A message should appear             
         Registration page indicating Registration             
         enter a valid     is unsuccessful, and                
         username and      that Password and                   
         Email within      Confirm Password is                 
         their respective  required.                           
         textboxes and                                         
         click Register.                                       

  4      Within the        A message should appear             
         Registration page indicating Registration             
         enter a valid     is unsuccessful, and a              
         username, Email,  Confirm Password is                 
         and password      required.                           
         within their                                          
         respective                                            
         textboxes and                                         
         click Register.                                       

  5      Within the        A message should appear             
         Registration page indicating Registration             
         enter an existing is unsuccessful, and                
         username within   the User already                    
         the username      exists.                             
         textbox and a                                         
         valid Email,                                          
         password, and                                         
         confirm password                                      
         within their                                          
         respective                                            
         textboxes and                                         
         click Register.                                       

  6      Within the        A message should appear             
         Registration page indicating Registration             
         enter a valid     is unsuccessful, and                
         Username, Email,  that the Passwords do               
         password, and a   not match.                          
         DIFFERENT confirm                                     
         password within                                       
         their respective                                      
         textboxes and                                         
         click Register.                                       

  7      Within the        A message should appear             
         Registration page indicating Registration             
         enter a username  is unsuccessful, and                
         with less than 8  the Username must be at             
         characters, a     least 8 characters.                 
         valid Email,                                          
         password, and                                         
         confirm the                                           
         password within                                       
         their respective                                      
         textboxes and                                         
         then click                                            
         Register.                                             

  8      Within the        Valid Email, password,              
         registration page and confirm password                
         enter a valid     should display within               
         Email, password,  their respective text               
         and confirm       boxes.                              
         password within                                       
         their respective                                      
         textboxes.                                            

  9      Within the        A message should appear             
         username field,   indicating Registration             
         enter a username  is unsuccessful, and                
         that includes     that the Username                   
         spacing between   cannot include spaces.              
         characters.                                           

  10     Within the        A message should appear             
         username field,   indicating Registration             
         enter a username  is successful, and the              
         that includes     system should now be on             
         spacing before    the landing page as                 
         and after.        logged in and                       
                           displaying the username             
                           trimmed of any spacing.             
  ---------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case #: 35
  -----------------------------------------------------------------------
  System: Team 404 App

  Test Case Name: Sign in

  Subsystem: Sign-in Page

  Sprint number: 4

  Execution Date:

  Test Method: Manual - System Test

  Executed By:
  -----------------------------------------------------------------------

Description:

The following steps cover negative scenarios within sign-in attempts
through the sign-in page.

Precondition:

-   The system displays the sign-in page.

-   The user has an existing account with the app.

-   The user remembers their username and password for their account.

  ---------------------------------------------------------------------------
  Step   Action            Expected Result         Pass/Fail   Comment
  ------ ----------------- ----------------------- ----------- --------------
  1      Access the login  Users are now viewing               
         page as a         the sign in page.                   
         signed-out user.                                      

  2      Type a username   The system displays the             
         into the first    input within the                    
         text box.         username textbox.                   

  3      Enter the wrong   As the user types in                
         password.         their password, the                 
                           system will mask the                
                           password as it is                   
                           written.                            

  4      Click the         The system displays an              
         login/submit      error message saying                
         button.           the username or                     
                           password was incorrect.             

         Enter the         The Username is                     
         appropriate       visible, the password               
         username and      is entered and masked.              
         password into                                         
         their related                                         
         fields.                                               

         Click the log-in  The system then brings              
         button.           the user to the landing             
                           page.                               
  ---------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 36
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Test Set Preferences

  Subsystem: Landing page - Settings - Preferences

  Sprint number: 4

  Execution Date:

  Test Method: Manual - System Test

  Executed By:
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides a functional link or button to
open a settings page and submit and cancel button along with selection
requirements.

Precondition:

·        The system is running.

·        Landing page is available.

·        User has an existing account.

 

+---+---------------------------+----------------------+------+-------+
| S | Action                    | Expected Result      | P    | Co    |
| t |                           |                      | ass/ | mment |
| e |                           |                      | Fail |       |
| p |                           |                      |      |       |
+===+===========================+======================+======+=======+
| 1 | Access the landing page   | The user is now      |      |       |
|   | as a signed-in user.      | viewing the landing  |      |       |
|   |                           | page as a signed-in  |      |       |
|   |                           | user.                |      |       |
+---+---------------------------+----------------------+------+-------+
| 2 | Verify that the landing   | The landing page     |      |       |
|   | page provides a link or   | provides a link or   |      |       |
|   | button to open a settings | button to open a     |      |       |
|   | page                      | settings page when   |      |       |
|   |                           | the user is signed   |      |       |
|   |                           | in.                  |      |       |
+---+---------------------------+----------------------+------+-------+
| 3 | Click the "Adjust your    | The settings page is |      |       |
|   | Preferences" button.      | available and now    |      |       |
|   |                           | accessed.            |      |       |
+---+---------------------------+----------------------+------+-------+
| 4 | Click and access the      | Preferences are      |      |       |
|   | preferences.              | available within     |      |       |
|   |                           | settings.            |      |       |
+---+---------------------------+----------------------+------+-------+
| 5 | Verify the following      | All mentioned        |      |       |
|   | categories are available  | categories are       |      |       |
|   | for selection:            | available for        |      |       |
|   |                           | selection.           |      |       |
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
| 6 | Unselect all categories   | The system should    |      | .     |
|   | and click the submit      | not allow submission |      |       |
|   | button.                   | without selecting at |      |       |
|   |                           | least 1 preference.  |      |       |
+---+---------------------------+----------------------+------+-------+
| 7 | Click the Cancel button.  | The user should now  |      |       |
|   |                           | return to the        |      |       |
|   |                           | landing page.        |      |       |
+---+---------------------------+----------------------+------+-------+
| 8 | Click and access the      | Preferences are      |      |       |
|   | "Adjust your Preferences" | available within     |      |       |
|   | button again.             | settings.            |      |       |
+---+---------------------------+----------------------+------+-------+
| 9 | Select one category and   | The system should    |      |       |
|   | click the submit button.  | accept the change    |      |       |
|   |                           | and the user should  |      |       |
|   |                           | now return to the    |      |       |
|   |                           | landing page.        |      |       |
+---+---------------------------+----------------------+------+-------+
| 1 | View the landing page and | The Home tab         |      |       |
| 0 | verify the page displays  | displays only the    |      |       |
|   | the selected preferred    | selected category.   |      |       |
|   | category.                 |                      |      |       |
+---+---------------------------+----------------------+------+-------+

  -----------------------------------------------------------------------
  Test Case ID: 37
  -----------------------------------------------------------------------
  System: Team 404 App

  Test Case Name: Test Show merged Articles.

  Subsystem: Landing page - Preferences - Home

  Sprint number: 4

  Execution Date:

  Test Method: Manual - System Test

  Executed By:
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
| 1 | Access the landing    | The user is now viewing  |      |       |
|   | page as a signed-in   | the landing page as a    |      |       |
|   | user.                 | signed-in user.          |      |       |
+---+-----------------------+--------------------------+------+-------+
| 2 | Click the "Adjust     | A pop-up should appear   |      |       |
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
| 3 | Select multiple       | The selected categories  |      |       |
|   | categories within the | are checked and          |      |       |
|   | preference pop-up:    | highlighted in blue.     |      |       |
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
| 4 | Click the submit      | Preferences are selected |      |       |
|   | button.               | and the pop-up is        |      |       |
|   |                       | closed, the user returns |      |       |
|   |                       | to a landing page.       |      |       |
+---+-----------------------+--------------------------+------+-------+
| 5 | Click the Home tab,   | The home tab is          |      |       |
|   | if it's not already   | highlighted in Blue.     |      |       |
|   | selected.             |                          |      |       |
+---+-----------------------+--------------------------+------+-------+
| 6 | Verify the home tabs  | The home tab should only |      |       |
|   | articles consist of   | display articles related |      |       |
|   | only the selected     | to the selections made   |      |       |
|   | categories.           | within the preference    |      |       |
|   |                       | setting.                 |      |       |
+---+-----------------------+--------------------------+------+-------+
| 7 | Verify the articles   | Articles are             |      |       |
|   | are listed in         | time-stamped and         |      |       |
|   | descending order with | displayed in a           |      |       |
|   | the most recent       | descending order.        |      |       |
|   | first.                |                          |      |       |
+---+-----------------------+--------------------------+------+-------+

  -----------------------------------------------------------------------
  Test Case ID: 38
  -----------------------------------------------------------------------
  System: Team 404 App

  Test Case Name: Test Show Category Articles

  Subsystem: Landing page - Tabs

  Sprint number: 4

  Execution Date:

  Test Method: Manual - System Testing

  Executed By:
  -----------------------------------------------------------------------

 Description:

Verification of the landing page provides functional tabs for each
category along with a Home tab as a logged in user.

Precondition:

·       The system is running.

·       User is logged in.

·       News API is configured and functioning appropriately.

 

+---+---------------------------+----------------------+------+-------+
| S | Action                    | Expected Result      | P    | Co    |
| t |                           |                      | ass/ | mment |
| e |                           |                      | Fail |       |
| p |                           |                      |      |       |
+===+===========================+======================+======+=======+
| 1 | Access the landing page   | The user is now      |      |       |
|   | as a Logged in user.      | viewing the landing  |      |       |
|   |                           | page as a logged-in  |      |       |
|   |                           | user.                |      |       |
+---+---------------------------+----------------------+------+-------+
| 2 | Verify the following      | All mentioned        |      |       |
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
| 3 | Verify the Home tab is    | The home tab is      |      |       |
|   | selected by default.      | highlighted in Blue  |      |       |
|   |                           | by default and       |      |       |
|   |                           | displays articles    |      |       |
|   |                           | from all categories. |      |       |
+---+---------------------------+----------------------+------+-------+
| 4 | Click and access each tab | All tabs are         |      |       |
|   | to verify they are        | functional and       |      |       |
|   | functional and provide    | provide article      |      |       |
|   | content.                  | listings according   |      |       |
|   |                           | to their categories. |      |       |
+---+---------------------------+----------------------+------+-------+

  -----------------------------------------------------------------------
  Test Case ID: 39
  -----------------------------------------------------------------------
  System: Team 404 App

  Test Case Name: Test Searching

  Subsystem: Landing page - Search

  Sprint number: 4

  Execution Date:

  Test Method: Manual - System Testing

  Executed By:
  -----------------------------------------------------------------------

 Description:

Verification of the application's normal search feature.

Precondition:

·       The system is running.

·       User is logged in.

·       News API is configured and functioning appropriately.

 

  --------------------------------------------------------------------------------
  Step   Action                Expected Result               Pass/Fail   Comment
  ------ --------------------- ----------------------------- ----------- ---------
  1      Access the landing    The user is now viewing the                
         page as a Logged in   landing page as a logged-in               
         user.                 user.                                     

  2      Verify that a Search  The search box is available               
         box and Search button with a grayed-out "Search..."             
         is available on the   message and the button is to              
         page.                 the right.                                

  3      Within the Search     A pop-up should appear with               
         box, type "Tesla"     articles related to the                   
         then click Search.    search.                                   

  4      Verify the Articles   All searched articles should              
         are indeed related to discuss "Tesla".                          
         the search criteria.                                            
  --------------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 40
  -----------------------------------------------------------------------
  System: Team 404 App

  Test Case Name: Test Advanced Searching

  Subsystem: Landing page - Search

  Sprint number: 4

  Execution Date:

  Test Method: Manual - System Testing

  Executed By:
  -----------------------------------------------------------------------

 Description:

Verification of the application's advanced search features.

Precondition:

·       The system is running.

·       User is logged in.

·       News API is configured and functioning appropriately.

 

  --------------------------------------------------------------------------------
  Step   Action                     Expected Result          Pass/Fail   Comment
  ------ -------------------------- ------------------------ ----------- ---------
  1      Access the landing page as The user is now viewing               
         a Logged in user.          the landing page as a                
                                    logged-in user.                      

  2      Verify that a Search box   The search box is                    
         and Search button is       available with a                     
         available on the page.     grayed-out "Search..."               
                                    message and the button               
                                    is to the right.                     

  3      Using the category tabs,   A tab that is not Home               
         select a tab that is NOT   or general is                        
         Home or General.           highlighted in blue.                 

  4      Note the name of the       The user notes the                   
         tab/category and the title selected category and                
         of the first article.      its first article                    

  5      Copy the title of the      A pop-up should appear               
         first article, paste it    with articles listed in              
         into the search box, and   relation to the search               
         click Search.              criteria.                            

  6      Verify the search results  The search results are               
         only display the search    appropriate to the                   
         criteria.                  search criteria.                     

  7      Click the "Exit Search     The search pop-up is                 
         Results" button to exit    closed.                              
         the search pop-up.                                              

  8      Within the search box      A pop-up should appear               
         enter "Baseball AND        with articles listed in              
         Basketball" and then click relation to the search               
         search.                    criteria.                            

  9      Verify the search results  The search results are               
         only display the search    appropriate to the                   
         criteria.                  search criteria.                     

  10     Click the "Exit Search     The search pop-up is                 
         Results" button to exit    closed.                              
         the search pop-up.                                              

  11     Within the search box      A pop-up should appear               
         enter "Meteor shower OR    with articles listed in              
         Black hole" and then click relation to the search               
         search.                    criteria.                            

  12     Verify the search results  The search results are               
         only display the search    appropriate to the                   
         criteria.                  search criteria.                     

  13     Click the "Exit Search     The search pop-up is                 
         Results" button to exit    closed.                              
         the search pop-up.                                              

  14     Within the search box      A pop-up should appear               
         enter "Tesla" and then     with articles listed in              
         click search.              relation to the search               
                                    criteria.                            

  15     Note the first article for The search is noted and              
         the search result then     closed.                              
         click the Exit Search                                           
         Results button.                                                 

  16     Within the search box      A pop-up should appear               
         enter "Tesla Not (the      with articles listed in              
         first article from the     relation to the search               
         previous search" and then  criteria.                            
         click search.                                                   

  17     Verify the search results  The search results are               
         only display the search    appropriate to the                   
         criteria.                  search criteria.                     

  18     Click the "Exit Search     The search pop-up is                 
         Results" button to exit    closed.                              
         the search pop-up.                                              

  19     Within the search box      A pop-up should appear               
         enter "(Soccer)" and then  with articles listed in              
         click search.              relation to Soccer.                  

  20     Verify the search results  The search results are               
         only display the search    appropriate to the                   
         criteria.                  search criteria.                     

  21     Click the "Exit Search     The search pop-up is                 
         Results" button to exit    closed.                              
         the search pop-up.                                              
  --------------------------------------------------------------------------------
