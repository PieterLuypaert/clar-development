import { gsap } from "gsap";

export const fadeInUp = () => {
    const $elements = document.querySelectorAll("[data-animation='fade-inup']");
    
    $elements.forEach($element => {
        gsap.from($element, {
            opacity: 0,
            y: 100,
            duration: 0.75,
            scrollTrigger: {
                trigger: $element, 
                start: "top 80%",
                toggleActions: "play reset play reset"
            }
        });
    });
}
export const staggerFade = () => {
    const $elements = document.querySelectorAll("[data-animation='stagger-fade']");

    gsap.from($elements, {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        scrollTrigger: {
            trigger: $elements[1],
            start: "top 80%",
            toggleActions: "play reset play reset"
        }
    });
}

export default {fadeInUp, staggerFade};
