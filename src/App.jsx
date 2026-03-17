import { useRef, useState, use } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import tailwindLogo from './assets/svg/tailwind-css-icon.png'
import reactLogo from './assets/svg/react-icon.png'
import javaScriptLogo from './assets/svg/jslogo8bit.png'
import cssLogo from './assets/svg/css3-icon.svg'
import htmlLogo from './assets/svg/html8bit.png'
import goAlone from './assets/gifs/Go-alone.png'
import PixelCube from '../components/Cube.jsx'
import ProjectParticles from '../components/project-particles.jsx'
import BackgroundGrid from '../components/BackgroundGrid.jsx';
import DevRandomAnimation from '../components/DevAnimation.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {
  const logoRef = useRef(null);
  const techRef = useRef(null);
  const pacmanAnimation = gsap.timeline({ repeat: -1 });
  const [color, setColor] = useState(false);


  useGSAP(() => {
    const boxes = gsap.utils.toArray(techRef.current.children);
    boxes.forEach((box) => {
      const logos = box.querySelectorAll('img');
      gsap.fromTo(box, { y: -400, width: 5, height: 5, marginRight: 150 }, {
        delay: 0.5 * boxes.indexOf(box),
        y: 0,
        duration: 3,

        scrollTrigger: {
          trigger: box,
          start: "bottom 90%",
          toggleActions: "play none none none"
        },
      })
      gsap.to(box, {

        scrollTrigger: {
          trigger: box,
          start: "bottom 10%",
          toggleActions: "play none none none"
        },
        marginRight: 0,
        delay: 3 + boxes.indexOf(box) - 1.5,
        width: 180,
        height: 190,
        duration: 0.5,
        onComplete: () => gsap.to(logos, { opacity: 1, duration: 1 })

      })


    })


    pacmanAnimation.to('#pacman', {

    })
      .call(() => setColor(true))
      .to('#pacman', {
        y: 573,
        duration: 2,
        ease: "none"
      })
      .to('#pacman', {
        rotation: -5,
        duration: 0.1,
        ease: "none"




      })
      .to('#pacman', {
        x: 1100,
        duration: 2,
        ease: "none"
      })
      .to('#pacman', {
        rotation: 90,
        duration: 0.1,
        ease: "none"


      })
      .call(() => setColor(true))
      .to('#pacman', {
        y: 1344,
        duration: 2,
        ease: "none"

      })
      .to('#pacman', {
        rotation: 180,
        duration: 0.1,
        ease: "none"

      })
      .to('#pacman', {
        x: -75,
        duration: 2,
        ease: "none"
      })
      .to('#pacman', {
        rotation: 90,
        duration: 0.1,
        ease: "none"

      })
      .call(() => setColor(false))

      .to('#pacman', {
        y: 2179,
        duration: 2,
        ease: "none"

      })
      .to('#pacman', {
        rotation: -5,
        duration: 0.1,
        ease: "none"
      })
      .to('#pacman', {
        x: 1190,
        duration: 2,
        ease: "none"
      })
      .to('#pacman', {
        rotation: 90,
        duration: 0.1,
        ease: "none"
      })
      .call(() => setColor(true))
      .to('#pacman', {
        y: 3000,
        duration: 2,
        ease: "none"
      });



  }, []);


  return (
    <>

      <div className="  min-h-screen max-w-screen flex items-center justify-center flex-col">
        <section className=" relative  bg-stone-950 max-w-400 min-w-400 h-[135] flex flex-col justify-center items-center ">
          <div className='absolute inset-0 z-0'>
            <Canvas camera={{ alpha: true, antialias: true, position: [0, 0, 4.3], fov: 45 }}>
              <ProjectParticles />
            </Canvas>
          </div>

          <img id="pacman" className='w-30 h-30 mr-280 rotate-90 z-1' src={color ? "./src/assets/gifs/Pacman-blanco-portfolio-grande.gif" : "./src/assets/gifs/Pacman-negro-portfolio-grande.gif"}></img>

          <div className="bg-none  border-none min-h-100 flex flex-col justify-center items-center mb-30 ">

            <header className="fixed top-3 left-3 bg-l p-4 bg-stone-950 border-4">
              <h1 className=' font-pixel text-xs text-purple-500  w-full leading-tight'>PORTFOLIO <br></br>DE<br></br> DIEGO <br></br> HENRIQUEZ</h1>
            </header>

            <div className="text-purple-500 font-pixel flex flex-row justify-center items-center -mt-10 -mr-30">
              <div className='font-pixel overflow-hidden'>
                <DevRandomAnimation></DevRandomAnimation>
              </div>
              <div className='w-45 h-45 bg-none -mt-10 ml-20 '>
                <Canvas camera={{ alpha: true, antialias: true, position: [0, 0, 4.3], fov: 45 }}>
                  <PixelCube />
                  <OrbitControls
                    enableZoom={false}
                  />
                </Canvas>
              </div>

            </div>
          </div>

        </section>
        <section className=" relative w-screen h-230 bg-stone-950 flex align items-center justify-center">
          <div className='w-full h-full absolute z-1'>
            <Canvas className="w-full h-full m" camera={{ alpha: true, antialias: true, position: [0, 0, 10], fov: 45 }}>
              <BackgroundGrid />
            </Canvas>
          </div>
          <div className="  min-h-120 max-w-300 flex items-center justify-center mx-auto flex-col">
            <div className="  font-pixel text-purple-500 text-5xl  flex flex-col justify-center items-left h-full ml-5 max-w-300 mx-auto">

              <h2 className="-mt-110 absolute ml-15">PROYECTOS</h2>  <pixel-canvas className="w-140 h-50 relative mr-110"> </pixel-canvas>
              <div className='flex flex-row'>
                <div className='w-200 h-100 bg-purple-500 m-5'></div>
                <div className='w-200 h-100 bg-purple-500 m-5'></div>
                <div className='w-200 h-100 bg-purple-500 m-5'></div>

              </div>
            </div>
          </div>
        </section>
        <section className=' w-screen h-200 align-center flex flex-col justify-center items-center '>
          <div className="  min-h-120 max-w-300 flex items-center justify-center align-center flex-col mx-auto">
            <h2 className='font-pixel text-6xl ml-80 text-shadow-stone-950'>TECNOLOGIAS </h2>
            <div ref={techRef} className='flex flex-row flex-wrap justify-center items-center mt-20 '>

              <div className='w-50 h-50 m-3'><pixel-canvas className="bg-stone-950 m-2 -mb-50 " data-colors="#4169E1"> </pixel-canvas> <img src={reactLogo} alt="React Logo" className={`w-40 h-40 m-2 ml-4 mt-5 opacity-0 `} /></div>
              <div className='w-50 h-50 m-3'><pixel-canvas className="bg-stone-950 m-2 -mb-50 " data-colors="#4169E1"> </pixel-canvas> <img src={tailwindLogo} alt="Tailwind Logo" className={`w-50 h-50 ml-3 -mb-50 opacity-0`} /></div>
              <div className='w-50 h-50 m-3'><pixel-canvas className="bg-stone-950 m-2 -mb-50 " data-colors="#ffff00"> </pixel-canvas> <img src={javaScriptLogo} alt="JavaScript Logo" className={`w-50 h-50 m-2 -mb-50 opacity-0`} /></div>
              <div className='w-50 h-50 m-3'><pixel-canvas className="bg-stone-950 m-2 -mb-50 " data-colors="#4169E1"> </pixel-canvas> <img src={cssLogo} alt="CSS Logo" className={`w-30 h-30 m-2 mt-10 ml-10 opacity-0 `} /></div>
              <div className='w-50 h-50 m-3'><pixel-canvas className="bg-stone-950 m-2 -mb-50 " data-colors="#ff8888"> </pixel-canvas> <img src={htmlLogo} alt="HTML Logo" className={`w-30 h-30 m-10 mr-6 opacity-0`} /></div>

            </div>
            <div id='tech-name' className='text-stone-950 font-pixel flex flex-row justify-center items-center '>
              <div className='w-40 h-50 m-5 flex justify-center'><h3 className='ml-17 '>React </h3></div>
              <div className='w-40 h-50 m-5 flex justify-center'><h3 className='ml-11 '>Tailwind </h3></div>
              <div className='w-40 h-50 m-5 flex justify-center'><h3 className='ml-8 '>JavaScript </h3></div>
              <div className='w-40 h-50 m-5 flex justify-center' ><h3 className=' '>CSS3 </h3></div>
              <div className='w-40 h-50 m-5 flex justify-center'><h3 className=' '>HTML5 </h3></div>
            </div>
          </div>
        </section>
        <section className=' w-screen h-200 align-center flex flex-col justify-center items-center bg-stone-950'>
          <h3 className='text-purple-500 text-4xl font-pixel -mt-150 absolute' > CONTACTAME </h3>
          <pixel-canvas className="relative w-95 h-30 m-2 -mt-150"> </pixel-canvas>
          <a href="mailto:Diegoandrezenriquez@gmail.com" className="mt-80 font-pixel text-stone-500 text-2xl"> Diegoandrezenriquez@gmail.com</a>
          "
        </section>
        <section className=' font-pixel w-screen h-150 align-center flex flex-col justify-center items-center '>
          <div className='flex align-center justify-center flex-col min-h-120 max-w-300 mx-auto'>
            <h2 className='mb-50 mt-20 text-4xl' > SOBRE MI  </h2>
            <div className='flex align-center justify-center w-200 h-600 flex-col'>
              <p className='mb-20 -mt-60'> Hola, soy Diego. Un desarrollador jr residente en Venezuela especializado en React y Tailwind CSS.
                Como habras notado me gusta el desarrollo web y lo retro 8bits.</p>
              <p>
                Estoy emocionado por seguir aprendiendo y creciendo en el mundo del desarrollo web.
              </p>

              <p className='mt-20'>
                ¡Gracias por visitar mi portafolio!
              </p>
            </div>
          </div>

        </section>
        <footer className=' w-screen h-50 bg-stone-950 flex align-center justify-center flex-col align-center text-center'>
          <p className=' font-pixel text-stone-500'> © 2026 Diego Henriquez. derechos reservados.</p>
          <p className=' font-pixel text-stone-500'> © Componente hover pixeleado de: Ryan Mulligan  </p>

        </footer>
      </div>
    </>
  )
}
export default App
