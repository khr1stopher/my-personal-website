import experienceData from '../assets/info.json'

const Experience = () => {
  return <div className="experience-container flex flex-col items-center md:px-[10%] my-3">
    {experienceData.map((exp, index) => {
      return <div className="card-exp my-2" key={index}>
        <div className="job-title flex justify-between py-2">
          <div>
            <span className='font-semibold'>{exp.company}</span> • <span className='font-bold text-gray-300'>{exp.position}</span>
          </div>
          <div className='italic'>
            <span>{exp.startDate} - {exp.endDate}</span>
          </div>
        </div>
        <ul className="ml-6 job-content">
          <li className='leading-4'>{exp.description}</li>
        </ul>
      </div>
    })
    }
  </div>
}
export default Experience;