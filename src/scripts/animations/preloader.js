import { gsap } from "gsap";

export const loadingAnimation = (callback) => {
    const $loader = document.querySelector("[data-animation='preloader']");
    const $innerSpan = $loader.querySelector('span > span');

    const loadingTimeline = gsap.timeline({
        onComplete: callback
    });

    return loadingTimeline
    .to($innerSpan, {
        y: 0,
        rotation: 0,
        duration: .5,
        delay: .25,
        ease: "power4.inOut"
    })
    .to($innerSpan, {
        yPercent: -100,
        rotation: -6,
        duration: .25,
        delay: .25,
    })
    .to($loader, {
        scaleX: 0,
        transformOrigin: 'right center',
        ease: "power4.inOut"
    });
}

export default loadingAnimation;
