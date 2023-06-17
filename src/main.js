// header - footer
const mobile_menu = document.querySelector('.mobile-menu');
const btn = mobile_menu.querySelector('.nav-tgl');
btn.addEventListener('click', evt => {
	mobile_menu.classList.toggle('active');
})