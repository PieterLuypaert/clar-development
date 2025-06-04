import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { fadeInTitles } from "./animations/titles";
import { pinSlider } from "./animations/horizontal-scroll";
import pinSideInSection from "./animations/pin-animation";
import { fadeInUp, staggerFade } from "./animations/fade";
import animateMouse from "./animations/mouse";
import loadingAnimation from "./animations/preloader";
import loadLottieFiles from "./lottie";
import showSvg from "./animations/svg";


gsap.registerPlugin(ScrollTrigger);

const afterLoad = () => {
  animateMouse();
  pinSlider();
  pinSideInSection();
  loadLottieFiles();
  fadeInTitles();
  fadeInUp();
  staggerFade();
  showSvg();
};

document.addEventListener("DOMContentLoaded", () => {
  loadingAnimation(afterLoad);
});
