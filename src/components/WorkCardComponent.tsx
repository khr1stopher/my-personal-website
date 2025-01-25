
interface WorkCardProps {
    description: string;
    img: {
        src: string;
    };
    technologies: ImageMetadata[];
  }

const WorkCardComponent = (props: WorkCardProps) => {
    return (<li className="list-none  text-white rounded-xl w-full lg:w-1/3 md:w-5/6 mx-auto lg:mx-0 py-5 flex-[0_0_100%] md:flex-[0_0_30%]">
        <div className="img-website-container">
            <img className="rounded" src={props.img.src} alt={props.description} />
        </div>
        <div className="content-website-container py-3">
            <h4 className='text-slate-400 font-sans font-bold text-lg md:text-base mb-1'>{props.description}</h4>
            <p className='font-sans text-base flex gap-1'>
                {
                    props.technologies.map((technology, index) => {
                        return <img key={index} className="h-auto w-[1.5rem] md:w-[1rem]" src={technology.src} />;
                    })
                }
            </p>
        </div>
    </li>);
}

export default WorkCardComponent;