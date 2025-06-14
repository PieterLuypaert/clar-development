import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pinAnimation = () => {
  const pinElements = document.querySelectorAll('[data-animation="pin"]');

  pinElements.forEach((element) => {
    const titleText = element.querySelector('[data-animation="pinned-span"]');
    const titleContainer = element.querySelector('[data-animation="pinned-element"]');

    gsap.to(titleText, {
      y: () => titleText.offsetHeight - window.innerHeight,
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom bottom",
        pin: titleContainer,
        pinSpacing: false,
        scrub: 1,
      },
    });
  });
};

export default pinAnimation;
