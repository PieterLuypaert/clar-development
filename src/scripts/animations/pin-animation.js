import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pinAnimation = () => {
  const pinElements = document.querySelectorAll('[data-animation="pin"]');

  pinElements.forEach((element) => {
    const titleText = element.querySelector(".hero__title-text");
    const titleContainer = element.querySelector(".hero__title");

    gsap.to(titleText, {
      y: () => titleText.offsetHeight - window.innerHeight,
      scrollTrigger: {
        trigger: element,
        start: "top",
        end: "bottom bottom",
        pin: titleContainer,
        pinSpacing: false,
      },
    });
  });
};

export default pinAnimation;
