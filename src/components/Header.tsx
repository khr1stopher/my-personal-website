import { useEffect, useState } from 'react'
import en from '../assets/en.svg'
import fr from '../assets/fr.svg'

enum language {
    EN = 'en',
    FR = 'fr'
}

const Header = () => {

    const [shadowHeader, setshadowHeader] = useState(false)
    const [lang, setlang] = useState(language.EN)

    const changeLanguage = (newLanguage: language) => {
        setlang(newLanguage);
    };

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

    return <header style={{ transition: '.6s', zIndex: 50 }} className={`${shadowHeader ? 'shadow-black-500/40 shadow-xl' : ''} top-0 backdrop-blur-lg fixed w-full`}>
        <nav className="flex flex-col items-center">
            <div className="container flex justify-between items-center max-w-6xl mx-auto px-8">
                <div className="flex w-full justify-start">
                    <div className="flex items-center py-5 text-slate-300 font-sans capitalize font-bold tracking-tighter text-base">
                        Khristopher Pineda 🌙
                    </div>
                </div>
                <div className="flex md:flex items-center space-x-1">
                    <div className="links">
                        <ol className='flex px-2 gap-3'>
                            <button className='w-7 h-7' onClick={() => changeLanguage(language.EN)}>
                                <img className={`rounded-sm ${ lang == language.EN ? "opacity-100" : "opacity-75" }`} src={en.src} alt="en" />
                            </button>
                            <button className='w-7 h-7' onClick={() => changeLanguage(language.FR)}>
                                <img className={`rounded-sm ${ lang == language.FR ? "opacity-100" : "opacity-75" }`} src={fr.src} alt="fr" />
                            </button>
                        </ol>
                    </div>
                </div>
            </div>
        </nav>
    </header>
}

export default Header;