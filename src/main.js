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


const mobile_menu = document.querySelector('.mobile-menu');
const btn = mobile_menu.querySelector('.nav-tgl');
btn.addEventListener('click', evt => {
	mobile_menu.classList.toggle('active');
})

window.onload = function() {
  document.getElementById('navbar').className += " fade-in-active"
  document.getElementById('start').className += " fade-in-active"
}

// TODO add function for class main-logo to go to home page