import { Link } from 'gatsby'
import React from 'react'
import ButtonCustom  from './ButtonCustom'
import { SectionInicioCustom, H1PresentCustom, H2Custom, H3Custom, PCustom } from './indexComponents'

const Inicio = () => {
    return <SectionInicioCustom className='flex flex-col justify-center container px-[150px] py-[100px]'>
        <div>
            <H1PresentCustom className='text-cyan-300 font-mono mb-5'>Hi, my name is</H1PresentCustom>
        </div>
        <div>
            <H2Custom className='text-slate-300 font-sans text-7xl capitalize font-bold tracking-tight mb-3'>khristopher pineda.</H2Custom>
        </div>
        <div>
            <H3Custom className='text-slate-400 font-sans text-7xl capitalize font-bold tracking-tight mb-5'>
                I build beautifull web sites.
            </H3Custom>
        </div>
        <div>
            <PCustom className='w-8/12 text-slate-400 font-sans text-lg mb-5'>I`m a Software Developer specializing in building (and occasionally designing) web sites.</PCustom>
        </div>
        <div>
            <Link
                to="/resume+khristopher2022.pdf"
                >
                <ButtonCustom text='Download Resumen' />
            </Link>
        </div>
    </SectionInicioCustom>
}

export default Inicio;