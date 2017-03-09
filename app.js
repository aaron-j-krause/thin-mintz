;(function(){
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
    // nearest half
    thinMintsss = Math.round(thinMintsss * 2) / 2;

    fuckinResults.textContent = thinMintsss + '! ' + thinMintsss + ' damn cookies!';
    cal.value = '';
  })
})();

