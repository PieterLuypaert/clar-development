import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { fadeInTitles } from "./animations/titles";
import horizontalScroll, { pinSlider } from "./animations/horizontal-scroll";
import pinSideInSection from "./animations/pin-animation";
import { fadeInUp, staggerFade } from "./animations/fade";
import animateMouse from "./animations/mouse";
import loadingAnimation from "./animations/preloader";
import loadLottieFiles from "./lottie";
import showSvg from "./animations/svg";

gsap.registerPlugin(ScrollTrigger, SplitText);

const afterLoad = () => {
  animateMouse();
  horizontalScroll();
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
