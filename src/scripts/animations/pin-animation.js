import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pinAnimation = () => {
  const pinElements = document.querySelectorAll('[data-animation="pin"]');

  pinElements.forEach((element) => {
    const titleText = element.querySelector('[data-animation="pinned-span"]');
    const titleContainer = element.querySelector('[data-animation="pinned-element"]');

    const isCanvas = titleText.tagName === 'CANVAS';
    
    const yOffset = isCanvas 
      ? titleContainer.offsetHeight - titleText.offsetHeight
      : titleText.offsetHeight - window.innerHeight;
    
    gsap.to(titleText, {
      y: yOffset,
      scrollTrigger: {
      trigger: element,
      start: "top top",
      end: "bottom bottom",
      pin: titleContainer,
      scrub: 1,
      },
    });
  });
};

export default pinAnimation;
