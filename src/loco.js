import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true, 
    multiplier: 0.7,
    reloadOnContextChange: true,
    smartphone: {
        smooth: false
    },
    tablet: {
        smooth: true
    }
});

new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))

function changeColor(color) {
    document.body.style.backgroundColor = color;
}
scroll.on('call', color => {
    changeColor(color)
});

export { scroll };