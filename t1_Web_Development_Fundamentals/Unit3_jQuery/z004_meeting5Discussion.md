






# Questions
- when writing comments is it better to have `//` or `/* */` for large comments?
- Finally, note that in the context of callback functions, `this` will not behave as expected if you use ES6 arrow functions. If you need this to refer to the event object, stick with the function keyword.
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  - ctrl + F "No separate this"
- break down test function: arrays drill https://gist.github.com/thinkfulgist/14ab1b97500518c298832860375f91fc/revisions
- `aria-pressed="false"` https://inclusive-components.design/toggle-button/
  - ```javascript
      const toggle = document.querySelector('[aria-pressed]');
      toggle.addEventListener('click', (e) => {  
        let pressed = e.target.getAttribute('aria-pressed') === 'true';
        e.target.setAttribute('aria-pressed', String(!pressed));
      });
    ```
- Defining DOM
- What is coding like in the workforce? Pacing?


- Afterthoughts: ask about cool trick to make site better