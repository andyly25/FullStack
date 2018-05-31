# Technical Questions
- What is the purpose of the doctype command? (Lesson 1.1)
  - this doctype command usually written as `<!DOCTYPE html>` 
  - tells browser to parse the page as HTML5
- What is a `<head>` element? (Lesson 1.1)
  - contains the metadata about the document and this is what other search engine uses to help optimize search results
  - Here is where we also include the title of the website
  - And also include external filess such as CSS for the styling
- What is semantic HTML, and why is it important? (Lesson 1.2)
  - When choosing HTML element to wrap content, choose the one that most clearly align with the meaning of content
  - preferable since it helps browsers, web-crawlers, screen readers, and project collab understand better
  - know when to use elements like header, nav, main, section, footer etc as appropriate
- What is the difference between classes and IDs in HTML and CSS? (Lesson 1.3)
  - classes is like a category (e.g. dog) that contains similarities that is shared among those with the class
  - ID is like a person's name, there can only be one Dog of name "Billy Bob" with the same characteristic and quirks in the world
- What does * { box-sizing: border-box; } do? What are its advantages? (Lesson 1.3)
  - If we consider the box model where most elements are rectangular boxes
    - sizes determined by width, height, padding, border, and margin
    - normally even if you set a width for the content, it adds up all measurements from the above
    - with box content, respects the widths we set
- How is an inline element different from a block level element? (Lesson 1.4)
  - block element takes up a whole line of space for itself
  - inline is side by side with whatever content it's next to.
    - make sure to specify a width, otherwise width will be determined by its content and might act similar to block and cause other element to wrap to other line
- What's an example of a situation where you would use a `<form>` element? (Lesson 1.5)
  - A sign in page is my first thought
  - there would be a form where you enter in user input for username and password
    - it would have required
  - then there would be some submit button so that the form can take the information and take appropriate actions
- What are media queries? (Lesson 1.6)
  - CSS tools that apply blocks of CSS rules for certain viewports
  - we use this generally for mobile-first principle where you make for smallest viewport then build up
- Why are grids valuable? (Lesson 1.6)
  - There is a standard of a 960px twelve column grid system
  - Grids help keeps content neat and orderly within an enclosed space.
  - You define rules that are consistent across all content within the grid system
  - with box0szing: box-content, the content within will never exceed the specified width
  - one method is using float: left with percentage based widths for columns
- What is a function? (Lesson 2.2)
  - functions are a repeatable process or behavior
  - once you create one, you can keep reusing anywhere else by calling it and passing in args if needed
  - a function within an object is called a method and it works very similarly. 
- What is DOM manipulation? (Lesson 3.1)
  - Document object model: browser's representation of current state of a page
  - think of it as a tree that can be traversed or manipulated
  - you can traverse through the tree to pick on specific elements (parents, siblings, children etc)
  - after targeting specific elements with jQuery using $() we can manipulate to change it's text content, delete element and more.
- What is an event listener? (Lesson 3.1)
  - consists of two parts
    - specify what events to listen for
    - provide callback function that runs when event occurs
  - generally used for form submission to validate user input and displaying useful error messages
  - listen for click events and then launching the next event/action
- What is spaghetti code? How can you avoid it, and why should you? (Lesson 3.2)
  - it is unstructured and difficult to maintain code
  - a clear example of one is when you only have one file with a bunch of repeating code
  - solved by turning those repeated code into functions making code look neater
  - and if you need fix one thing and it's repeated everywhere, you'll have to manually fix in all locations
    - when you can just fix in one function
- data types: String, Number, Boolean, Null, Undefined, Object
- define `this`
  - is used for self-reference
  - example of its usage is within an object make an example
- let vs var and let vs const
  - let allows define variable limited in scope to the block its in
  - var defines a variable globally, which can lead to side effects appearing with changed values
  - const you cannot change the values it stores
- loop through object
  - ```javascript
        const myObj = {
        fruit: "apple",
        drink: "water",
        dessert: "cookie"
      };
      for (let key in myObj) {
        console.log(`${key}: ${myObj[key]}`);
      }
    ```
