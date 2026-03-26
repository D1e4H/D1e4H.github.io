import React from 'react';
import GitHubIcon from '../src/assets/svg/github.svg';
import LinkedInIcon from '../src/assets/svg/linkedin.svg';
import GmailIcon from '../src/assets/svg/gmail.svg';


const RetroCircles = (icon) => {
    const circleData = [
        { id: '01', title: 'LINKEDIN', icon: <img src={LinkedInIcon} alt="LinkedIn" className='h-5 w-5' />, color: 'border-purple-500', link: 'https://www.linkedin.com/in/diego-henriquezar/' },
        { id: '02', title: 'GITHUB', icon: <img src={GitHubIcon} alt="GitHub" className='h-5 w-5' />, color: 'border-blue-500', link: 'https://github.com/D1e4H' },
        { id: '03', title: 'GMAIL', icon: <img src={GmailIcon} alt="Gmail" className='h-5 w-5' />, color: 'border-green-500', link: 'mailto:Diegoandrezenriquez@gmail.com' },
    ];

    return (
        <>
            <div className="flex-col lg:flex-row font-pixel flex gap-10 lg:mt-20 mb-20 items-center justify-center bg-none min-h-20">
                {circleData.map((circle) => (
                    <a href={circle.link} target="_blank" rel="noopener noreferrer">
                        <div
                            key={circle.id}
                            className={`group relative w-48 h-48 rounded-full bg-stone-950 border-4 ${circle.color} hover:border-white transition-all duration-300 hover:-translate-y-3 flex flex-col items-center justify-center overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]`}
                        >

                            <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>

                            <div className={`absolute inset-0 rounded-full border-4 ${circle.color} opacity-30 blur-[6px] group-hover:opacity-100 transition-opacity`}></div>

                            <div className="relative z-10 text-center flex flex-col items-center gap-2">
                                <span className={` text-[10px] ${circle.color.replace('border-', 'text-')} group-hover:text-white transition-colors`}></span>
                                <span className="text-4xl group-hover:scale-110 transition-transform">{circle.icon}</span>
                                <h3 className={`text-[10px] text-stone-300 group-hover:text-white transition-colors`}>{circle.title}</h3>
                            </div>


                        </div>
                    </a>
                ))}
            </div>
            <div className='w-screen flex align-center justify-center items-center relative'>
                <button className="group  px-8 py-3 bg-stone-950 border-2 border-stone-700 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 active:translate-y-0.5">

                
                    <div className="flex items-center gap-3">
                        <span className="font-pixel text-[10px] tracking-widest text-stone-400 group-hover:text-white transition-colors">
                            DOWNLOAD CV
                        </span>

                        <svg
                            className="w-4 h-4 text-purple-500 group-hover:animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>

                    <div className="inset-0 z-[-1] bg-purple-500/0 group-hover:bg-purple-500/10 blur-xl transition-all duration-500"></div>
                </button>
            </div>
        </>
    );
};

export default RetroCircles;