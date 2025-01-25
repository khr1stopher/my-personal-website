import screenshot1 from '../../assets/Screenshot-1.jpeg';
import screenshot2 from '../../assets/Screenshot-2.jpeg';
import screenshot3 from '../../assets/Screenshot-3.jpeg';

import { angular, astro, dotnet, node, postgresql, python, react, redis, tailwindcss, vue } from '../../components/service/tech-img';
import WorkCardComponent from '../../components/WorkCardComponent';

const WorkList = [
    { id: 1, img: screenshot1, description: 'Job Search Platform', link: "https://github.com/khr1stopher/Job-Search-Platform",technologies: [node, vue, dotnet, postgresql, redis, tailwindcss] },
    { id: 2, img: screenshot2, description: 'Pricing page', link: "https://github.com/khr1stopher/Pricing-page", technologies: [node, astro, react, tailwindcss] },
    { id: 3, img: screenshot3, description: 'Dashboard UI', link: "https://github.com/khr1stopher/Dashboard-UI", technologies: [node, angular, tailwindcss, redis, postgresql, python] },
]

const Work = () => {
    return (
        <>
            <div className="work-head text-center font-sans font-bold ">
                <h2 className="tracking-tighter text-4xl">
                    My Work 💼
                </h2>
                <p className="text-slate-400 text-base mt-1">
                    Current projects I'm working on
                </p>
            </div>
            <div className="work-container">
                <div className="grid-wrapper">
                    <div className="ol flex flex-wrap gap-6 justify-around">
                        {
                            WorkList.map((work) => {
                                return <WorkCardComponent key={work.id} img={work.img} description={work.description} technologies={work.technologies} link={work.link} />;
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Work;
