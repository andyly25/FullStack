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

## Functions, Strings, and Numbers
- Explaining what a function is
  - describes repeatable process or behavior
    - define behavior once and call whenever you need to run set of instructions
    - a well named function can make clear its purpose and has a single responsibility
      - designed to do one thing and to do it well
    - also *determinate* given same inputs on separate uses, results should be the same. 
- Declaring and invoking functions in JavaScript
  - `function` keyword signifies a func. is about to be defined. 
    - nexts comes its name, then followed by *call signature* `()` 
      - call signature refers to arguments or parameters
    - `{}` is where the main block of the function goes
  - defining and invoking two different things.
    - define is where the code doesn't automatically run, calling runs it
- functions declarations vs function expressions
  - normal way above is function declaration `function someFunc(){console.log("Apples");}`
  - function expression is containing a function in a var or const.
    - `const myFunct = function(arg1, arg2){console.log("apples");}`
  - function expressions the order you define matters, while function declarations you can call no matter where you place
    - browsers initially read/parse JS code. and then finals all vars and sets aside space in mem as undefined
      - then reads through code top to bottom, executing comands, aka **hoisting**
- ES6 introduce default function params `function tenPower(power=3){return 10 ** power;}` which gives us 1000 if we don't provide an argument. 
- ES6 introduces **arrow functions** : `const add = (num1, num2) => num1 + num2;`
  - same as `const addAlt = function(num1, num2){return num1+num2;}`
  - can use arrow func. takes no params `const alertMe = () => alert("you've been alerted);`
    - with params within () you place your params, don't need a ()
- Using built-in string methods like .length.
  - .charAt(), .slice(), .split(), .toUpperCase(), .replace and many more
- can use `′to escape quotation mark delimeter let doh = "Homer says \"DOH!\" "`
  - `\t` for tabs `\n` for newlines
  - if string too long, you can use \ to separate newlines, if you use + you need close quotes
- ES6 introduces template strings. a way refer to vars and execute JS inside string using backticks
  - const someString = `foo is set to ${someVar}. Let's say hello: ${helloWorld()}`;
- Manipulating strings
- Doing basic arithmetic in JavaScript