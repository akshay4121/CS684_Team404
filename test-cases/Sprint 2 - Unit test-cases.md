  <details> <summary> Test Cases S2</summary>
  <p>
    
| Test Case ID# | Test case description | Test steps | Expected result | Prerequisites | Executed by | Pass/Fail |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Default landing page should display the new article. | Run your project and it should land you on articles page without login | News article fetch from the API from general category. | https://newsapi.org/ and valid url|  |  |
| 2 |  Setting page should be displayed upon event occuring. | Click on the setting button/link | Should be able to connect user with the setting page. | Valid Url and browser |  |  |
| 3 |  If no category is selected no functionality should be occuring for "ok or cancel" | Not selecting any category and click on "Ok or Cancel" button/link. | With no selection user is not enabled with "Ok /Cancel" buttons | Valid Url for setting pages|  |  |    
| 4 |  Functionality of Ok and Cancel button/link after they have selected category. | Select atleast one category or multiple and then press "Ok or Cancel" button/link. | After selecting category user should be able to click on "ok or cancel" button/link. | Valid Url for setting pages|  |  |   
| 5 | Unit test on test.js file | Run you unit test using JEST | Use some mocked data for unit testing. | JEST framework|  |  |
  </p> 
  </details>
