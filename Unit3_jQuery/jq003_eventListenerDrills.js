// https://repl.it/@andyjly/Andy-Cat-carousel-jQuery
// https://repl.it/@andyjly/Andy-return-of-fizz-buzz // just a heads up it's not producing the right output when entering 5 ("buzz")

function changeImage () {
  const thumbnails = $('.thumbnail');
  thumbnails.on('click', function (event) {
    const imgSrc = $(this).find('img').attr('src');
    const imgAlt = $(this).find('img').attr('alt');
    // https://stackoverflow.com/questions/16422675/is-it-possible-to-set-multiple-data-attributes-using-the-jquery-attr-function
    // why is the class called hero?
    // it's industry lingo for the primary image, I like to think of it as the one taking all the attention
    $('.hero img').attr({
      'src' : imgSrc,
      'alt' : imgAlt
    }); // Nice find! Way more readible than the solutions. The solution's uses what's called chaining, where each function
        // return this. This is similar behavior to that firstChild.nextSibling.nextSibling behavior I showed you earlier,
        // it's just that each object's *property*, e.g., firstChild.nextSibling, has an object set as its value representing the html element in the DOM.
  });
}

$(changeImage);



// your code here
$(function () {
  $("#number-chooser").submit(function (event) {
    // prevents normal form behavior
    event.preventDefault();
    // when I type in multiple numbers, the previous results still remained
    $(".js-results").empty();
    // grab user number input
    const userNumber = parseInt($("input:first").val()); // This works, just note this operates under the assumption that 
                                                         // this form will never be updated to take in new inputs. So keep
                                                         // that in mind before you use it on your own projects.
    if(userNumber <= 0){ // nice user friendly/form sanitation touch!
                         // can you think of a none JS way of accomplishing this? Hint: it was in one of the lessons back
                         // in unit 1. Think about it first, then check this out: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
      $(".js-results").append($(`<div"><span>Please input a positive number greater than 0, not ${userNumber}</span></div>`));
    }

    // I'll grab my fizzbuzz from previous assignment and modify it // Woot! Reuse.
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
        // Whoops! too much copy and pasting, forgot to change content within span
        fizzbuzzSequence.push(
          $('<div class="fizz-buzz-item buzz"> <span>buzz</span> </div>')
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