window.onload = function() {
    document.getElementById('start').className += " fade-in-active"
    document.getElementById('navbar').className += " fade-in-active"
    document.getElementById('mobile-navbar').className += " fade-in-active"
}

// hi
window.addEventListener("DOMContentLoaded", (event) => {
  const hi = document.getElementById("start-hi-svg");
  const mq = matchMedia( '( min-width: 800px )' );
  const updateViewBox = () => {
    if (mq.matches) {
      hi.setAttribute( 'viewBox', "370 -30 1100 400" );
    } else {
      hi.setAttribute( 'viewBox', "400 0 400 300" );
    }
  }
  hi.addEventListener( 'SVGLoad', updateViewBox );
  mq.addEventListener( 'change', updateViewBox );
  updateViewBox()
});

var path = document.querySelector('.draw-svg-path');
var length = path.getTotalLength();
path.style.transition = path.style.WebkitTransition = 'none';
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
path.getBoundingClientRect();
path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 3s linear';
path.style.strokeDashoffset = '0';
