// Prevents creating global variables
'use strict';

// Here's our variables that will be constantly altered
let questionNum = 0;
let score = 0;
let mistake = 0;
let status = '';
// grabbing total length of questions array
const total = STORE.length;
// the below will be used to toggle up and down with arrow key
const elements = document.getElementsByClassName('arrow-togglable');
let currentIndex = 0;

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

function getResultText (status) {
  let resultsNotification;
  if (status === 'CORRECT') {
    resultsNotification = RESULTS_NOTIFICATION[status];
  } else {
    resultsNotification = RESULTS_NOTIFICATION[status];
  }
  return resultsNotification;
}

/*
 * We create the starting page where users can press a button to begin the quiz
 */
function generateStartPage () {
  $('.question').html(
      `
      <legend>Dare to test your random gaming knowledge? If so, Begin the trial!</legend>
      <img src="${IMAGES[0].imgSrc}" alt="${IMAGES[0].imgAlt}" />
      <button type="button" name="start" class="startQuizBtn">
        <span>Begin Trial</span>
      </button>`
    );
  $('.current_score').hide();
  $('footer').hide();
}

/*
 * This is the function to create the quiz questions and options
 */
function generateQuestions () {
  return `
    <img src="${STORE[questionNum].imgSrc}" alt="${STORE[questionNum].imgAlt}">
    <legend>${STORE[questionNum].question}</legend>
    <input type="button" role="radio" class="option arrow-togglable" value="${STORE[questionNum].answer1}">
    <input type="button" role="radio" class="option arrow-togglable" value="${STORE[questionNum].answer2}">
    <input type="button" role="radio" class="option arrow-togglable" value="${STORE[questionNum].answer3}">
    <input type="button" role="radio" class="option arrow-togglable" value="${STORE[questionNum].answer4}">`;
}

// render option picked results
function generateResult () {
  const resultsNotification = getResultText(status);
  const message = resultsNotification.message;
  const imgSrc = resultsNotification.imgSrc;
  const imgAlt = resultsNotification.imgAlt;
  // getResultText();
  return `
  <legend><span class="question"></span>${message} "${STORE[questionNum].solution}"</legend>
  <img src="${imgSrc}" alt="${imgAlt}" />
  <button type="button" class="nextQuestion" name="next button" value="Next Question">
    <span>Next Question</span>
  </button>`;
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

/*
 * We render the questions after clicking the start quiz button
 */
function handleStartQuiz () {
  $('.question').on('click', '.startQuizBtn', function (event) {
    $('.current_score').show();
    $('.question').html(generateQuestions());
    $('footer').show();

  });
}

// This will update our view based on correct or incorrect answer
// Includes the scoring
function handleAnswerPicked () {
  $('.question').on('click', '.option', function (event) {
    // update progress Bar after you picked an option
    updateFooter();
    const choice = $(this).val();
    if (choice === STORE[questionNum].solution) {
      score += 1;
      status = 'CORRECT';
      updateScore();
    } else {
      mistake += 1;
      status = 'INCORRECT';
      updateScore();
    }
    $('.question').html(generateResult());
  });
}

// advance to next question, first check if you're on last question first
function handleNextQuestion () {
  $('.question').on('click', '.nextQuestion', function (event) {
    if (questionNum === STORE.length - 1) {
      $('.question').html(generateEndPage());
    } else {
      questionNum += 1;
      currentIndex = 0;
      // update index everytime we move to new question
      updateIndex();
      $('.question').html(generateQuestions());
    }
  });
}

// Resets the quiz again to the start page
function handleResetQuiz () {
  $('.question').on('click', '.restartQuizBtn', function (event) {
    questionNum = 0;
    score = 0;
    mistake = 0;
    // a hard reset directly modifying css code since updateFooter does not 
    // ever account for value 0 when it's called, so it would start with (1/total)*100
    $('.progress_bar_color').css('width', `${0}%`);
    updateScore();
    updateIndex();
    generateStartPage();
  });
}

// since I wanted arrow keys to work I decided to do this
// https://stackoverflow.com/questions/38850185/using-arrows-instead-of-mouse-in-html-form-to-navigate-inputs
// by default, my code doesn't allow arrow toggling to work, tabs still works in previous way
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38:
      currentIndex = (currentIndex === 0) ? elements.length - 1 : --currentIndex;
      elements[currentIndex].focus();
      break;
    case 40:
      currentIndex = ((currentIndex + 1) === elements.length) ? 0 : ++currentIndex;
      elements[currentIndex].focus();
      break;
  }
};

// this function will be our callback when the page loads. it's responsible for
// initially rendering the quiz app and then activating individual functions.
function initQuiz () {
  generateStartPage();
  handleStartQuiz();
  updateScore();
  updateIndex();
  handleAnswerPicked();
  handleNextQuestion();
  handleResetQuiz();
}

$(initQuiz);
