import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const horizontalScroll = () => {
  const scrollContainer = document.querySelector("[data-animation='scroll']");

  const hero = document.querySelector("[data-animation='pin']");
  const list = scrollContainer.querySelector("[data-animation='scroll-list']");
  const items = scrollContainer.querySelectorAll("li");

  const styles = getComputedStyle(hero);
  const defaultTextColor = hero.dataset.text || styles.getPropertyValue("--hero-text-color").trim();
  const defaultBgColor = hero.dataset.bg || styles.getPropertyValue("--hero-bg-color").trim();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scrollContainer,
      start: "center center",
      end: "3000",
      pin: true,
      scrub: true,
      onUpdate: ({ progress }) => {
        // zoekt actieve element of stuk op basis van scrollen
        const scroll = Math.min(
          Math.floor(progress * items.length),
          items.length - 1
        );
        const activeItem = items[scroll];

        // Only change colors if the active item has the data attributes
        if (activeItem.dataset.text && activeItem.dataset.bg) {
          gsap.to(hero, {
            "--hero-text-color": activeItem.dataset.text,
            "--hero-bg-color": activeItem.dataset.bg,
          });
        }
      },
      onLeaveBack: () => {
        gsap.to(hero, {
          "--hero-text-color": defaultTextColor,
          "--hero-bg-color": defaultBgColor,
        });
      },
    },
  });

  tl.to(list, { x: -list.scrollWidth }); // dit pasts simpelweg de animtie toe
};

export default horizontalScroll;
