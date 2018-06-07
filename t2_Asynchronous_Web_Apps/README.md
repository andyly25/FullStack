# Asynchronous Web Apps
- learn how to work with APIs so that you can integrate data from other services into your own
- learn how to create accessible applications
- Build an API Hack capstone project, in which you create an app that integrates with one or more third-party APIs, in order to create a unique service. 
  - This project will be the first piece of your professional portfolio.
- Complete a mock interview that covers Git, the command line, AJAX, and APIs.

## APIs and Async with jQuery
- **API** is Application Programming Interface
  - specification allowing two systems to communicate
  - e.g. jQuery: 
    - API for DOM manipulation and traversal
    - API for making AJAX requests
- Explaining what AJAX stands for
  - Asynchronous JavaScript and XML
  - making one or more calls to a server after a page initially loaded
    - e.g. Twitter feed for infinite scroll, makes new calls to server as we scroll and grabs additional data
  - usage of `.getJSON`
    - ```javascript
        function getDataFromApi(searchTerm, callback) {
          const query = {
            q: `${searchTerm} in:name`,
            per_page: 5
          }
          $.getJSON(GITHUB_SEARCH_URL, query, callback);
        }
      ```
  - usage of `.ajax` method
    - ```javascript
        function getDataFromApi(searchTerm, callback) {
          const settings = {
            url: GITHUB_SEARCH_URL,
            data: {
              q: `${searchTerm} in:name`,
              per_page: 5
            },
            dataType: 'json',
            type: 'GET',
            success: callback
          };
          $.ajax(settings);
        }
      ```
- Web APIs provides **endpoints**
  - URLs that we can make requests to in order to write or retrieve data.
  - `api.github.com/search/repositories` is the endpoint
    - `?q=thinkful%20in:name&page=1&per_page=5` is a *query string*
    - `&` separates name and value pairs
    - `q` param is for indicating the phrase we want to search by
    - e.g.: https://api.github.com/search/repositories?q=apple
    - data is provided in **JSON** (JavaScript object Notation) format
      - format used to serialize JS
- Using jQuery to get data from third party APIs