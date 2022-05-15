import { Link } from 'gatsby'
import React from 'react'
import ButtonCustom  from './ButtonCustom'
import { SectionCustom } from './indexComponents'

const Inicio = () => {
    return <SectionCustom className='flex flex-col justify-center container px-[150px] py-[100px]'>
        <div>
            <h1 className='text-cyan-300 font-mono mb-5'>Hi, my name is</h1>
        </div>
        <div>
            <h2 className='text-slate-300 font-sans text-7xl capitalize font-bold tracking-tight mb-3'>khristopher pineda.</h2>
        </div>
        <div>
            <h3 className='text-slate-400 font-sans text-7xl capitalize font-bold tracking-tight mb-5'>
                I build beautifull web sites.
            </h3>
        </div>
        <div>
            <p className='w-8/12 text-slate-400 font-sans text-lg mb-5'>I`m a Software Developer specializing in building (and occasionally designing) web sites.</p>
        </div>
        <div>
            <Link
                to="/resume+khristopher2022.pdf"
                >
                <ButtonCustom text='Download Resumen' />
            </Link>
        </div>
    </SectionCustom>
}

export default Inicio;