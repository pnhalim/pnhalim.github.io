import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true, 
    multiplier: 0.5,
    reloadOnContextChange: true,
    smartphone: {
        smooth: false
    },
    tablet: {
        smooth: true
    }
});

function scrollToEducation() {
    const n = document.getElementById("education");
    scroll.scrollTo(n);
    scroll.update();
}
document.getElementById("arrow-in-circle").addEventListener("click", scrollToEducation)


new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))

