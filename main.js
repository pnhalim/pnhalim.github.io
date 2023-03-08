const hi = document.getElementById("start-hi-svg");

const mq = matchMedia( '( min-width: 800px )' );
const updateViewBox = () => {
  if (mq.matches) {
    hi.setAttribute( 'viewBox', "300 0 1200 400" );
  } else {
    hi.setAttribute( 'viewBox', "400 0 400 300" );
  }
}
hi.addEventListener( 'SVGLoad', updateViewBox );
mq.addEventListener( 'change', updateViewBox );
updateViewBox()

function openhamburgermenu() {
  var x = document.getElementById("navbar-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}