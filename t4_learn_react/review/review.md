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
  - 