Team 404:  Sprint 1 Test Results

Ahsan Hasnath, Cristofer Carcamo, Joshua Steinerman, Zal Patel, Akshay
Patel

CS-684: Quality Assurance

Overall Test Results:

Summary: 

  Sprint 1 of Project 404 was conducted during the dates of 2/20/2023
through 3/06/2023 where various test activities were developed and
executed. Beside Unit Testing, the QA team developed a REST API testing
suite utilizing Postman, along with Test cases for Functional testing.
Once the application was completed, testing was executed by multiple
testers to cover all newly implemented features through API and
Functional testing. Failed test cases were rerun after defect fixes to
verify changes through additional iterations of testing. All
requirements and test cases were thoroughly tested and passed in the
final iteration. Note: within test case 7 requirements, the team decided
it is best security practice to have users land on the sign-in page
instead of the landing page after a successful registration. 

Sprint 1 Overall Test Execution Results:

  -------------------------------------------------------------------------------------
  Test Type             \# of     Executed   Passed   Failed   Executed % Pass % Fail %
                        Scripts                                                  
  --------------------- --------- ---------- -------- -------- ---------- ------ ------
  API Testing           5         5          5        0        100        100    0

  Functional Testing -  13        13         8        5        100        61.5   38.5
  Iteration 1                                                                    

  Functional Testing -  13        13         12       1        100        92     8
  Iteration 2                                                                    

  Functional Testing -  5         5          4        1        100        60     20
  Iteration 3                                                                    

  Functional Testing -  12        12         12       0        100        100    0
  Iteration 4                                                                    

  Total:                48        48         41       7        100        83     17
  -------------------------------------------------------------------------------------

API Testing: 

The tables below summarize the results of API Testing.

  ---------------------------------------------------------------------------
  Test Case ID:     Date Tested:   Tester Name:    Pass/Fail:   Comments:
  ----------------- -------------- --------------- ------------ -------------
  Test Case ID: 14  3/01/2023      Akshay Patel    Pass         

  Test Case ID: 15  3/01/2023      Akshay Patel    Pass         

  Test Case ID: 16  3/01/2023      Akshay Patel    Pass         

  Test Case ID: 17  3/01/2023      Akshay Patel    Pass         

  Test Case ID: 18  3/01/2023      Akshay Patel    Pass         
  ---------------------------------------------------------------------------

Functional Testing: 

The tables below summarize the results of Functional Testing.

Iteration 1: 

  ----------------------------------------------------------------------------------
  Test     Date       Tester      Pass/Fail:   Comments:
  Case ID: Tested:    Name:                    
  -------- ---------- ----------- ------------ -------------------------------------
  Test     3/3/2023   Ahsan       Pass         
  Case ID:            Hasnath                  
  1                                            

  Test     3/3/2023   Ahsan       Pass         
  Case ID:            Hasnath                  
  2                                            

  Test     3/3/2023   Ahsan       Pass         
  Case ID:            Hasnath                  
  3                                            

  Test     3/3/2023   Ahsan       Pass         
  Case ID:            Hasnath                  
  4                                            

  Test     3/3/2023   Ahsan       Pass         
  Case ID:            Hasnath                  
  5                                            

  Test     3/3/2023   Ahsan       Pass         
  Case ID:            Hasnath                  
  6                                            

  Test     3/3/2023   Ahsan       Fail         Received a message "Username cannot
  Case ID:            Hasnath                  contain spaces". Before and after
  7                                            username spacing is not trimmed.

  Test     3/3/2023   Ahsan       Fail         Users are able to register with less
  Case ID:            Hasnath                  than 8 character password. Users are
  8                                            able to login with password and
                                               confirmation password that includes
                                               only upper and lowercase letters.

  Test     3/3/2023   Ahsan       Fail         Users are able to register with a
  Case ID:            Hasnath                  password that includes spacing
  9                                            between characters. Also, a Password
                                               requires spacing within the
                                               register\'s password. Before and
                                               after spacing was not trimmed. 

  Test     3/3/2023   Ahsan       Pass         
  Case ID:            Hasnath                  
  10                                           

  Test     3/3/2023   Ahsan       Fail         The Username textbox is not
  Case ID:            Hasnath                  available, we currently have an email
  11                                           textbox. 

  Test     3/3/2023   Ahsan       Fail         The Username textbox is not
  Case ID:            Hasnath                  available, we currently have an email
  12                                           textbox. 

  Test     3/4/2023   Cristofer   Pass         
  Case ID:            Carcamo                  
  13                                           
  ----------------------------------------------------------------------------------

Iteration 2

  -------------------------------------------------------------------------------
  Test   Date       Tester   Pass/Fail:   Comments:
  Case   Tested:    Name:                 
  ID:                                     
  ------ ---------- -------- ------------ ---------------------------------------
  Test   3/5/2023   Akshay   Pass         
  Case              Patel                 
  ID: 1                                   

  Test   3/5/2023   Akshay   Pass         
  Case              Patel                 
  ID: 2                                   

  Test   3/5/2023   Akshay   Pass         
  Case              Patel                 
  ID: 3                                   

  Test   3/5/2023   Akshay   Pass         
  Case              Patel                 
  ID: 4                                   

  Test   3/5/2023   Akshay   Pass         
  Case              Patel                 
  ID: 5                                   

  Test   3/5/2023   Akshay   Pass         
  Case              Patel                 
  ID: 6                                   

  Test   3/5/2023   Akshay   Fail       Goes to the sign-in page     
  Case              Patel               rather than the landing  
  ID: 7                                  page as you're already logged in. 

  Test   3/5/2023   Akshay   Pass         
  Case              Patel                 
  ID: 8                                   
                                          
                                          

  Test   3/5/2023   Akshay   Pass         
  Case              Patel                 
  ID: 9                                   

  Test   3/5/2023   Akshay   Pass         
  Case              Patel                 
  ID: 10                                  

  Test   3/5/2023   Akshay   Pass         
  Case              Patel                 
  ID: 11                                  

  Test   3/5/2023   Akshay   Pass         
  Case              Patel                 
  ID: 12                                  
  -------------------------------------------------------------------------------

Iteration 3: 

+------+--------+--------+-------+------------------------------------+
| Test | Date   | Tester | Pass/ | Comments:                          |
| Case | T      | Name:  | Fail: |                                    |
| ID:  | ested: |        |       |                                    |
+======+========+========+=======+====================================+
| Test | 3/     | Ahsan  | Fail  | Navigates to sign-in page instead  |
| Case | 5/2023 | H      |       | of the landing page as already     |
| ID:  |        | asnath |       | signed in                          |
| 7    |        |        |       |                                    |
+------+--------+--------+-------+------------------------------------+
| Test | 3/     | Ahsan  | Pass  | Defect fixed.                      |
| Case | 5/2023 | H      |       |                                    |
| ID:  |        | asnath |       |                                    |
| 8    |        |        |       |                                    |
+------+--------+--------+-------+------------------------------------+
| Test | 3/     | Ahsan  | Pass  | User cannot register with          |
| Case | 5/2023 | H      |       | passwords consisting of spacing    |
| ID:  |        | asnath |       | before and after. A message        |
| 9    |        |        |       | indicates "Passwords do not        |
|      |        |        |       | match"                             |
|      |        |        |       |                                    |
|      |        |        |       | Fixed, retested, and passed on.    |
|      |        |        |       | 3/5/23.                            |
+------+--------+--------+-------+------------------------------------+
| Test | 3/     | Ahsan  | Pass  |                                    |
| Case | 5/2023 | H      |       |                                    |
| ID:  |        | asnath |       |                                    |
| 11   |        |        |       |                                    |
+------+--------+--------+-------+------------------------------------+
| Test | 3/     | Ahsan  | Pass  |                                    |
| Case | 5/2023 | H      |       |                                    |
| ID:  |        | asnath |       |                                    |
| 12   |        |        |       |                                    |
+------+--------+--------+-------+------------------------------------+

Iteration 4

+------+--------+-------+-------+-------------------------------------+
| Test | Date   | T     | Pass/ | Comments:                           |
| Case | T      | ester | Fail: |                                     |
| ID:  | ested: | Name: |       |                                     |
+======+========+=======+=======+=====================================+
| Test | 3/     | Zal   | Pass  |                                     |
| Case | 5/2023 | Patel |       |                                     |
| ID:  |        |       |       |                                     |
| 1    |        |       |       |                                     |
+------+--------+-------+-------+-------------------------------------+
| Test | 3/     | Zal   | Pass  |                                     |
| Case | 5/2023 | Patel |       |                                     |
| ID:  |        |       |       |                                     |
| 2    |        |       |       |                                     |
+------+--------+-------+-------+-------------------------------------+
| Test | 3/     | Zal   | Pass  |                                     |
| Case | 5/2023 | Patel |       |                                     |
| ID:  |        |       |       |                                     |
| 3    |        |       |       |                                     |
+------+--------+-------+-------+-------------------------------------+
| Test | 3/     | Zal   | Pass  |                                     |
| Case | 5/2023 | Patel |       |                                     |
| ID:  |        |       |       |                                     |
| 4    |        |       |       |                                     |
+------+--------+-------+-------+-------------------------------------+
| Test | 3/     | Zal   | Pass  |                                     |
| Case | 5/2023 | Patel |       |                                     |
| ID:  |        |       |       |                                     |
| 5    |        |       |       |                                     |
+------+--------+-------+-------+-------------------------------------+
| Test | 3/     | Zal   | Pass  |                                     |
| Case | 5/2023 | Patel |       |                                     |
| ID:  |        |       |       |                                     |
| 6    |        |       |       |                                     |
+------+--------+-------+-------+-------------------------------------+
| Test | 3/     | Zal   | Pass  | Project team decided it is best     |
| Case | 5/2023 | Patel |       | practice to route users to sign in  |
| ID:  |        |       |       | page after a successful             |
| 7    |        |       |       | registration.                       |
+------+--------+-------+-------+-------------------------------------+
| Test | 3/     | Zal   | Pass  |                                     |
| Case | 5/2023 | Patel |       |                                     |
| ID:  |        |       |       |                                     |
| 8    |        |       |       |                                     |
+------+--------+-------+-------+-------------------------------------+
| Test | 3/     | Zal   | Pass  | User cannot register with passwords |
| Case | 5/2023 | Patel |       | consisting of spacing before and    |
| ID:  |        |       |       | after. A message indicates          |
| 9    |        |       |       | "Passwords do not match"            |
|      |        |       |       |                                     |
|      |        |       |       | Fixed, retested, and passed on.     |
|      |        |       |       | 3/5/23.                             |
+------+--------+-------+-------+-------------------------------------+
| Test | 3/     | Zal   | Pass  |                                     |
| Case | 5/2023 | Patel |       |                                     |
| ID:  |        |       |       |                                     |
| 10   |        |       |       |                                     |
+------+--------+-------+-------+-------------------------------------+
| Test | 3/     | Zal   | Pass  |                                     |
| Case | 5/2023 | Patel |       |                                     |
| ID:  |        |       |       |                                     |
| 11   |        |       |       |                                     |
+------+--------+-------+-------+-------------------------------------+
| Test | 3/     | Zal   | Pass  |                                     |
| Case | 5/2023 | Patel |       |                                     |
| ID:  |        |       |       |                                     |
| 12   |        |       |       |                                     |
+------+--------+-------+-------+-------------------------------------+
