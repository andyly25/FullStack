// Prevents creating global variables
'use strict';

/*
 * Render Quiz
 */
function renderQuiz () {
  $('.question').html(generateStartPage());
  $('.current_score').hide();
  $('.quiz_options').hide();
  $('.quiz_answer').hide();
  $('footer').hide();
}

/*
 * We create the starting page where users can press a button to begin the quiz
 */
function generateStartPage () {
  return `
    <legend>Dare to test your random gaming knowledge? If so, Begin the trial!</legend>
    <img src="${IMAGES[0].imgSrc}" alt="${IMAGES[0].imgAlt}" />
    <button type="button" name="start" class="startQuizBtn">
      <span>Begin Trial</span>
    </button>`;
}

/*
 * This is the function to create the quiz questions and options
 */
function generateQuestions () {
  return `
    <img src="${STORE[questionNum].imgSrc}" alt="${STORE[questionNum].imgAlt}">
    <legend>${STORE[questionNum].question}</legend>
    <button type="button" role="radio" class="option" value="${STORE[questionNum].answer1}">
      <span>${STORE[questionNum].answer1}</span>
    </button>
    <button type="button" role="radio" class="option" value="${STORE[questionNum].answer2}">
      <span>${STORE[questionNum].answer2}</span>
    </button>
    <button type="button" role="radio" class="option" value="${STORE[questionNum].answer3}">
      <span>${STORE[questionNum].answer3}</span>
    </button>
    <button type="button" role="radio" class="option" value="${STORE[questionNum].answer4}">
      <span>${STORE[questionNum].answer4}</span>
    </button>`;
}

/*
 * We render the questions after clicking the start quiz button
 */
function startQuiz () {
  $('.question').on('click', '.startQuizBtn', function (event) {
    $('.current_score').show();
    $('.question').hide();
    $('.quiz_options').show();
    $('.quiz_options').html(generateQuestions());
    $('footer').show();

  });
}

// a function to hide and show elements after picking an answer
function showHideResult () {
  $('.quiz_options').hide();
  $('.quiz_answer').show();
}

// Update the score
function updateScore () {
  $('.current_score').text(`Correct: ${score}, Incorrect: ${mistake}`);
}

// function to tell you what question you're on
function updateIndex () {
  $('.question_index').text(`${questionNum + 1} of ${total}`);
}

// This updates progress bar
function updateFooter () {
  $('.progress_bar_color').css('width', `${(((questionNum + 1) / total) * 100)}%`);
}

// render option picked results
function generateResult () {
  return `
  <legend><span class="quiz_answer"></span>The right answer is: "${STORE[questionNum].solution}"</legend>
  <img src="${IMAGES[error].imgSrc}" alt="${IMAGES[error].imgAlt}" />
  <button type="button" class="nextQuestion" name="next button" value="Next Question">
    <span>Next Question</span>
  </button>`;
}

// This will update our view based on correct or incorrect answer
// Includes the scoring
function answerPicked () {
  $('.quiz_options').on('click', '.option', function (event) {
    // update progress Bar after you picked an option
    updateFooter();
    showHideResult();
    const choice = $(this).val();
    if (choice === STORE[questionNum].solution) {
      score += 1;
      error = 1;
      updateScore();
      $('.results').parent().addClass('correct');
    } else {
      $('.results').parent().addClass('incorrect');
      mistake += 1;
      error = 2;
      updateScore();
    }
    $('.quiz_answer').html(generateResult());
  });
}

// advance to next question, first check if you're on last question first
function nextQuestion () {
  $('.quiz_answer').on('click', '.nextQuestion', function (event) {
    $('.quiz_answer').hide();
    if (questionNum === STORE.length - 1) {
      $('.question').show();
      $('.question').html(generateEndPage());
      resetQuiz();
    } else {
      $('.quiz_options').show();
      questionNum += 1;
      // update index everytime we move to new question
      updateIndex();
      $('.quiz_options').html(generateQuestions());
    }
  });
}

// Generates the last page showing total score and if you want to reset the quiz
function generateEndPage () {
  return `
    <legend>Congratulations! You've finished the quiz!</legend>
    <img src="${IMAGES[IMAGES.length - 1].imgSrc}" alt="${IMAGES[IMAGES.length - 1].imgAlt}" />
    <h2>Do you like your score of: ${score} out of ${total}?</h2>
    <button type="button" name="restart" class="restartQuizBtn">
      <span>New Game ++</span>
    </button>`;
}

// Just in case, initialize our variables to 0
function initValues () {
  questionNum = 0;
  score = 0;
  error = 0;
  mistake = 0;
  $('.progress_bar_color').css('width', `${0}%`);
}

// Resets the quiz again to the start page
function resetQuiz () {
  $('.question').on('click', '.restartQuizBtn', function (event) {
    initValues();
    updateScore();
    updateIndex();
    renderQuiz();
  });
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the quiz app and then activating individual functions.
function handleQuiz () {
  renderQuiz();
  generateStartPage();
  startQuiz();
  updateScore();
  updateIndex();
  answerPicked();
  nextQuestion();
}

$(handleQuiz);
