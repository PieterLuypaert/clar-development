import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { fadeInTitles } from "./animations/titles";
import horizontalScroll from "./animations/horizontal-scroll";
import pinSideInSection from "./animations/pin-animation";
import { fadeInUp, staggerFade } from "./animations/fade";
import mouseAnimation from "./animations/mouse";
import loadingAnimation from "./animations/preloader";
import loadLottieFiles from "./lottie";
import svgAnimation from "./animations/svg";

gsap.registerPlugin(ScrollTrigger, SplitText);

const afterLoad = () => {
  mouseAnimation();
  horizontalScroll();
  pinSideInSection();
  loadLottieFiles();
  fadeInTitles();
  fadeInUp();
  staggerFade();
  svgAnimation();
};

document.addEventListener("DOMContentLoaded", () => {
  loadingAnimation(afterLoad);
});
