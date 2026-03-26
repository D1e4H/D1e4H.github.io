import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Pacman = () => {
    useGSAP(() => {
        const pacmanAnimation = gsap.timeline({ repeat: -1 });

        pacmanAnimation.to('#pacman', {

        })
            .fromTo('#pacman', {
                yPercent: -200,
                xPercent: -50,
            }, {
                xPercent: -50,
                y: () => document.documentElement.scrollHeight + 100,
                duration: 10,
                ease: "none",
            })

    }, []);
    return (
        <img id="pacman" className='w-40 h-40 mr-280 rotate-90 z-1' src="./src/assets/gifs/Pacman-blanco-portfolio-grande.gif"></img>
    )


};




export default Pacman;