import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const loadingAnimation = (callback) => {
    const $loader = document.querySelector("[data-animation='preloader']");
    const $loaderText = $loader.querySelector('span > span');
    
    const splitText = new SplitText($loaderText, { type: "chars" });
    const chars = splitText.chars;
    
    const loadingTimeline = gsap.timeline({
        onComplete: () => {
            callback();
        }
    });

    loadingTimeline
        .to($loaderText, {
            y: 0,
            rotation: 0,
            duration: .5,
            delay: .25,
        })
        .to($loaderText, {
            yPercent: -100,
            rotation: -6,
            duration: .25,
            delay: .25,
        })
        .to($loader, {
            scaleX: 0,
            transformOrigin: 'right center',
        });

    return loadingTimeline;
}

export default loadingAnimation;
