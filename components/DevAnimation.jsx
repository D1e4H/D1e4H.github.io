import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DevRandomAnimation = () => {
    const container = useRef();

    useGSAP(() => {
        // 1. Obtenemos todas las letras dentro del contenedor
        const letras = container.current.querySelectorAll('span');

        letras.forEach((letra) => {
            // 2. Definimos la función que anima UNA letra
            const animarLetra = () => {
                // Tu animación exacta de la letra
                const tl = gsap.timeline({
                    onComplete: () => {
                        const proximoSalto = gsap.utils.random(1, 15);
                        gsap.delayedCall(proximoSalto, animarLetra);
                    }
                });

                tl.to(letra, { yPercent: -100, duration: 1.5, ease: "power4.in" })
                    .set(letra, { yPercent: 100 }) // Teletransportarla abajo
                    .to(letra, { yPercent: 0, duration: 1.5, ease: "power4.out" });
            };

            gsap.delayedCall(gsap.utils.random(1, 15), animarLetra);
        });

        // Limpieza: Matar todos los delayedCalls al desmontar
        return () => gsap.killTweensOf(letras);
    }, { scope: container });

    return (<>

        <div ref={container} className="flex overflow-hidden h-20 items-center font-pixel text-7xl text-purple-500 gap-2>">
            <span>W</span>
            <span>E</span>
            <span>B</span>
            <h1 className='font-script'>FrontEnd</h1>
        </div>

        <div ref={container} className="flex overflow-hidden h-20 items-center font-pixel text-7xl text-purple-500 gap-2">

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