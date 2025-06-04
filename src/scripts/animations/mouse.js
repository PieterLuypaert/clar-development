import { gsap } from "gsap";

export const animateMouse = () => {
    const ball = document.getElementById('ball');
    
    gsap.set(ball, {
        xPercent: -50, 
        yPercent: -50,
        scale: 0,
        opacity: 0
    });
    
    const xTo = gsap.quickTo(ball, "x", {duration: 0.6, ease: "power3"});
    const yTo = gsap.quickTo(ball, "y", {duration: 0.6, ease: "power3"});
    
    window.addEventListener("mousemove", e => {
        xTo(e.clientX);
        yTo(e.clientY);
        
        if (ball.style.opacity === "0") {
            gsap.to(ball, {opacity: 1, scale: 1, delay: 0.2});
        }
    });
    
    document.documentElement.addEventListener('mouseleave', () => {
        gsap.to(ball, {scale: 0});
    });
    
    document.documentElement.addEventListener('mouseenter', () => {
        gsap.to(ball, {scale: 1});
    });
}

export default animateMouse;