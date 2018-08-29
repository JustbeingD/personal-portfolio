  // document.querySelector('.drawls').style.display = 'none';
  // document.querySelector('#webDev .el').style.display = 'none';
  // document.querySelector('#hrHead .my-1').style.display = 'none';
  // document.querySelector('.spin').classList.add('spinner-3');

  // // Mimic server request
  // setTimeout(() => {
  //   document.querySelector('.spin').classList.remove('spinner-3');
  //   document.querySelector('.drawls').style.display = 'block';
  //   document.querySelector('#hrHead .my-1').style.display = 'block';
  //   document.querySelector('#webDev .el').style.display = 'block';
  // }, 2000);

var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 6000,
  translateY: -25,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false,
  complete: function(anim) {
  	var d = document.querySelectorAll('.lines');
  	var m;
  	for (m = 0; m < d.length; m++){
  	d[m].setAttribute("fill", "red");
  };
  }
});


var el = document.querySelector('#webDev .el');

var webDev = anime({
  targets: el,
  translateY: -215,
  duration: 7000,
  easing: 'easeInQuad'
});

var el = document.querySelector('#hrHead .my-1');

var hrHead = anime({
  targets: el,
  translateY: -215,
  duration: 6500,
  easing: 'easeInQuad'
});

var el = document.querySelector('#icons .fa-twitter');

  var icons = anime({
    targets: el,
    translateX: -215,
    duration: 6500,
    easing: 'easeInQuad'
  });

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top 
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});