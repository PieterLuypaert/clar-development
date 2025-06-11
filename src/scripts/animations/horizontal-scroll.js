import { gsap } from "gsap";

export const changeColor = ($element, textColor, backgroundColor) => {
  gsap.to($element, {
    "--hero-text-color": textColor,
    "--hero-bg-color": backgroundColor,
  });
};

export const pinSlider = () => {
  const $hero = document.querySelector(".hero");
  const $list = document.querySelector(".scroll__list");

  if (!$hero || !$list) return;

  const defaultBg = $hero.dataset.bg;
  const defaultText = $hero.dataset.text;
  const margin = (window.innerWidth / 10) * 2;

  const scrollTween = gsap.to($list, {
    x: -($list.scrollWidth + margin),
    ease: "linear",
    scrollTrigger: {
      trigger: ".scroll",
      start: "center center",
      pin: true,
      scrub: true,
      onLeaveBack: () => changeColor($hero, defaultText, defaultBg),
    },
  });

  document.querySelectorAll(".scroll__list li").forEach((item) => {
    const quote = item.querySelector("blockquote");
    if (!quote) return;

    gsap.to(item, {
      opacity: 0,
      scrollTrigger: {
        trigger: quote,
        containerAnimation: scrollTween,
        start: "0 20%",
        end: "75% 20%",
        pinSpacing: false,
        scrub: true,
        onEnter: () => changeColor($hero, item.dataset.bg, item.dataset.text),
        onEnterBack: () =>
          changeColor($hero, item.dataset.bg, item.dataset.text),
      },
    });
  });
};

export default { pinSlider, changeColor };
