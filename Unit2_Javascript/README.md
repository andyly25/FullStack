# Programming in Javascript
- **NOTE ONCE AGAIN: src and links references generic files, so change appropiately if you use**
- **program** set of instrcutions for computers to carry out
- **programming** process of translating a problem in plain lang. into a set of instructions for solving it
  - then expressing algorithm in terms that your computer can understand

## Intro to JS
- Explaining what it means when we say that individual browsers implement the JavaScript specification
  - available in all modern browsers
  - JS in browsers in 2 categories
    1. modeling and manipulating data and processes (e.g. var, const, strings, nums, logic, funct)
    2. interacting with browser elements (e.g. DOM(document object model) API )
- Linking to external JavaScript files in your HTML
  - `<script src="app.js"></script>` usually placed at the end of body
    - order matters, browsers reads in HTML from top to bottom, left to right
- Creating variables with let
  - **variable** is a name that is attached to a value
  - gives a way to manage *state* in a program
    - state has to do with persisting values over time
  - `let` and `var` declares a variable, `const` for constant, 
    - constant cannot be reassigned a new value
    - let and const from ES6, new preferred way to write JS
  - not all of ES6 supported on browsers so we need to transpile ES6 into ES5 to run all browsers
  - avoid global variables!!!
    - if you just do plain `foo = 'bar';` by deafult it sets it as global variable
    - to avoid making this mistake can use `'use strict;'` at the top of JS file
- Creating constants with const
  - `const` pretty simple yeah?
- Recognizing JavaScript's 6 data types when you see them in code you're reading. At this point, you don't need to understand each data type in depth, but you should at least know all 6 (or is it 7? :) ) names.
  - **data type** is a kind of value that variables can have in a given programming lang.
  - String, Number, Boolean, Null, Undefined, Object
    - if not sure what data type something is run `typeof "Three"`
  - **string** represent text. Any character from Unicode char. encoding scheme can be used
  - **numbers** both integers and floating values and decimals
  - **null** indicates a var has no value
  - **booleans** true or false
  - **undefined** special value browser assigns to vars when it first creates in memory
  - **functions** is mini program that you define once in you code and invoke elsewhere
  - **objects** complex data type combine primitive data types
    - allow have vars that don't point to a single value, but to a collection of values
    - ```javascript
        const person = {
          name: 'Jane Doe',
          greet: function() {
            console.log('Hello world');
          }
        };
        console.log(person.name); // => Jane Doe
        person.greet(); // => Hello world
      ```
  - **coercion** if you use `+` operators with two values of different data types, JS will coerce one of the vars data type to the other.
- Using the JavaScript console to execute, debug, and inspect code
