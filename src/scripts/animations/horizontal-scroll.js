import { gsap } from "gsap";

export const changeColor = ($element, textColor, backgroundColor) => {
  gsap.to($element, {
    "--hero-text-color": textColor,
    "--hero-bg-color": backgroundColor,
  });
};

export const pinSlider = () => {
  const $hero = document.querySelector("[data-parent='color-change']");
  if (!$hero) return;

  const defaultBackgroundColor = $hero.dataset.bg;
  const defaultTextColor = $hero.dataset.text;

  document.querySelectorAll("[data-animation='scroll']").forEach((slider) => {
    const $list = slider.querySelector("[data-child='scroll__list']");
    if (!$list) return;

    const items = $list.querySelectorAll("li");
    const margin = (window.innerWidth / 10) * 2;

    const scrollTween = gsap.to($list, {
      x: -($list.scrollWidth + margin),
      ease: "linear",
      scrollTrigger: {
        trigger: slider,
        start: "center center",
        pin: slider,
        scrub: true,
        onLeaveBack: () => {
          changeColor($hero, defaultTextColor, defaultBackgroundColor);
        },
      },
    });

    items.forEach((item) => {
      const quote = item.querySelector("blockquote");
      if (!quote) return;

      const itemTextColor = item.dataset.text;
      const itemBackgroundColor = item.dataset.bg;
      gsap.to(item, {
        opacity: 0,
        scrollTrigger: {
          trigger: quote,
          containerAnimation: scrollTween,
          start: "0 20%",
          end: "75% 20%",
          pinSpacing: false,
          scrub: true,
          onEnter: () => changeColor($hero, itemBackgroundColor, itemTextColor),
          onEnterBack: () =>
            changeColor($hero, itemBackgroundColor, itemTextColor),
        },
      });
    });
  });
};

export default { pinSlider, changeColor };
