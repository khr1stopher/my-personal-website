import screenshot1 from '../assets/Screenshot-1.jpeg';
import screenshot2 from '../assets/Screenshot-2.jpeg';
import screenshot3 from '../assets/Screenshot-3.jpeg';

import { angular, astro, dotnet, node, postgresql, python, react, redis, tailwindcss, vue } from './service/tech-img';

const Work = () => {
    return (
        <div className="work-container">
            <div className="grid-wrapper">
                <div className="ol flex flex-wrap gap-6">
                    {/* First Item */}
                    <li className="list-none pb-0 text-white rounded-xl w-full lg:w-1/3 md:w-5/6 mx-auto lg:mx-0 py-5 flex-[0_0_100%] md:flex-[0_0_30%]">
                        <div className="img-website-container">
                            <img className="rounded" src={screenshot1.src} alt="Job Search Platform" />
                        </div>
                        <div className="content-website-container py-3">
                            <h4 className='text-slate-400 font-sans font-bold text-lg md:text-base mb-1'>Job Search Platform</h4>
                            <p className='font-sans text-base flex gap-1'>
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={node.src} alt="node" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={vue.src} alt="vue" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={dotnet.src} alt="dotnet" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={postgresql.src} alt="postgresql" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={redis.src} alt="redis" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={tailwindcss.src} alt="tailwindcss" />
                            </p>
                        </div>
                    </li>
                    
                    {/* Second Item */}
                    <li className="list-none pb-0 text-white rounded-xl w-full lg:w-1/3 md:w-5/6 mx-auto lg:mx-0 py-5 flex-[0_0_100%] md:flex-[0_0_30%]">
                        <div className="img-website-container">
                            <img className="rounded" src={screenshot2.src} alt="Pricing page" />
                        </div>
                        <div className="content-website-container py-3">
                            <h4 className='text-slate-400 font-sans font-bold text-lg md:text-base mb-1'>Pricing page</h4>
                            <p className='font-sans text-base flex gap-1'>
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={node.src} alt="node" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={astro.src} alt="astro" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={react.src} alt="react" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={tailwindcss.src} alt="tailwindcss" />
                            </p>
                        </div>
                    </li>
                    
                    {/* Third Item */}
                    <li className="list-none pb-0 text-white rounded-xl w-full lg:w-1/3 md:w-5/6 mx-auto lg:mx-0 py-5 flex-[0_0_100%] md:flex-[0_0_30%]">
                        <div className="img-website-container">
                            <img className="rounded" src={screenshot3.src} alt="Dashboard UI" />
                        </div>
                        <div className="content-website-container py-3">
                            <h4 className='text-slate-400 font-sans font-bold text-lg md:text-base mb-1'>Dashboard UI</h4>
                            <p className='font-sans text-base flex gap-1'>
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={node.src} alt="node" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={angular.src} alt="angular" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={tailwindcss.src} alt="tailwindcss" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={redis.src} alt="redis" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={postgresql.src} alt="postgresql" />
                                <img className="h-auto w-[1.5rem] md:w-[1rem]" src={python.src} alt="python" />
                            </p>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default Work;
