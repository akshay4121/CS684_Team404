  ## Test Case
  <details><summary> Unit Test Cases S2</summary>
  <p>
    
    
| Test Case ID# | Test case description | Test steps | Expected result | Prerequisites | Executed by | Tested by | Pass/Fail | Path for Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | User must signup with valid username and password. | Fillup the details for signup and next page will be login page. | Successfully signup and landing to login page. | https://newsapi.org/ and valid URL| Cristofer | Zal | Fail | https://github.com/CC862/CS684_Team404/blob/8b61aa665f0a8ad1e1e0a2c86c00a62f1b81b466/public/Images/signup_test.png |
| 2 | User must signin with valid username and password. | Fillup the details for signin and next page will be home page. | Successfully signin and landing to home page. | https://newsapi.org/ and valid URL| Cristofer | Zal | Pass | https://github.com/CC862/CS684_Team404/blob/8b61aa665f0a8ad1e1e0a2c86c00a62f1b81b466/public/Images/signin_test.png |
| 3 | Default landing page should display the news article from the General Category. | Run your project and it should land you on articles page without login | News article fetch from the API from general category. | https://newsapi.org/ and valid URL| Joshua | Zal | Pass | https://github.com/CC862/CS684_Team404/blob/8b61aa665f0a8ad1e1e0a2c86c00a62f1b81b466/public/Images/app_test.png  |
| 4 | Categories preferences should be displayed in the Dashboard when a users with preferences is signed in. | Run the project with a signed in users which has a preference category Technology| Should display news articles are from the technology. | https://newsapi.org/ and valid URL | Joshua | Zal | Pass | https://github.com/CC862/CS684_Team404/blob/8b61aa665f0a8ad1e1e0a2c86c00a62f1b81b466/public/Images/dashboard_test.png |
| 5 |  Signin and click and display general category news. | Run the project and sign in with a user shpowing news of general category. | News from the general category should be displayed. | Valid URL for setting pages| Joshua | Zal | Pass | https://github.com/CC862/CS684_Team404/blob/8b61aa665f0a8ad1e1e0a2c86c00a62f1b81b466/public/Images/general_test.png |    
| 6 | Updating preferences should allow users to change their preference of news articles being displayed. | Run the project and sign into a user with the category preference and then update it to another preference. | After selecting the new category user should be seeing the news articles from the new category. | Valid URL for setting pages| Joshua | Zal | Pass | https://github.com/CC862/CS684_Team404/blob/8b61aa665f0a8ad1e1e0a2c86c00a62f1b81b466/public/Images/setting_test.png |   
| 7 | Updating preferences should not show the old category. | Run the project and sign into a user with the category preference and then update it to another preference. | After selecting the new category user should no longer be seeing the news articles from the old category. | Valid URL for setting pages| Joshua | Zal | Pass | https://github.com/CC862/CS684_Team404/blob/8b61aa665f0a8ad1e1e0a2c86c00a62f1b81b466/public/Images/removeoldsetting_test.png | 
| 8 | User changes the category and only that category should display. | Run the project and sign into a user change category and display particular news of category. | After selecting the new category user should see the news articles that selected. | Valid URL for setting pages| Joshua | Zal | Pass | https://github.com/CC862/CS684_Team404/blob/8b61aa665f0a8ad1e1e0a2c86c00a62f1b81b466/public/Images/setting_test.png |
| 9 |  Sign out should return the default General category on news articles to be displayed| Run the project and sign in with a user that has a preference category that does not include general. And then sign out from that user. | News from the general category should be displayed. | Valid URL for setting pages| Joshua | Zal | Pass | https://github.com/CC862/CS684_Team404/blob/8b61aa665f0a8ad1e1e0a2c86c00a62f1b81b466/public/Images/signout_test.png | 
| 10 | User must signup with valid username and password. | Fillup the details for signup and next page will be login page. | Successfully signup and landing to login page. | https://newsapi.org/ and valid URL| Cristofer | Zal | Pass | https://github.com/CC862/CS684_Team404/blob/8b61aa665f0a8ad1e1e0a2c86c00a62f1b81b466/public/Images/signup_test.png |
| 11 | If no category is selected no functionality should be occuring for "ok or cancel" | Not selecting any category and click on "ok or cancel" button/link.. | With no selection user is not enabled with "Ok /Cancel" buttons | Valid Url for setting pages| Cristofer | Zal | Pass |  |
  </p> 
  </details>
  
  
<details><summary> Intergration Test Cases Manually Executed S3</summary>
  <p>
    
| Test Case ID# | Test case description | Test steps | Test Data | Expected result | Prerequisites | Executed by | Pass/Fail |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12 | Checking the login and homepage module.  | Enter the valid username and valid password  | Username:                  Password: | User will directed signed in page   |  Valid url and browser | Joshua   | Pass |
| 13 | Signup page and sign in page module.  | Enter the username and correct form of password.  | Username:                  Password:   | New user is registered and should be able to login with new credentials  | Valid url and browser  | Joshua   | Pass |
| 14 | Setting and database integration  |  Select the few category from setting |  Check business,technology & sports category |  Database will reflect the changes in user preferences   | Login credentials | Joshua   | Pass |
| 15 | Setting and home page integration  | Select the user prefrence category from setting | Check technology & sports category  | Home page will reflect the changes based on user preferences   | Login credentials  | Joshua  | Pass  |
| 16 | Pagination with home and other categories in descending order with most recent first  | Select the user prefrence category ,paginate through home page with user selected category.   | Select the user prefrence category from setting modal  | Paginate on home page in descending order with most recent news  | Login credential  | Joshua  | Pass  |
  </p> 
  </details>
