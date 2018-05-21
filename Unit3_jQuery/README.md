# Interactive web pages with jQuery
- learn how to create *event listeners* and alter web pages
  - they listen for particular events and run *callback function* each time event occurs

## Event-driven DOM manipulation
- Explaining what the DOM is
  - **DOM** (document object model), browser's representation of current state of the HTML content of page
  - event driven DOM manipulation: write instructions tell comp to listen for specific kinds of events to happen and do somethin in response
- Using jQuery to traverse and manipulate the DOM
  - `let paragraphElements = $('p');` would give access to all paragraph elements in DOM
  - traversing (finding particular elements in the DOM)
    - two comon is .find() and .parent()
      - find is used to traverse elements contained in jQuery selection using filter condition
      - parent is used to target the first parent element of a jQuery object that passes a filter cond. 
  - manipulating (update elements)
- Setting up event listeners for common user behaviors like clicking and submitting forms
  - common things to consider:
    - user submit form, display error messages
    - user types search term and display some text ahead
    - listens for user click and then launch animation
  - has 2 parts
    1. specify what events to listen for
    2. provide callback function that runs whenever event occurs
  - **DOM event objects** : every piece of info you want to know and how performed an action is contained within event object
    - the callback fnc. in event listeners always get access to object representing the triggering event
    - code tells browser to wait until page loads, then listens to button or key press. Then runs callback function
      - browser auto generates some data about click event. this represent the `event` seen in function(event)
      - we used `event.which` for mousedown event and `key` for keydown events
      - ```javascript
            $(function() {
              $('button').mousedown(event =>
                $('.output').text(`Button clicked: ${event.which}`)
              );
              $('input').keydown(event =>
                $('.output').text(`Key pressed: ${event.key}`)
              );
            });
        ```
      - `event.currentTarget` contains info about which DOM element the user has interacted with.
        - used like this `$(event.currentTarget).text()` we have to turn into jQuery object so library code can add the extra methods (e.g. .text())
          - since jQuery selectors has different methods and data than normal elements
        - without the `event.stopPropagation();` , it will run through all of the parents and giving out those results. 
          - in the case of clicking on li, will give inner text of ul and .foo and div.foo
        - ```javascript
            $(function() {
              $(".foo, p, ul, li").click(function(event) {
                event.stopPropagation();
                $("h2").text(`event.currentTarget's text is: ${$(event.currentTarget).text()}`);
              });
            });
          ```
    - `event.preventDefault();` prevents browser default actions, in our case used for form submission behavior
    - `this` allows properties and methods on an object to refer to other properties and methods defined on same object
      - within jQuery, `this` refers to event.currentTarget.
      - this only refers to the element within the callback function. 
      - this will not behave as expected if used ES6 arrow functions. 
- Explaining and using event delegation
  - allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.
  - by default, event listeners are deaf to events related to elements created after initial binding.
  - USE `.on()` if you need to use jQuery to watch for events on dynamically generated elements
- a11y, don't forget to make interactive for screen readers
  - in case of images and lightbulbs, users should be able to tab through lightbulbs and turn on/off with space
  - `aria-pressed="false"` make sure they are announced as toggle buttons
    - ```html
          <input type="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/lightbulb.svg" alt="Lightbulb" role="button" aria-pressed="false" class="lightbulb js-lightbulb">
      ```

### In your own words
- What is DOM?
DOM stands for Document Object Model and can be viewed as a tree of objects. 
This is a W3C standard on how to access the document and the main functionality
that can be accomplished is how to get, change, add or delete HTML elements. 
We can use libraries such as jQuery to let our webpage listen for specific events
and then do something in response. 
- work more on this explanation next time

### still to do
- look up JSONlint.com for another validator and JSOn in general
- anonymous self invoking function 
  - ```javascript
        var array = [];
        // Andy's lib
        (
          (array) => {
              if(array.length === 0) {
                 throw('hey man, you gotta give me some stuff')
              }
           }
        )(array);
    ```