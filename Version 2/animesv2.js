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
  	d[m].setAttribute("fill", "#ff0033");
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

var el = document.querySelector('.fa-twitter');

  var icons = anime({
    targets: el,
    translateX: -215,
    duration: 6500,
    easing: 'easeInQuad'
  });

var el = document.querySelector(".head-me");

  var head = anime({
    targets: el,
    translateY: -215,
    duration: 6500,
    easing: 'easeInQuad'
  });

  