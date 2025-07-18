import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const svgAnimation = () => {
  const $svgs = document.querySelectorAll("[data-animation='svg-cirkle']");

  $svgs.forEach(($svg) => {
    const circles = $svg.querySelectorAll('[data-animation="cirkle"]');

    gsap.from(circles, {
      scale: 0,
      transformOrigin: "center bottom",
      stagger: 0.1,
      scrollTrigger: {
        trigger: $svg,
        toggleActions: "restart none restart none",
        start: "top bottom",
        end: "bottom top",
      },
    });
  });
};

export default svgAnimation;
