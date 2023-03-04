# Team 404: Sprint 1 Test Cases

## Ahsan Hasnath, Cristofer Carcamo, Joshua Steinerman, Zal Patel, Akshay Patel

## CS-684: Quality Assurance

  -----------------------------------------------------------------------
  Test Case ID: 1
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - Not signed in

  Subsystem: Landing page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description:

Verification of the Sign-in option within the landing page when the user
is not logged in.

Precondition:

-   The system is running.

-   Landing page is available.

-   User has not previously signed in with an account.

  -------------------------------------------------------------------------------------
  Step   Action                            Expected Result     Pass/Fail   Comment
  ------ --------------------------------- ------------------- ----------- ------------
  1      Open a new browser and access the The landing page is             
         application using the following   displayed for Team              
         link                              404.                            
         "https://team404.onrender.com/"                                   

  2      Verify the user is not already    The user should not             
         signed in.                        be signed in from               
                                           previous sessions.              

  3      Verify the landing page displays  The landing page                
         an "Already a member? Login"      displays an                     
         Button.                           "Already a member?              
                                           Login" button                   
                                           within the landing              
                                           page when a user is             
                                           not already logged              
                                           in.                             
  -------------------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 2
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - signed in

  Subsystem: Landing page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description

Verification of the displaying username within the landing page when the
user is already logged in.

Precondition:

-   The system is running.

-   Landing page is available.

-   User must already have an account.

-   User has previously signed in with an account.

  ---------------------------------------------------------------------------
  Step   Action            Expected Result         Pass/Fail   Comment
  ------ ----------------- ----------------------- ----------- --------------
  1      Repeat Test case  The landing page for                
         1 and as a        Team 404 is displayed.              
         signed-in user                                        
         navigates to the                                      
         landing page.                                         

  2      Verify the user   The landing page should             
         is already signed not display a sign-in               
         in.               option.                             

  3      View and verify   The landing page                    
         that the landing  displays the following              
         page displays the message "Welcome to                 
         name of the user. your dashboard,                     
                           username" if the user               
                           is already signed in.               
  ---------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 3
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Landing Page - Log out

  Subsystem: Landing page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description

Verification of the displaying Log out option within the landing page
when the user is already logged in.

Precondition:

-   The system is running.

-   Landing page is available.

-   User must have an existing account.

-   User has previously signed in with an account.

  ---------------------------------------------------------------------------
  Step   Action            Expected Result         Pass/Fail   Comment
  ------ ----------------- ----------------------- ----------- --------------
  1      Repeat Test case  The landing page for                
         1 and as a        Team 404 is displayed.              
         signed-in user                                        
         navigates to the                                      
         landing page.                                         

  2      Verify the user   The landing page should             
         is already signed not display a sign-in               
         in.               option.                             

  3      View and verify   The landing page                    
         that the landing  displays the Log out                
         page displays a   button if the user is               
         "Log Out" button. already signed in.                  

  4      Click the Log out The page should now                 
         button.           display "You have been              
                           logged out." message                
                           with an option to                   
                           Return to Homepage.                 

  5      Click the "Return The user should be in               
         to Homepage"      the landing page as a               
         button.           logged out user.                    
  ---------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 4
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Registration page - Page

  Subsystem: Registration page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description:

The following steps will cover the Registration page and its available
features.

Precondition:

-   The system is running, and the landing and sign-in pages are
    available.

-   User is logged out prior to accessing the landing page.

  -------------------------------------------------------------------------------------
  Step   Action                            Expected Result     Pass/Fail   Comment
  ------ --------------------------------- ------------------- ----------- ------------
  1      As a signed-out user navigate to  The landing page is             
         the landing page.                 displayed with a                
         (https://team404.onrender.com/)   sign-in option.                 

  2      View and verify there is a        "Register for our               
         "Register for our site!" button   site!" is a button              
         within the landing page.          on the top                      
                                           right-hand corner.              

  3      Click the "Register for our       Sign up page                    
         site!" button.                    displaying                      
                                           "Register for our               
                                           Site" as a header               
                                           should now display.             

  4      View the page and confirm the     Username, Email,                
         following Text boxes and a        Password, and                   
         Register button are available:    Confirm Password,               
         Username, Email, Password, and    along with a                    
         Confirm Password.                 Register button are             
                                           available.                      
  -------------------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 5
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Registration page - Negative

  Subsystem: Registration page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description:

The following steps will cover Registration requirements through
negative tests.

Precondition:

-   The system is running, and the landing and sign-in pages are
    available.

-   User is logged out prior to accessing the landing page.

  ---------------------------------------------------------------------------
  Step   Action            Expected Result         Pass/Fail   Comment
  ------ ----------------- ----------------------- ----------- --------------
  1      As a signed-out   The Registration page               
         user navigate to  displays the following              
         the Registration  Text boxes and a                    
         page by clicking  Register button:                    
         the "Register for Username, Email,                    
         our site!" within Password, and Confirm               
         the landing page. Password.                           

  2      Within the        A message should appear             
         Registration,     indicating Registration             
         page enter an     is unsuccessful and                 
         email within the  indicating the required             
         Email: textbox    criteria.                           
         and click                                             
         Register.                                             

  3      Within the        A message should appear             
         Registration page indicating Registration             
         enter a valid     is unsuccessful and                 
         username and      indicating the required             
         Email within      criteria.                           
         their respective                                      
         textboxes and                                         
         click Register.                                       

  4      Within the        A message should appear             
         Registration page indicating Registration             
         enter a valid     is unsuccessful and                 
         username, Email,  indicating the required             
         and password      criteria.                           
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
  ---------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 6
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Registration page - Username 8 - character requirement.

  Subsystem: Registration page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description:

The following steps will cover Registration pages' username requirements
of a minimum of 8 characters.

Precondition:

-   The system is running, and the landing and sign-in pages are
    available.

-   User is logged out.

  ---------------------------------------------------------------------------
  Step   Action            Expected Result         Pass/Fail   Comment
  ------ ----------------- ----------------------- ----------- --------------
  1      As a signed-out   The Registration page               
         user navigate to  displays the following              
         the Registration  Text boxes and a                    
         page by clicking  Register button:                    
         the "Register for Username, Email,                    
         our site!" within Password, and Confirm               
         the landing page. Password.                           

  2      Within the        A message should appear             
         Registration page indicating Registration             
         enter a username  is unsuccessful, and                
         with less than 8  the Username must be at             
         characters, a     least 8 characters.                 
         valid Email,                                          
         password, and                                         
         confirm password                                      
         within their                                          
         respective                                            
         textboxes and                                         
         then click                                            
         Register.                                             
  ---------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 7
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Registration page - Username Spacing requirement

  Subsystem: Registration page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description:

The following steps will cover the Registration pages' spacing
requirements, where username cannot include any spaces, and leading and
trailing spaces will be trimmed.

Precondition:

-   The system is running, and the landing and sign-in pages are
    available.

-   User is logged out.

  -------------------------------------------------------------------------
  Step   Action           Expected Result         Pass/Fail   Comment
  ------ ---------------- ----------------------- ----------- -------------
  1      As a signed-out  The Registration page               
         user navigate to displays the following              
         the Registration Text boxes and a                    
         page by clicking Register button:                    
         the "Register    Username, Email,                    
         for our site!"   Password, and Confirm               
         within the       Password.                           
         landing page.                                        

  2      Within the       Valid Email, password,              
         registration     and confirm password                
         page enter a     should display within               
         valid Email,     their respective                    
         password, and    textboxes.                          
         confirm password                                     
         within their                                         
         respective                                           
         textboxes.                                           

  3      Within the       A message should appear             
         username field,  indicating Registration             
         enter a username is unsuccessful, and                
         that includes    that the Username                   
         spacing between  cannot include spaces.              
         characters.                                          

  4      Within the       A message should appear             
         username field,  indicating Registration             
         enter a username is successful, and the              
         that includes    system should now be on             
         spacing before   the landing page as                 
         and after.       logged in and                       
                          displaying username                 
                          trimmed of any spacing.             
  -------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 8
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Registration page - Password Character Requirements

  Subsystem: Registration page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description:

The following steps will cover Registration pages' password requirements
of a minimum of 8 characters, which must include 1 uppercase, one
lowercase, and at least one nonalphabetical character.

Precondition:

-   The system is running, and the landing and sign-in pages are
    available.

-   User is logged out.

  ---------------------------------------------------------------------------
  Step   Action            Expected Result         Pass/Fail   Comment
  ------ ----------------- ----------------------- ----------- --------------
  1      As a signed-out   The Registration page               
         user navigate to  displays the following              
         the Registration  Text boxes and a                    
         page by clicking  Register button:                    
         the "Register for Username, Email,                    
         our site!" within Password, and Confirm               
         the landing page. Password.                           

  2      Within the        A message should appear             
         Registration page indicating Registration             
         enter a password  is unsuccessful, and                
         and Confirm       the password must be at             
         Password with     least 8 characters.                 
         less than 8                                           
         characters, a                                         
         valid Username,                                       
         Email, within                                         
         their respective                                      
         textboxes and                                         
         then click                                            
         Register.                                             

  3      Repeat the        A message should appear             
         previous step,    indicating Registration             
         but this time     is unsuccessful, and                
         enter a password  the password requires               
         and confirmation  at least one uppercase              
         password that is  letter.                             
         8 characters with                                     
         no upper-case                                         
         letters.                                              

  4      Repeat the        A message should appear             
         previous step,    indicating Registration             
         but this time     is unsuccessful, and                
         enter a password  the password requires               
         and confirmation  at least one lowercase              
         password that is  letter.                             
         8 characters with                                     
         no lowercase                                          
         letters.                                              

  5      Repeat the        A message should appear             
         previous step,    indicating Registration             
         but this time     is unsuccessful, and                
         enter a password  the password does not               
         and confirmation  meet requirements.                  
         password that is                                      
         8 numerical                                           
         characters.                                           

  6      Repeat the        A message should appear             
         previous step,    indicating Registration             
         but this time     is unsuccessful, and                
         enter a password  the password does not               
         and confirmation  meet requirements.                  
         password that is                                      
         8 characters that                                     
         only includes                                         
         upper and                                             
         lowercase                                             
         letters.                                              
  ---------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 9
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Registration page - Password Spacing requirement

  Subsystem: Registration page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description:

The following steps will cover the Registration pages' spacing
requirements, where the password cannot include any spaces, and leading
and trailing spaces should be trimmed.

Precondition:

-   The system is running, and the landing and sign-in pages are
    available.

-   User is logged out.

  -------------------------------------------------------------------------
  Step   Action           Expected Result         Pass/Fail   Comment
  ------ ---------------- ----------------------- ----------- -------------
  1      As a signed-out  The Registration page               
         user navigate to displays the following              
         the Registration Text boxes and a                    
         page by clicking Register button:                    
         the "Register    Username, Email,                    
         for our site!"   Password, and Confirm               
         within the       Password.                           
         landing page.                                        

  2      Within the       Valid Username and                  
         registration     Email should display                
         page enter a     within their respective             
         valid Username   textboxes.                          
         and Email,                                           
         within their                                         
         respective                                           
         textboxes.                                           

  3      Within the       A message should appear             
         Password and     indicating Registration             
         Confirm password is unsuccessful, and                
         field, enter a   that the Password                   
         valid password   cannot include spaces.              
         that includes                                        
         spacing between                                      
         characters.                                          

  4      Within the       A message should appear             
         Password and     indicating Registration             
         Confirm password is successful, and the              
         field, enter a   system should now be in             
         valid password   the landing page as                 
         that includes    logged in and                       
         spacing before   displaying username                 
         and after.       trimmed of any spacing.             

  5      Navigate to the  The application should              
         log-in page and  accept username and                 
         log in with the  password without the                
         account created  password spacing and                
         in the previous  login.                              
         step using the                                       
         password used to                                     
         register without                                     
         spacing.                                             
  -------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 10
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Registration page - Positive

  Subsystem: Registration page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description:

The following steps will cover Registration requirements through
positive tests.

Precondition:

-   The system is running, and the landing and sign-in pages are
    available.

-   User is logged out.

-   User must know the requirements for the various registration
    textboxes.

  ---------------------------------------------------------------------------
  Step   Action            Expected Result         Pass/Fail   Comment
  ------ ----------------- ----------------------- ----------- --------------
  1      As a signed-out   The Registration page               
         user navigate to  displays the following              
         the Registration  Text boxes and a                    
         page by clicking  Register button:                    
         the "Register for Username, Email,                    
         our site!" within Password, and Confirm               
         the landing page. Password.                           

  2      Within the        The user should now                 
         Registration page have successfully                   
         enter a valid     registered and the                  
         Username, Email,  system navigates to the             
         password, and     landing page which                  
         confirm password  displays the username.              
         within their                                          
         respective                                            
         textboxes and                                         
         click Register.                                       
  ---------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 11
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Sign in - Negative

  Subsystem: Sign-in Page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

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
  1      Access the login  User is now viewing the             
         page as a         sign in page.                       
         signed-out user.                                      

  2      Type a username   The system displays the             
         into the first    entered username within             
         text box.         the.                                

  3      Enter the wrong   The form will display a             
         password.         masked password.                    

  4      Click the         The system displays an              
         login/Register    error message saying                
         button.           the username or                     
                           password was incorrect.             
  ---------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 12
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Sign in - Positive

  Subsystem: Sign-in Page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description:

The following steps covers positive scenarios within sign-in attempts
through the sign-in page.

Precondition:

-   The system displays the sign-in page.

-   The user has an existing account with the app.

-   The user remembers their username and password for their account.

  ---------------------------------------------------------------------------
  Step   Action            Expected Result         Pass/Fail   Comment
  ------ ----------------- ----------------------- ----------- --------------
  1      Access the login  User is now viewing the             
         page as a         sign in page.                       
         signed-out user.                                      

  2      Type a username   The system displays a               
         into the username message underneath the              
         or email textbox. first text box telling              
                           the user that they have             
                           entered a legitimate                
                           email address.                      

  3      Enter the         As the user types in                
         appropriate       their password, the                 
         password.         system will mask the                
                           password as it is being             
                           written.                            

  4      Click the         The system then brings              
         login/Register    the user to the landing             
         button.           page and displays                   
                           logged in features.                 
  ---------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Test Case ID: 13
  -----------------------------------------------------------------------
  System: 404 App

  Test Case Name: Data landing check

  Subsystem: Registration page

  Sprint number: 1

  Execution Date:

  Test Method: Manual - Functional Testing

  Executed By:
  -----------------------------------------------------------------------

Description:

This test is intended to verify data landing within the database when it
is created through the user interface.

Precondition:

-   The system is running, and the landing and the signup page are
    available.

-   User is not logged in.

-   Database tables are configured appropriately for the application.

  ---------------------------------------------------------------------------
  Step   Action            Expected Result         Pass/Fail   Comment
  ------ ----------------- ----------------------- ----------- --------------
  1      As a signed-out   The Registration page               
         user navigate to  displays the following              
         the Registration  Text boxes and a                    
         page by clicking  Register button:                    
         the "Register for Username, Email,                    
         our site!" within Password, and Confirm               
         the landing page. Password.                           

  2      Within the        The user should now                 
         Registration page have successfully                   
         enter a valid     registered and the                  
         Username, Email,  system navigates to the             
         password, and     landing page which                  
         confirm password  displays the username.              
         within their                                          
         respective                                            
         textboxes and                                         
         click Register.                                       

  3      Navigate to the   Query should return a               
         database tables   result for the newly                
         and run the       created username.                   
         appropriate query                                     
         to retrieve the                                       
         entered username.                                     
  ---------------------------------------------------------------------------
