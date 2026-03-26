import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DevRandomAnimation = () => {
    const container = useRef();

    useGSAP(() => {
        const letras = container.current.querySelectorAll('span');

        letras.forEach((letra) => {
            const animarLetra = () => {
                const tl = gsap.timeline({
                    onComplete: () => {
                        const proximoSalto = gsap.utils.random(1, 15);
                        gsap.delayedCall(proximoSalto, animarLetra);
                    }
                });

                tl.to(letra, { yPercent: -100, duration: 1.5, ease: "power4.in" })
                    .set(letra, { yPercent: 100 }) 
                    .to(letra, { yPercent: 0, duration: 1.5, ease: "power4.out" });
            };

            gsap.delayedCall(gsap.utils.random(1, 15), animarLetra);
        });

        return () => gsap.killTweensOf(letras);
    }, { scope: container });

    return (<>

        <div ref={container} className="flex overflow-hidden h-10 items-center text-4xl font-pixel md:text-6xl lg:text-7xl md:h-20 text-purple-500 gap-2>">
            <span>W</span>
            <span>E</span>
            <span>B</span>
            <h1 className='font-script bold text-5xl'>FrontEnd</h1>
        </div>

        <div ref={container} className="flex overflow-hidden h-10 items-center text-4xl font-pixel md:text-6xl md:h-20 lg:text-7xl text-purple-500 gap-2">

            <span className="w-4"> <br></br></span>

            <span>D</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>L</span>
            <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
        </div>
    </>
    );
};
export default DevRandomAnimation;