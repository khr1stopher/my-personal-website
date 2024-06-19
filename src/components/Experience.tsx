import experienceData from '../assets/info.json'

const Experience = () => {
  return <div className="experience-container flex flex-col items-center px-[10%] my-3">
    {experienceData.map((exp, index) => {
      return <div className="card-exp my-2" key={index}>
        <div className="job-title flex justify-between py-2">
          <div>
            <span className='font-semibold'>{exp.company}</span> • <span className='font-bold text-gray-300'>{exp.position}</span>
          </div>
          <div className='italic'>
            <span>{exp.start_date} - {exp.end_date}</span>
          </div>
        </div>
        <ul className="ml-6 job-content">
          <li className='leading-4'>{exp.description}</li>
          { exp.projects.map((project, index) => { return <li key={index}>-{ project.description } </li> }) }
          <li className='leading-4 mt-2'><span className='font-bold'>Skills:</span> {exp.technologies.map((tech, index) => { const isLastItem = index === exp.technologies.length - 1; return `${tech}${isLastItem ? '.' : ', '}`; }) } </li>
        </ul>
      </div>
    })
    }
  </div>
}
export default Experience;