import { gsap } from "gsap";

export const fadeInTitles = () => {
    const $elements = document.querySelectorAll("[data-animation='title']");

    $elements.forEach(($element) => {
        const animation = $element.querySelectorAll("span");

        gsap.fromTo(animation, 
            { 
                y: "100%",
                opacity: 0,
                rotation: 5,
            },
            {
                y: 0,
                opacity: 1,
                rotation: 0,
                duration: 0.4,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: $element,
                    start: "top 85%",
                    toggleActions: "play reset play reset",
                },
            }
        );
    });
};

export default fadeInTitles;