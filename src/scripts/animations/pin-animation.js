import { gsap } from "gsap";

export const pinSideInSection = () => {
  gsap.to(".hero__title-text", {
    y: () =>
      -(
        window.innerHeight -
        document.querySelector(".hero__title-text").offsetHeight
      ),
    scrollTrigger: {
      trigger: ".hero",
      start: "top 0",
      end: "bottom bottom",
      pin: ".hero__title",
      pinSpacing: false,
      scrub: 0.75,
    },
  });
};

export default pinSideInSection;
