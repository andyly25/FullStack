// Prevents creating global variables
'use strict';

/*
 * Render Quiz
 */
function renderQuiz () {
  $('.question').html(generateStartPage());
  $('.current_score').hide();
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
    <input type="button" role="radio" class="option arrow-togglable" value="${STORE[questionNum].answer1}">
    <input type="button" role="radio" class="option arrow-togglable" value="${STORE[questionNum].answer2}">
    <input type="button" role="radio" class="option arrow-togglable" value="${STORE[questionNum].answer3}">
    <input type="button" role="radio" class="option arrow-togglable" value="${STORE[questionNum].answer4}">`;
}

// since I wanted arrow keys to work I decided to do this
// https://stackoverflow.com/questions/38850185/using-arrows-instead-of-mouse-in-html-form-to-navigate-inputs
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

/*
 * We render the questions after clicking the start quiz button
 */
function startQuiz () {
  $('.question').on('click', '.startQuizBtn', function (event) {
    $('.current_score').show();
    $('.question').html(generateQuestions());
    $('footer').show();

  });
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

function resultText () {
  if (error === 1) {
    resultsNotification = 'You got it right with:';
  } else {
    resultsNotification = 'The right answer is:';
  }
}

// render option picked results
function generateResult () {
  resultText();
  return `
  <legend><span class="question"></span>${resultsNotification} "${STORE[questionNum].solution}"</legend>
  <img src="${IMAGES[error].imgSrc}" alt="${IMAGES[error].imgAlt}" />
  <button type="button" class="nextQuestion" name="next button" value="Next Question">
    <span>Next Question</span>
  </button>`;
}

// This will update our view based on correct or incorrect answer
// Includes the scoring
function answerPicked () {
  $('.question').on('click', '.option', function (event) {
    // update progress Bar after you picked an option
    updateFooter();
    const choice = $(this).val();
    if (choice === STORE[questionNum].solution) {
      score += 1;
      error = 1; // In datastore, 1 is the correct choice image
      updateScore();
    } else {
      mistake += 1;
      error = 2; // In datastore, 2 is the wrong choice image
      updateScore();
    }
    $('.question').html(generateResult());
  });
}

// advance to next question, first check if you're on last question first
function nextQuestion () {
  $('.question').on('click', '.nextQuestion', function (event) {
    if (questionNum === STORE.length - 1) {
      $('.question').html(generateEndPage());
      resetQuiz();
    } else {
      questionNum += 1;
      currentIndex = 0;
      // update index everytime we move to new question
      updateIndex();
      $('.question').html(generateQuestions());
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
