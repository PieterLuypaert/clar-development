import { gsap } from "gsap";

export const mouseAnimation = () => {
    const ball = document.querySelector('[data-animation="mouse"]');
    if (!ball) return;

    gsap.set(ball, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });
    
    window.addEventListener("mousemove", (e) => {
        gsap.to(ball, { 
            x: e.clientX,
            y: e.clientY,
            opacity: 1, 
            scale: 1, 
            duration: 0.3,
            ease: "power3"
        });
    });
    
    document.addEventListener("mouseleave", () => {
        gsap.to(ball, { scale: 0, opacity: 0, duration: 0.3 });
    });
};

export default mouseAnimation;
