import { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// Assets
import tailwindLogo from './assets/svg/tailwind-css-icon.png'
import reactLogo from './assets/svg/react-icon.png'
import javaScriptLogo from './assets/svg/jslogo8bit.png'
import cssLogo from './assets/svg/css3-icon.svg'
import htmlLogo from './assets/svg/html8bit.png'

// Componentes
import PixelCube from '../components/Cube.jsx'
import ProjectParticles from '../components/project-particles.jsx'
import DevRandomAnimation from '../components/DevAnimation.jsx';
import GitHubIcon from './assets/svg/github.jsx'
import RetroCircles from '../components/retroCircles.jsx';
import Pacman from '../components/pacman.jsx';
import BackgroundGrid from '../components/backgroundGrid.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {
  const techRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const boxes = gsap.utils.toArray(techRef.current.children);
      boxes.forEach((box) => {
        const logo = box.querySelector('img');
        const cardBg = box.querySelector('.tech-card-bg');

        gsap.fromTo(cardBg, { y: -200, width: 10, height: 10, opacity: 0 }, {
          delay: 0.1 * boxes.indexOf(box),
          y: 0, opacity: 1, duration: 0.5,
          scrollTrigger: {
            trigger: box,
            start: "top 90%",
            toggleActions: "play none none none"
          },
        });

        gsap.to(cardBg, {
          scrollTrigger: {
            trigger: box,
            start: "top 40%",
            toggleActions: "play none none none"
          },
          delay: 0.1 * boxes.indexOf(box),
          width: 160, height: 160, duration: 0.5,
          background: "linear-gradient(135deg, #3b0764 0%, #a855f7 100%)",
          onComplete: () => gsap.to(logo, { opacity: 1, duration: 0.5 })
        });
      });
    });

    mm.add("(max-width: 767px)", () => {
      const boxes = gsap.utils.toArray(techRef.current.children);
      boxes.forEach((box) => {
        const logo = box.querySelector('img');
        const cardBg = box.querySelector('.tech-card-bg');

        gsap.set(cardBg, { width: 120, height: 120, background: "linear-gradient(135deg, #3b0764 0%, #a855f7 100%)" });

        gsap.fromTo(box, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.5,
          scrollTrigger: {
            trigger: box, start: "top 85%", toggleActions: "play none none none"
          },
          onComplete: () => gsap.to(logo, { opacity: 1, duration: 0.5 })
        });
      });
    });

    return () => mm.revert();
  }, { scope: techRef });

  return (
    <div className="bg-stone-950 min-h-screen w-full overflow-x-hidden flex flex-col items-center">

      <section className="relative w-full min-h-screen flex flex-col justify-center items-center">
        <Pacman />
        <div className='absolute inset-0 z-0'>
          <Canvas className='w-full h-full brightness-75' camera={{ alpha: true, antialias: true, position: [0, 0, 4.3], fov: 45 }}>
            <ProjectParticles />
          </Canvas>
        </div>

        <header className="z-20 absolute top-4 left-4 p-2">
          <h1 className='font-pixel text-[10px] md:text-xs text-purple-500 leading-tight tracking-widest'>
            PORTFOLIO <br />DE<br /> DIEGO <br /> HENRIQUEZ
          </h1>
        </header>

        <div className="z-10 flex xl:flex-row flex-col items-center justify-center gap-8 lg:gap-16 lg:-mt-50 px-4">
          <div className='font-pixel text-purple-500 scale-75 lg:scale-100'>
            <DevRandomAnimation />
          </div>
          <div className='w-40 h-40 lg:w-64 lg:h-64'>
            <Canvas camera={{ alpha: true, antialias: true, position: [0, 0, 4.3], fov: 45 }}>
              <PixelCube />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-screen bg-stone-950 flex items-center justify-center py-20">
        <div className='absolute inset-0 z-0'>
          <Canvas className="brightness-50 w-full h-full" camera={{ alpha: true, antialias: true, position: [0, 0, 10], fov: 45 }}>
            <BackgroundGrid />
          </Canvas>
        </div>

        <div className="z-10 w-full max-w-6xl px-6 flex flex-col items-center md:items-start">
          <h2 className="font-pixel text-4xl md:text-5xl text-purple-500 lg:mt-5 mb-12">PROYECTOS</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full place-items-center'>

            <div className='group hover:-translate-y-2 duration-300 transition-all flex flex-col items-center w-full max-w-[320px]'>
              <div className='w-full aspect-[4/5] z-10 bg-stone-950 border-2 border-stone-700 hover:border-purple-400 transition-all duration-300'>
                <div className='bg-purple-950 h-1/2 w-full'></div>
                <h2 className="ml-4 font-pixel text-xl text-shadow-purple-400 md:text-2xl text-purple-500 mt-4">Pacman</h2>
                <p className="ml-4 font-pixel text-stone-500 text-shadow-purple-950 text-sm mx-5"> Un clon del clásico de arcade Pacman desarrollado en React y Three.js. </p>
              </div>
              <div className='mt-6 w-12 h-12 bg-stone-950'>
                <GitHubIcon className="group-hover:text-purple-400 text-stone-500 transition-colors duration-300" />
              </div>
            </div>


            <div className='group hover:-translate-y-2 duration-300 transition-all flex flex-col items-center w-full max-w-[320px]'>
              <div className='w-full aspect-[4/5] z-10 bg-stone-950 border-2 border-stone-700 hover:border-purple-400 transition-all duration-300'>
                <div className='bg-purple-950 h-1/2 w-full'></div>
                <h2 className="ml-4 font-pixel text-xl text-shadow-purple-400 md:text-2xl text-purple-500 mt-4">Trello</h2>
                <p className="ml-4 font-pixel text-stone-500 text-shadow-purple-950 text-sm mx-5"> Una pequeña  aplicacion de notas inspirada en trello desarrollada en React. </p>

              </div>
              <div className='mt-6 w-12 h-12 bg-stone-950'>
                <GitHubIcon className="group-hover:text-purple-400 text-stone-500 transition-colors duration-300" />
              </div>
            </div>


            <div className='group hover:-translate-y-2 duration-300 transition-all flex flex-col items-center w-full max-w-[320px]'>
              <div className='w-full aspect-[4/5] z-10 bg-stone-950 border-2 border-stone-700 hover:border-purple-400 transition-all duration-300'>
                <div className='bg-purple-950 h-1/2 w-full'></div>
                <h2 className="ml-4 font-pixel text-xl text-shadow-purple-400 md:text-2xl text-purple-500 mt-4">WeatherApp</h2>
                <p className="ml-4 font-pixel text-stone-500 text-shadow-purple-950 text-sm mx-5"> Una aplicacion del clima potenciada con IA generativa desarrollada en Javascript Vanilla. </p>
              </div>
              <div className='mt-6 w-12 h-12 bg-stone-950'>
                <GitHubIcon className="group-hover:text-purple-400 text-stone-500 transition-colors duration-300" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TECNOLOGIAS SECTION --- */}
      <section className='w-full min-h-screen py-20 flex flex-col justify-center items-center bg-stone-950'>
        <div className="w-full max-w-5xl px-6 flex flex-col items-center">
          <h2 className='font-pixel text-3xl  md:text-5xl text-purple-500 mb-16 text-center'>TECNOLOGIAS</h2>

          <div ref={techRef} className='flex flex-wrap justify-center items-end gap-6 md:gap-12'>
            {[
              { src: reactLogo, name: "React", color: "#4169E1" },
              { src: tailwindLogo, name: "Tailwind", color: "#38bdf8" },
              { src: javaScriptLogo, name: "JavaScript", color: "#ffff00" },
              { src: cssLogo, name: "CSS3", color: "#2965f1" },
              { src: htmlLogo, name: "HTML5", color: "#ff8888" },
            ].map((tech, index) => (
              <div key={index} className='group flex flex-col items-center w-[120px] md:w-[160px] cursor-pointer'>

                <div className='tech-card-bg relative bg-stone-900 border border-stone-800 flex justify-center items-center rounded-sm overflow-hidden mb-4 
                          filter grayscale group-hover:grayscale-0 group-hover:border-purple-500/50
                          transition-all duration-500 ease-in-out transform group-hover:scale-105'>

                  <pixel-canvas
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    data-colors={tech.color}>
                  </pixel-canvas>

                  <img
                    src={tech.src}
                    alt={`${tech.name} Logo`}
                    className="relative z-10 w-20 h-20 md:w-35 md:h-35 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                <h3 className='text-stone-500 font-pixel text-[10px] md:text-sm text-center group-hover:text-purple-500 transition-colors duration-500'>
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='w-full py-32 flex flex-col justify-center items-center bg-stone-950 overflow-hidden'>
        <h3 className='text-purple-500 text-3xl md:text-5xl font-pixel lg:mb-10 z-10 text-center px-4'> CONTACTAME </h3>
        <div className="scale-75 md:scale-100">
          <RetroCircles />
        </div>
      </section>

      <section className='font-pixel text-stone-300 w-full min-h-screen py-20 flex flex-col justify-center items-center px-6'>
        <div className='w-full max-w-3xl flex flex-col'>
          <h2 className='mb-12 text-3xl md:text-5xl text-purple-500 text-center md:text-left'> SOBRE MI </h2>

          <div className='space-y-8 text-sm md:text-lg leading-relaxed text-center md:text-left'>
            <p>
              Hola, soy Diego. Un desarrollador jr residente en Venezuela especializado en React y Tailwind CSS.
              Como habrás notado me gusta el desarrollo web y la estética retro 8-bits.
            </p>
            <p>
              Estoy emocionado por seguir aprendiendo y creciendo en el mundo del desarrollo web.
            </p>
            <p className='text-purple-400 mt-8'>
              ¡Gracias por visitar mi portafolio!
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className='w-full py-10 bg-stone-950 border-t border-stone-900 flex flex-col justify-center items-center text-center px-6'>
        <p className='font-pixel text-stone-600 text-[8px] md:text-[10px] mb-3'>
          © 2026 Diego Henriquez. Todos los derechos reservados.
        </p>
        <p className='font-pixel text-stone-700 text-[8px] md:text-[10px]'>
          Componente hover pixeleado inspirado en Ryan Mulligan
        </p>
      </footer>
    </div>
  )
}

export default App;