import { gsap } from "gsap";

export const fadeInTitles = () => {
    const $elements = document.querySelectorAll("[data-animation='title']");

    $elements.forEach(($element) => {
        $element.querySelectorAll("span").forEach((span) => {
            if (!span.querySelector("span")) {
                span.innerHTML = `<span>${span.innerHTML}</span>`;
            }
        });

        const lineElements = $element.querySelectorAll("span > span");

        gsap.to(lineElements, {
            y: 0,
            rotation: 0,
            duration: 0.4,
            stagger: 0.15, 
            scrollTrigger: {
                trigger: $element,
                start: "top 85%",
                toggleActions: "play reset play reset",
                immediateRender: false,
            },
        });
    });
};

export default fadeInTitles;