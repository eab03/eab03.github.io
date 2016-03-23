var nav = document.getElementById('main_nav');
var navOriginalDistanceFromTop = nav.offsetTop;

window.addEventListener('scroll', function() {

  var amountScrolled = document.body.scrollTop;

  if (amountScrolled <= navOriginalDistanceFromTop && nav.classList.contains('sticky')) {
    nav.classList.toggle('sticky')
  } else if (amountScrolled >= navOriginalDistanceFromTop && !nav.classList.contains('sticky')) {
    nav.classList.toggle('sticky')
  }
});





// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

//http://www.the-art-of-web.com/javascript/remove-anchor-links/
// document.addEventListener("DOMContentLoaded", function() {
//   var links = document.getElementsByTagName("A");
//   for(var i=0; i < links.length; i++) {
//     if(!links[i].hash) continue;
//     if(links[i].origin + links[i].pathname != self.location.href) continue;
//     (function(anchorPoint) {
//       links[i].addEventListener("click", function(e) {
//         anchorPoint.scrollIntoView(true);
//         e.preventDefault();
//       }, false);
//     })(document.getElementById(links[i].hash.replace(/#/, "")));
//   }
// }, false);






//Old Code: 

//var main_nav = document.getElementById('main_nav');

//window.onscroll = function() {
//make_navbar_sticky();

//var navPosition = main_nav.getBoundingClientRect().top;
//var amountScrolled = document.body.scrollTop;
//console.log(amountScrolled);
//console.log(navPosition);

//if ((amountScrolled >= navPosition) || (navPosition == 0)) {
//main_nav.classList.toggle('sticky');
//} else {
//main_nav.classList.remove('sticky');
//}
//};

// notes to self: look up scrollTop and offsetTop
// make nav bar sticky by adding class of sticky