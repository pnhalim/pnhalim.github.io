const hi = document.getElementById("hi");

const mq = matchMedia( '( min-width: 700px )' );
const updateViewBox = () => {
  if (mq.matches) {
    hi.setAttribute( 'viewBox', "200 0 1600 400" );
  } else {
    hi.setAttribute( 'viewBox', "400 0 800 400" );
  }
}
hi.addEventListener( 'SVGLoad', updateViewBox );
mq.addEventListener( 'change', updateViewBox );
updateViewBox()

