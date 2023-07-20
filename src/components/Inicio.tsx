import { Link } from 'gatsby'
import React from 'react'
import { SectionPage, ButtonCustom, SocialContainerCustom, Social } from './indexComponents'
import { FaNpm } from 'react-icons/fa'
import { FiCodepen, FiGithub, FiGitlab, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Inicio = () => {
    return <SectionPage className='mt-0 pt-32'>
        <div>
            <h1 className='
            text-cyan-300 font-mono text-base mb-3
            '>Hi, my name is</h1>
        </div>
        <div>
            <h2 className='
            text-slate-300 font-sans capitalize font-bold tracking-tighter text-4xl
            md:text-5xl md:mb-2
            lg:text-7xl'>
                khristopher pineda
            </h2>
        </div>
        <div>
            <h3 className='text-slate-400 font-sans capitalize font-bold tracking-tighter text-4xl mb-3
            md:text-5xl
            lg:text-6xl'>
                passionate about computer science
            </h3>
        </div>
        <div>
            <p className='w-full text-slate-400 font-sans text-base mb-5 leading-0
            md:text-lg md:w-8/12
            lg:w-6/12'>
                I'm a dedicated software developer who specializes in creating and designing high-quality websites.
            </p>
        </div>
        <div className='flex items-center flex-wrap'>
            <a
                href="/resume+khristopher.pdf"
                className='w-full md:w-auto'
                target={'_blank'}
            >
                <ButtonCustom text='Resumen ⬇️' />
            </a>
            <div className="ml-5
                md:flex hidden 
                items-center flex-wrap text-slate-300">
                <a href="https://codepen.io/khristopher-pineda" target="_blank">
                    <Social>
                        <FiCodepen />
                    </Social>
                </a>
                <a href="https://github.com/khr1stopher" target="_blank">
                    <Social>
                        <FiGithub />
                    </Social>
                </a>
                <a href="https://gitlab.com/khristopher_pineda" target="_blank">
                    <Social>
                        <FiGitlab />
                    </Social>
                </a>
                <a href="https://www.instagram.com/khristophito/" target="_blank">
                    <Social>
                        <FiInstagram />
                    </Social>
                </a>
                <a href="#">
                    <Social>
                        <FiLinkedin />
                    </Social>
                </a>
                <a href="https://www.npmjs.com/~khr1stopher" target="_blank">
                    <Social>
                        <FaNpm style={{ height: '2rem', width: '2rem' }} />
                    </Social>
                </a>
                <a href='mailto:kkromans009@gmail.com' className='underline'>
                    <Social>
                        <span>
                            kkromans009@gmail.com
                        </span>
                    </Social>
                </a>
            </div>
        </div>
    </SectionPage>
}

export default Inicio;