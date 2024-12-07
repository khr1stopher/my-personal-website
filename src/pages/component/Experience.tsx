import { useState } from "react";
import experienceData from "../../assets/info.json";
import { motion } from "framer-motion";

interface ExperienceContainerProps {
  experienceData: Experience[];
}

interface Experience {
  company: string;
  position: string;
  site: string;
  description: string;
  technologies: string[];
  projects: Project[];
  startDate: string;
  endDate: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export default function Experience() {
  return <>
    <div className="experience-head text-center font-sans">
      <h2 className="font-bold tracking-tighter text-4xl">
        My Experience 📌
      </h2>
      <p className="text-slate-400 font-bold text-base mt-1">
        Professional Experience
      </p>
    </div>
    <ExperienceContainer experienceData={experienceData} />
  </>
}

function ExperienceContainer({ experienceData }: ExperienceContainerProps) {

  const [showMore, showMoreSet] = useState(false);

  const variants = {
    open: { display: 'block', opacity: 1, y: 0 },
    closed: { display: 'none', opacity: 0, y: 100 },
  }

  return <div className="experience-container max-w-40 flex flex-col items-center md:px-[10%] my-3 font-['Satoshi']" >
    {
      experienceData.map((exp, index) => (
        <motion.div className="card-exp my-2 p-8 rounded-2xl" key={index} animate={index < 1 ? "open" : showMore ? "open" : "closed"} variants={variants} transition={{ duration: 0.1, delay: index * 0.1 }}>
          <div className="job-title flex flex-col md:flex-row justify-between py-2">
            <div>
              <a href={exp.site} className="font-semibold hover:text-[#faac37]" target="_blank">
                {exp.company}
              </a>
              <span> • </span>
              <span className="font-bold text-gray-300">{exp.position}</span>
            </div>
            <div className="italic text-sm">
              <span>
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
          </div>
          <p className="job-description mb-2 text-gray-200">{exp.description}</p>
          <ul className="job-content ml-4 list-disc text-gray-300">
            {exp.projects.map((project, index) => (
              <li className="leading-2 mb-1" key={index}>
                <b className="text-[#faac37]">{project.title}</b>&nbsp;
                <span>{project.description}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))
    }
    <a onClick={() => showMoreSet(!showMore)} className="px-5 py-2 text-center cursor-pointer w-auto bg-neutral-800 text-slate-200 m-auto" style={{borderRadius: 'calc(0.5rem - 2px)'}}>
      <span>
        look more in my cv 😊
      </span>
    </a>
  </div>
}