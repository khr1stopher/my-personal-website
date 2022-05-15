import * as React from 'react'
import { useEffect, useState } from 'react'
import ButtonCustom  from './ButtonCustom'
import { ListCustom } from './indexComponents'

const NavBar = () => {
    const [shadowHeader, setshadowHeader] = useState(false)
    
    const listPage = [
        {name: 'About', elementId: 'aboutSection'},
        {name: 'Experience',  elementId: 'experienceSection'},
        {name: 'Works',  elementId: 'worksSection'},
        {name: 'Contact',  elementId: 'contactSection'},
    ]

    const scrollSection = (id: string) => {
        if (window !== undefined && document !== undefined) {
            let element = document.querySelector(`#${id}`)
            element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            //     inline: 'center',
            })
        }
    }

    useEffect(() => {

        if(window !== undefined) {
            window?.addEventListener('scroll', () => {
                if (window?.scrollY > 100) {
                    setshadowHeader(true)
                } else {
                    setshadowHeader(false)
                }
            })
        }
    })

    return <header style={{transition: '.6s', zIndex: 50}} className={`${shadowHeader ? 'shadow-black-500/40 shadow-xl' : ''} backdrop-blur-sm fixed w-full text-[F0F2EF]`}>
        <nav className={`flex items-center ${ shadowHeader ? '' : 'h-[100px]'}`}>
            <div className="container max-w-6xl mx-auto px-10">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="mr-4">
                            <a href="/" className="flex items-center py-5 px-3 text-gray-700">
                                <span style={{color: 'var(--c3)', visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s, transform 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s'}} className="text-{16px} font-mono logo">
                                    <span className='text-slate-400'>{'<'}</span>khristopher<span className='text-slate-400'>{'/>'}</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex hidden md:flex items-center space-x-1">
                        <div className="links">
                            <ol className='flex px-2'>
                                {listPage.map((Object, i) => {
                                    return <ListCustom key={i} className='hover:-translate-y-1 cursor-pointer font-mono p-2 text-[13px] text-slate-400 font-[100] hover:hover:text-cyan-300' onClick={() => scrollSection(Object.elementId)}>
                                        <span style={{color: 'var(--c3)'}} className='mr-1 '>
                                            0{i+1}.
                                        </span>
                                        {Object.name}
                                    </ListCustom>
                                })}
                            </ol>
                        </div>
                        <div className="resumen flex hidden md:flex items-center space-x-1">
                            <div className="button">
                                <ButtonCustom text="Resumen" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    mobile button
                </div>
            </div>
        </nav>
    </header>
}

export default NavBar;