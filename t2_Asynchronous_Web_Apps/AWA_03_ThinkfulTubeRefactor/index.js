// This will be our Youtube endpoint
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
// Youtube video link
const YOUTUBE_VIDEO_URL = 'https://www.youtube.com';
// I'm pretty sure we shouldn't have our API key for public view
const YOUTUBE_API_KEY = 'AIzaSyBPxyjm1RYL3F53jHjkIGgbOoDl_noYb04';

const nextState = {
  nextPageToken: null,
  searchTerm: null
};

// need pass following in params object
// part: 'snippet'
// key: (your API key as a string)
// q: (your search term as a string)
// sample: https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBPxyjm1RYL3F53jHjkIGgbOoDl_noYb04&q=mhw
function getDataFromApi (searchTerm, callback) {
  const query = {
    part: 'snippet',
    key: YOUTUBE_API_KEY,
    q: searchTerm,
    pageToken: nextState.nextPageToken
  };
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

// This will create the html for the title link and thumbnail image
function renderResult (result) {
  return `
    <div class="search-content">
      <h2>
        <a class="js-result-name" href="${YOUTUBE_VIDEO_URL}/watch?v=${result.id.videoId}" target="_blank">
          ${result.snippet.title}
        </a>
      </h2>
      <a href="${YOUTUBE_VIDEO_URL}/watch?v=${result.id.videoId}" target="_blank">
        <img class="thumbnailImg" src="${result.snippet.thumbnails.medium.url}" alt="${result.snippet.title}">
      </a>
      <p class="video-description">${result.snippet.description}</p>
      <a href="${YOUTUBE_VIDEO_URL}/channel/${result.snippet.channelId}" class="channel-link" target="_blank">
        More From the Channel
      </a>
    </div>
  `;
}

// This will apply renderResult to all of the many items within data
function displayYoutubeSeachData (data) {
  // store the element we'll be appending to
  const outputElem = $('.js-search-results');
  // grabs the nextPageToken to access next page
  nextState.nextPageToken = data.nextPageToken;
  const results = data.items.map((item, index) => renderResult(item));

  // Checks to see if we have anything in our search results
  if (results.length === 0) {
    // if no search result do some error display
    showErr();
    throw new Error('Please enter a valid search term!');
  } else {
    // this removes the hidden and renders the results
    outputElem
      .prop('hidden', false)
      .html(results);
    // If we received results of some length that means there should be a next page
    // so we make next page button, otherwise remove it
    results.length ? $('.next-page').removeClass('hidden') : $('next-page').addClass('hidden');
  }
}

// event listener for next page button
function nextPage () {
  $('.next-page').on('click', (event) => {
    event.preventDefault();
    getDataFromApi(nextState.searchTerm, displayYoutubeSeachData);
    // Scrolling back to top
    // https://stackoverflow.com/questions/19311301/how-to-scroll-back-to-the-top-of-page-on-button-click
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
}

// Watch for the user to press the submit button, and then display search results
function watchSubmit () {
  $('.js-search-form').submit((event) => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // Stores current query to be used for next page
    nextState.searchTerm = query;
    // Clear out the input
    queryTarget.val('');
    getDataFromApi(query, displayYoutubeSeachData);
  });
}

function showErr () {
  const outputElem = $('.js-search-results');
  const errMsg = (
    `<p>We couldn't find your search term!`
  );
  outputElem
    .prop('hidden', false)
    .html(errMsg);
}

$(() => {
  watchSubmit();
  nextPage();
});
