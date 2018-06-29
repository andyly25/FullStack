// for now making gender
let gender = 'n/a';

function getDataFromApi(planet) {
  // your code here
  const planetBaseURL = `https://swapi.co/api/planets/?search=${planet}`
  $.getJSON(planetBaseURL, (data) => {
    const arr = data.results[0].residents;
    const promises = arr.map(getPeopleData);
    Promise.all(promises)
      .then((residents) => {
        displaySearchData(residents);
      });
  });
}

function getPeopleData(person) {
  console.log(person);
  console.log('resident data', person);
  return $.getJSON(person);
}

function displaySearchData(residents) {
  // your code here
  console.log('data', residents);
  console.log(gender);
  $('.js-search-results').html(residents.map((resident) => {
    console.log('gender is:', gender);
    console.log('something wrong with resident?', resident);
    if (gender === resident.gender) {
      console.log(resident.gender);
      return `
      <p>${resident.name}</p>
      `
    }
  })).prop('hidden', false);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let planetQueryTarget = $(event.currentTarget).find('.js-query-planet');
    const planet = planetQueryTarget.val().toLowerCase();
    console.log(planet);
    // clear out the input
    planetQueryTarget.val('');
    let genderQueryTarget = $(event.currentTarget).find('.js-query-gender');
    gender = genderQueryTarget.val().toLowerCase();
    console.log(gender);
    // clear out the input
    genderQueryTarget.val('');
    getDataFromApi(planet);
  });
}

$(watchSubmit);