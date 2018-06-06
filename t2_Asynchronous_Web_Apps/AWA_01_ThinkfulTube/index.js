// This will be our Youtube endpoint
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
// Youtube video link
const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v=';
// I'm pretty sure we shouldn't have our API key for public view
const YOUTUBE_API_KEY = 'AIzaSyBPxyjm1RYL3F53jHjkIGgbOoDl_noYb04';

// need pass following in params object
// part: 'snippet'
// key: (your API key as a string)
// q: (your search term as a string)
function getDataFromApi (searchTerm, callback) {
  const query = {
    part: 'snippet',
    key: YOUTUBE_API_KEY,
    q: searchTerm
  };
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

// This will create the html for the title link and thumbnail image
function renderResult (result) {
  return `
    <div>
      <h2>
        <a class="js-result-name" href="${YOUTUBE_VIDEO_URL}${result.id.videoId}" target="_blank">${result.snippet.title}</a>
      </h2>
      <a href="${YOUTUBE_VIDEO_URL}${result.id.videoId}" target="_blank">
        <img src="${result.snippet.thumbnails.medium.url}">
      </a>
    </div>
  `;
}

// This will apply renderResult to all of the many items within data
function displayYoutubeSeachData (data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}

// Watch for the user to press the submit button, and then display search results
function watchSubmit () {
  $('.js-search-form').submit((event) => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // Clear out the input
    queryTarget.val('');
    getDataFromApi(query, displayYoutubeSeachData);
  });
}

$(watchSubmit);
