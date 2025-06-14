import { DotLottie } from '@lottiefiles/dotlottie-web';

function loadLottieFiles() {
    const $canvases = document.querySelectorAll("[data-lottie-source]");

    $canvases.forEach($canvas => {
        const dotLottie = new DotLottie({
            autoplay: true,
            loop: true,
            canvas: $canvas,
            speed: 2,
            layout: {
                fit: "cover",
                align: [.5, 0]
            },
            src: `/assets/lotties/${$canvas.getAttribute('data-lottie-source')}`
        });

        window.addEventListener("resize", () => {
            dotLottie.resize();
        });
    });
}

export default loadLottieFiles;