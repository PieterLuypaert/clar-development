import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const mouseAnimation = () => {
    const ball = document.querySelector('[data-animation="mouse"]');
    if (!ball) return;

    gsap.set(ball, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });
    
    const xTo = gsap.quickTo(ball, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(ball, "y", { duration: 0.6, ease: "power3" });
    
    let isVisible = false;

    window.addEventListener("mousemove", (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
        
        if (!isVisible) {
            gsap.to(ball, { opacity: 1, scale: 1, duration: 0.3 });
            isVisible = true;
        }
    });
    
    document.addEventListener("mouseleave", () => {
        gsap.to(ball, { scale: 0, opacity: 0, duration: 0.3 });
        isVisible = false;
    });
    
    document.addEventListener("mouseenter", () => {
        if (isVisible) gsap.to(ball, { scale: 1, opacity: 1, duration: 0.3 });
    });
    
    ScrollTrigger.create({
        trigger: "body", 
        start: "top top",
        end: "bottom bottom",
        onUpdate: self => {
            if (self.isActive && isVisible) gsap.to(ball, { opacity: 0.7, duration: 0.2 });
        }
    });
};

export default mouseAnimation;
