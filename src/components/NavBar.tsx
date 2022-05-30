import * as React from 'react'
import { Link } from 'gatsby'
import { useEffect, useState } from 'react'
import ButtonCustom from './utilities/ButtonCustom'
import { HeaderCustom, NavCustom, ListCustom, Kcontainer, Logo, Hamburger } from './indexComponents'
import _EventBus from '../services/EventBus'
const NavBar = () => {
    const [shadowHeader, setshadowHeader] = useState(false)
    const [hamburgerActive, sethamburgerActive] = useState(false)

    const listPage = [
        { name: 'About', elementId: 'aboutSection' },
        { name: 'Experience', elementId: 'experienceSection' },
        { name: 'Works', elementId: 'worksSection' },
        { name: 'Contact', elementId: 'contactSection' },
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
            _EventBus.$on({EventName: "hamburguer:resize", fn: () => {
                sethamburgerActive(false)
            }})
            _EventBus.$on({EventName: "hamburguer:click", fn: () => {
                sethamburgerActive(!hamburgerActive)
            }})
        if (window !== undefined) {
            window?.addEventListener('scroll', () => {
                if (window?.scrollY > 100) {
                    setshadowHeader(true)
                } else {
                    setshadowHeader(false)
                }
            })
        }
        
    })

    return <HeaderCustom style={{ transition: '.6s', zIndex: 50 }} className={`${shadowHeader ? 'shadow-black-500/40 shadow-xl' : ''} top-0 backdrop-blur-sm fixed w-full text-[F0F2EF]`}>
        <NavCustom className={`flex flex-col items-center ${shadowHeader ? '' : 'h-[100px]'}`}>
            <Kcontainer className="container flex justify-between items-center max-w-6xl mx-auto px-8">
                <div className="flex w-full justify-between">
                    <div className="flex">
                        <div className="mr-4">
                            <Logo href="/" className="flex items-center py-5 px-0 text-gray-700">
                                <span style={{ color: 'var(--c3)', visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s, transform 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s' }} className="text-{16px} font-mono logo">
                                    <span className='text-slate-400'>{'<'}</span>khristopher<span className='text-slate-400'>{'/>'}</span>
                                </span>
                            </Logo>
                        </div>
                    </div>
                    <div className="flex hidden md:flex items-center space-x-1">
                        <div className="links">
                            <ol className='flex px-2'>
                                {listPage.map((Object, i) => {
                                    return <ListCustom key={i} className='hover:-translate-y-1 cursor-pointer font-mono p-2 text-[13px] text-slate-400 font-[100] hover:hover:text-cyan-300' onClick={() => scrollSection(Object.elementId)}>
                                        <span style={{ color: 'var(--c3)' }} className='mr-1 '>
                                            0{i + 1}.
                                        </span>
                                        {Object.name}
                                    </ListCustom>
                                })}
                            </ol>
                        </div>
                        <div className="resumen flex hidden md:flex items-center space-x-1">
                            <div className="button">
                                <a
                                    href="/resume+khristopher.pdf"
                                    >
                                    <ButtonCustom text='Resumen' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <Hamburger>
                        <div className={`absolute top-0 left-0 flex items-center container-of-links w-full h-[100vh] z-[-1] flex justify-center`}>
                            <div className="container pt-10">
                                {listPage.map((Object, i) => {
                                    return <li
                                    onClick={() => {
                                        _EventBus.$emit("list:click")
                                        scrollSection(Object.elementId)
                                    }}
                                    key={i}
                                    className='hover:bg-white/10 active:bg-white/10 focus:bg-white/10 select-none m-3 cursor-pointer text-2xl font-bold font-sans list-none p-3 text-center text-slate-300'>
                                        {Object.name}.
                                    </li>
                                })}
                            </div>
                        </div>
                    </Hamburger>
                </div>
            </Kcontainer>
        </NavCustom>
    </HeaderCustom>
}

export default NavBar;