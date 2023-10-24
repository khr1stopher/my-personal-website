import { useEffect, useState } from 'react'

const Header = () => {

    const [shadowHeader, setshadowHeader] = useState(false)

    useEffect(() => {
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

    return <header style={{ transition: '.6s', zIndex: 50 }} className={`${shadowHeader ? 'shadow-black-500/40 shadow-xl' : ''} top-0 backdrop-blur-sm fixed w-full`}>
        <nav className="flex flex-col items-center">
            <div className="container flex justify-between items-center max-w-6xl mx-auto px-8">
                <div className="flex w-full justify-start">
                    <div className="flex items-center py-5 text-slate-300 font-sans capitalize font-bold tracking-tighter text-base">
                        Khristopher Pineda
                    </div>
                </div>
                <div className="flex md:flex items-center space-x-1">
                    <div className="links">
                        <ol className='flex px-2'>

                        </ol>
                    </div>
                </div>
            </div>
        </nav>
    </header>
}

export default Header;