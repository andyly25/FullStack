// your code here
$(function () {
  $("#number-chooser").submit(function (event) {
    // prevents normal form behavior
    event.preventDefault();
    // when I type in multiple numbers, the previous results still remained
    $(".js-results").empty();
    // grab user number input
    const userNumber = parseInt($("input:first").val());
    if(userNumber <= 0){
      $(".js-results").append($(`<div"><span>Please input a positive number greater than 0, not ${userNumber}</span></div>`));
    }

    // I'll grab my fizzbuzz from previous assignment and modify it
    // https://repl.it/@andyjly/Andy-fizzbuzz-drill-js
    const fizzbuzzSequence = [];
    for(let i = 1; i <= userNumber; i += 1) {
      if ((i % 5 === 0) && (i % 3 === 0)) {
        // if its content is the word "fizzbuzz" it should get the class "fizzbuzz" applied
        fizzbuzzSequence.push(
          $('<div class="fizz-buzz-item fizzbuzz"> <span>fizzbuzz</span> </div>')
          );
      } else if (i % 3 === 0) {
        // If the element's content is the word "buzz" it should get the class ".fizz" applied
        fizzbuzzSequence.push(
          $('<div class="fizz-buzz-item fizz"> <span>fizz</span> </div>')
          );
      } else if (i % 5 === 0) {
        // If the element's content is the word "buzz" it should get the class ".buzz" applied
        fizzbuzzSequence.push(
          $('<div class="fizz-buzz-item buzz"> <span>fizzbuzz</span> </div>')
          );
      } else {
        fizzbuzzSequence.push(
          // after wondering why it didn't work, I figured out it was supposed to be backticks
          $(`<div class="fizz-buzz-item"><span>${i}</span></div>`)
          );
      }
    }

    // alert(userNumber);
    $(".js-results").append(fizzbuzzSequence);
  });
});