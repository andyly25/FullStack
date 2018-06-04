











# Discussion 
- Document flow: pos absolute etc..

## Revisions
- float-grid is more base level, so we put before, remember order matters!
  - recall you can use CSS tricks. can capitalize beginning of 
- note to self, remember to place spaces!!!
  - eslint eslint eslint ... remember to check with eslint me!
- hex shortcuts
- arrays drill https://gist.github.com/thinkfulgist/14ab1b97500518c298832860375f91fc/revisions:
  - `return [...array][0]; // ;) also, bonus points: how would you foul proof this?`
  - `return array[2]; // bonus points: how would you foul proof this?`
    - try and catch if the array actually contains enough elements?
  - list.push(item); // bonus points: how would you foul proof this?
  - function runTests() { // ooo, let's also rebel here, please add to notes to teardown this function together
- avoid i++ and ideally using `i = i + 1` to avoid confusion (eslint still complains about this)
- if-else vs switch? https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/ch04s02.html
  - array lookup seems to be the clear winner at the end of article

- use `throw` often for debugging
  - ```javascript
      // Bob's implementation of Andy's library
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
- JS the good parts
- practice layouts more
