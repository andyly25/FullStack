# Review Questions:
1. What are smoke tests?
  - "Build Verification Testing" or "sanity testing", comprises of non-exhaustive set of tests that aim at ensuring most important functions work
  - determines if build is stable enough to proceed with further testing. 
  - covers most of major functions of software, but none in depth.
2. WHen would you choose to use shallow and full-DOM rendering?
  - full-DOM: `mount(<Component />)` is ideal where you have components that may interact with DOM apis or may req. full lifecycles to fully test component
  - shallow: `shallow(<Component />)` constrain to testing a component as a unit and that tests aren't indirectly asserting on behavior of child components
  - https://stackoverflow.com/questions/38710309/when-should-you-use-render-and-shallow-in-enzyme-react-tests
3. Imagine you could only test one of your actions, or your reducers. Which would you choose and why?
  - reducers specify how app state changes in response to actions sent to the store.
  - actions only describe what happened, but don't describe how the app state changes
  - so by testing the reducer you can find out what is wrong with the state and if there was a problem with your actions. 
  - https://redux.js.org/basics/reducers
4. What does the exact prop of the Route component do?
  - this is used if you have multiple paths with similar names.
  - for example: /user/create and /user/signin and /user. We want to go to /user/create, but without exact, React does partial matching so it will just return /user instead. 
  - exact params disables partial matching for a route and makes sure to return the exact route. 
  - https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path
5. Explain this syntax in the context of an async action: `const actionName = () => dispatch => {`
  - Since this is an asyn action, instead of returning an obj. from action creator, it returns a callback function
  - when action dispatched, it will be called by Redux Thunk passing in dispatch method
  - then it does its magic of whatever is inside the function (fetching and etc)
  - remember to dispatch the action from the component `this.props.dispatch(actionName())` 
6. What conditions should you check to make sure that a user is providing valid registration information? Which of these can be checked on the frontend?
  - Some conditions is if usernames are unique. You can also use some form of captcha to confirm if human. And frontend things to check for if password is of certain length, capitalized, special characters. E-mails are in the correct format, phone numbers right length and so forth. 
7. Which header do you need to set to provide a JWT token as credentials to an endpoint? What should the header value look like
  - We need to pass in the bearer token into the Authorization header
    - `headers: { Authorization: Bearer ${authToken} }` //don't forget backticks inside
8. What is the purpose of refreshing a JWT and when do we do it?
  - Tokens expires after a certain time so there would need to be some request to refresh the token, otherwise the app which requires permission will stop working
9. Complete the test in src/components/button.test.js to assert that the onClick callback is fired when the button is clicked. [link](https://github.com/Thinkful-Ed/react-button-click-test-challenge)
10. Write the fetchRepos async action in src/actions.js, which should make a GET request to https://api.github.com/users/dhh/repos, following the Request/Success/Error pattern. [link](https://github.com/Thinkful-Ed/react-github-fetch-challenge)
11. Update this component so the form fields are stored in Redux using Redux Form. [link](https://github.com/Thinkful-Ed/react-redux-form-convert-challenge/)
