
import { WorkList } from '../../components/service/work-list';
import WorkCardComponent from '../../components/WorkCardComponent';

const Work = () => {
    return (
        <>
            <div className="work-head text-center font-sans font-bold ">
                <h2 className="tracking-tighter text-4xl">
                    My Work 💼
                </h2>
                <p className="text-slate-400 text-base mt-1">
                    Projects I've contributed to
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
