import { Link } from 'gatsby'
import React from 'react'
import { SectionPage, ButtonCustom } from './indexComponents'

const Inicio = () => {
    return <SectionPage className='justify-center md:min-h-auto md:h-screen' hScreem='h-screen' maxHeight='auto'>
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
                khristopher pineda.
            </h2>
        </div>
        <div>
            <h3 className='text-slate-400 font-sans capitalize font-bold tracking-tighter text-4xl mb-3
            md:text-5xl
            lg:text-6xl'>
                passionate about computer science.
            </h3>
        </div>
        <div>
            <p className='w-full text-slate-400 font-sans text-base mb-5 leading-0
            md:text-lg md:w-8/12
            lg:w-6/12'>
                I`m a software developer who is dedicated to creating and designing web sites of quality.
            </p>
        </div>
        <div>
            <a
                href="/resume+khristopher.pdf"
                >
                <ButtonCustom text='Download Resumen' />
            </a>
        </div>
    </SectionPage>
}

export default Inicio;