import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true, 
    multiplier: 0.5,
    reloadOnContextChange: true, 
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});

setTimeout(function(){ scroll.update(); console.log('update scroller') }, 5000);