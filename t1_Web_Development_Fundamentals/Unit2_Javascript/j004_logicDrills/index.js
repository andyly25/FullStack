function doTrafficLights() {
  const activeLight = getActiveLight();
  // your code will replace this call
  // to `console.log()`
  if(activeLight === "red"){
    turnRed();
  }else if(activeLight ==="yellow"){
    turnYellow();
  }else{
    turnGreen();
  }
}

// this function randomly returns red, yellow, or green
// and is called by doTrafficLights.
// don't modify it!
function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
  turnOffLights();
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  turnOffLights();
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}


function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(function() {
  turnOffLights();
  handleClicks();
});


// for the error alert drill
function main() {
  try{
    doAllTheThings();
  } catch(e){
    console.log(e);
    reportError();
  }
}

function doAllTheThings() {
  throw {
    message: "Everything's ruined",
    name: "FatalException",
    toString: function() {
      return `${this.name}: ${this.message}`;
    }
  }
}

function reportError(e) {
  $('.js-error-report').text(`Uh oh, something went wrong! Here's what we know: ${e.message}`);
}

$(main);