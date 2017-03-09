;(function(){
  "use strict";
  var form = document.getElementById('calories');
  var results = document.getElementById('results');
  // calorie count from Googling "calories in a thin mint"
  var calPerServing = 161;
  var cookiesPer = 4;
  var mintCals = calPerServing / cookiesPer;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var cal = e.target.cal;
    var thinMints = cal.value / mintCals;
    var plural;
    var msg;
    // nearest half
    thinMints = Math.round(thinMints * 2) / 2;
    plural = thinMints === 1 ? '' : 's'

    if (cal.value < mintCals) {
      msg = 'Not even one. Get back to work.';
    } else if (cal.value > 2000) {
      msg = thinMints + ' cookies! I\'m pretty sure you\'re lying though.';
    } else {
      msg = 'You can eat ' + thinMints + ' cookie' + plural + ' and break even!';
    }
    results.textContent = msg
    cal.value = '';
  })
})();

