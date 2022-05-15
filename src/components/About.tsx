import React from "react";
import { TitleCustom, SectionCustom, LinkCustom } from "./indexComponents";

const About = () => {
    return <SectionCustom
        id="aboutSection"
        className="grid
        grid-cols-12
        items-center
        justify-center
        px-[150px]
        py-[100px]">
            <div className="col-start-1 col-end-12 titulo w-full flex items-center mb-3">
                <TitleCustom className="font-sans text-slate-300 block font-bold">
                    About Me 
                </TitleCustom>
                <div style={{height: '1px', border: 'none'}} className="bg-slate-600 ml-5 w-[300px]" ></div>
            </div>
            <div className="col-start-1 col-end-7 content w-full">
                <div className="aboutMeText text-slate-400">
                    <p className="mb-2">
                        Hello! My name is Khristopher Pineda, I am passionate about everything that is computer science.    
                    </p>
                    <p className="mb-2">
                        I began to be interested in programming in 2018, at that time I was programming for fun. In the year 2020 I had to decide whether to continue with the university or start working, choosing the latter being one of the best decisions I have made since I learned much more thanks to my work.
                    </p>
                    <p className="mb-2">
                        Fast forward to today, and I have had the privilege of working as a freelancer at a <LinkCustom>financial institution</LinkCustom>, a <LinkCustom>technology development agency</LinkCustom>, a <LinkCustom>billing company</LinkCustom>, a <LinkCustom>american development agency</LinkCustom> and others smaller design and development projects.
                    </p>
                    <p className="mb-2">
                        My current goal is to create sites focused on the end user, giving them a satisfactory user experience.
                    </p>
                </div>
            </div>
            <div className="col-start-8 col-end-12 content">
                <div className="aboutMeImage bg-cyan-400 rounded-lg">
                    <img style={{  objectFit: 'cover' }} className="h-[300px] w-full rounded-lg" src="images/mephoto.png" alt="" />
                </div>
            </div>
    </SectionCustom>
}

export default About;