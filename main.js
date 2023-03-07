const hi = document.getElementById("start-hi-svg");

const mq = matchMedia( '( min-width: 700px )' );
const updateViewBox = () => {
  if (mq.matches) {
    hi.setAttribute( 'viewBox', "300 0 1200 400" );
  } else {
    hi.setAttribute( 'viewBox', "400 0 400 400" );
  }
}
hi.addEventListener( 'SVGLoad', updateViewBox );
mq.addEventListener( 'change', updateViewBox );
updateViewBox()

