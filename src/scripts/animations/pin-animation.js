import { gsap } from "gsap";

export const pinSideInSection = () => {
  document.querySelectorAll("[data-animation='pin']").forEach((section) => {
    const parentElement = section.querySelector("[data-child='pin-element']");
    const animatedElement = parentElement?.querySelector(
      "[data-child='pin-animation']"
    );

    if (!parentElement || !animatedElement) return;

    const isFlipped = parentElement.hasAttribute("flipped");
    const scrubValue = parentElement.getAttribute("scrub") || 0.75;
    const directionMultiplier = isFlipped ? -1 : 1;
    const heightDifference = window.innerHeight - animatedElement.offsetHeight;
    const yOffset = heightDifference * directionMultiplier;

    gsap.to(animatedElement, {
      y: yOffset,
      scrollTrigger: {
        trigger: section,
        start: "top 0",
        end: "bottom bottom",
        pin: parentElement,
        pinSpacing: false,
        scrub: scrubValue,
      },
    });
  });
};

export default pinSideInSection;
