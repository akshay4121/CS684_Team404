  <details> <summary> Test Cases S2</summary>
  <p>
    
    
| Test Case ID# | Test case description | Test steps | Expected result | Prerequisites | Executed by | Pass/Fail |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Default landing page should display the news article from the General Category. | Run your project and it should land you on articles page without login | News article fetch from the API from general category. | https://newsapi.org/ and valid URL|  |  |
| 2 | Categories preferences should be displayed in the Dashboard when a users with preferences is signed in. | Run the project with a signed in users which has a preference category Technology| Should display news articles are from the technology. | https://newsapi.org/ and valid URL |  |  |
| 3 |  Sign out should return the default General category on news articles to be displayed| Run the project and sign in with a user that has a preference category that does not include general. And then sign out from that user. | News from the general category should be displayed. | Valid URL for setting pages|  |  |    
| 4 | Updating preferences should allow users to change their preference of news articles being displayed. | Run the project and sign into a user with the category preference and then update it to another preference. | After selecting the new category user should be seeing the news articles from the new category. | Valid URL for setting pages| |  |   
| 5 | Updating preferences should not show the old category | Run the project and sign into a user with the category preference and then update it to another preference. | After selecting the new category user should no longer be seeing the news articles from the old category. | Valid URL for setting pages|  |  


  </p> 
  </details>
