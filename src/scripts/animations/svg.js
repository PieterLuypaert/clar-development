import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const showSvg = () => {
    document.querySelectorAll("[data-animation='svg-cirkel']").forEach($svg => {
        gsap.from($svg.querySelectorAll('circle'), {
            scale: 0,
            transformOrigin: "center bottom",
            ease: 'power4.easeOut',
            stagger: 0.1, 
            scrollTrigger: {
                trigger: $svg,
                toggleActions: "restart none restart none", 
                start: "top bottom", 
                end: "bottom top"
            }
        });
    });
}

export default showSvg;
