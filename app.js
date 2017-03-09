;(function(){
  "use strict";
  var damnForm = document.getElementById('damn-calories');
  var fuckinResults = document.getElementById('results');
  // calorie count from Googling "calories in a thin mint"
  // possibly completely wrong I don't care
  var calPerServing = 161;
  var cookiezPer = 4;
  var mintCalz = calPerServing / cookiezPer;

  damnForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var cal = e.target.cal;
    var thinMintsss = cal.value / mintCalz;
    var plural;
    var msg;
    // nearest half
    thinMintsss = Math.round(thinMintsss * 2) / 2;
    plural = thinMintsss === 1 ? '' : 's'

    if (cal.value < mintCalz) {
      msg = 'Not even one. Get back to work.';
    } else if (cal.value > 2000) {
      msg = thinMintsss + ' cookies! Pretty sure you\'re lying tho.';
    } else {
      msg = thinMintsss + '! ' + thinMintsss + ' damn cookie' + plural + '!';
    }
    fuckinResults.textContent = msg
    cal.value = '';
  })
})();

