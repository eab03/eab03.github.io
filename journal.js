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

// var button1 = document.querySelector('#buttonjan'); // Grab the button
// // So that we can add an event listener for when we click it
// button1.addEventListener('click', function() {
//   // Which first uses `getBoundingClientRect` (https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) to figure out where the top of the target is
// var targetTop = document.querySelector('#january').getBoundingClientRect().top;
//   // Define an offset (how much room we want to leave above our target when we scroll)
//   var offset = 110;
//   // And then use `scrollTo` (https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll) to actually scroll the page, but scroll and leave `offset` room above our target
//   window.scrollTo(0, targetTop - offset);
// });

// var button2 = document.querySelector('#buttonfeb'); // Grab the button
// // So that we can add an event listener for when we click it
// button2.addEventListener('click', function() {
//   // Which first uses `getBoundingClientRect` (https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) to figure out where the top of the target is
//   var targetTop = document.querySelector('#february').getBoundingClientRect().top;
//   // Define an offset (how much room we want to leave above our target when we scroll)
//   var offset = 110;
//   // And then use `scrollTo` (https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll) to actually scroll the page, but scroll and leave `offset` room above our target
//   window.scrollTo(0, targetTop - offset);
// });

// var button3 = document.querySelector('#buttonmarch'); // Grab the button
// // So that we can add an event listener for when we click it
// button3.addEventListener('click', function() {
//   // Which first uses `getBoundingClientRect` (https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) to figure out where the top of the target is
//   var targetTop = document.querySelector('#march').getBoundingClientRect().top;
//   // Define an offset (how much room we want to leave above our target when we scroll)
//   var offset = 110;
//   // And then use `scrollTo` (https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll) to actually scroll the page, but scroll and leave `offset` room above our target
//   window.scrollTo(0, targetTop - offset);
// });










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