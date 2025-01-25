
interface WorkCardProps {
    description: string;
    img: {
        src: string;
    };
    technologies: ImageMetadata[];
    link?: string;
  }

const WorkCardComponent = (props: WorkCardProps) => {
    return (<li className="list-none rounded text-white w-full lg:w-1/3 md:w-5/6 mx-auto lg:mx-0 py-5 flex-[0_0_100%] md:flex-[0_0_30%] cursor-pointer group transition-transform hover:-translate-y-1 duration-300">
        <a href={props.link} target="_blank">
            <div className="img-website-container relative aspect-[16/12] overflow-hidden rounded-t-lg">
                <img className="rounded-t-lg object-cover transition-transform group-hover:scale-105 duration-300 group-hover:backdrop-blur-md " src={props.img.src} alt={props.description} />
            </div>
            <div className="content-website-container py-3 px-4 bg-[#00000040] rounded-b-lg">
                <h4 className='text-slate-400 font-sans font-bold text-lg md:text-base mb-1'>{props.description}</h4>
                <p className='font-sans text-base flex gap-1'>
                    {
                        props.technologies.map((technology, index) => {
                            return <img key={index} className="h-auto w-[1.5rem] md:w-[1rem]" src={technology.src} />;
                        })
                    }
                </p>
            </div>
        </a>
    </li>);
}

export default WorkCardComponent;