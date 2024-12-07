import { useEffect, useState } from 'react'
import en from '../assets/en.svg'
import fr from '../assets/fr.svg'

import { delay, motion } from 'framer-motion'

enum language {
    EN = 'en',
    FR = 'fr'
}

const Header = () => {

    const [shadowHeader, setshadowHeader] = useState(false)
    const [lang, setlang] = useState(language.EN)
    const item = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -10 },
    }

    const changeLanguage = (newLanguage: language) => {
        let actual_lang = window.location.pathname == '/' ? language.EN : language.FR;

        if (actual_lang != newLanguage) {
            window.location.href = newLanguage == language.EN ? `/` : `/fr/`
        }
    };

    useEffect(() => {

        
        if (window !== undefined) {
            setlang(window.location.pathname == '/' ? language.EN : language.FR)
            
            window?.addEventListener('scroll', () => {
                if (window?.scrollY > 100) {
                    setshadowHeader(true)
                } else {
                    setshadowHeader(false)
                }
            })
        }
    })

    return <motion.header transition={{ delay: 0.6 }} className={`${shadowHeader ? 'shadow-black-500/40 shadow-xl' : ''} top-0 fixed w-full z-10 backdrop-blur-sm`}>
        <nav className="flex flex-col items-center">
            <div className="container flex justify-between items-center max-w-6xl mx-auto px-8">
                <div className="flex w-full justify-start">
                    <motion.div initial="hidden" animate="visible" variants={item} transition={{ duration: 0.2, delay: 0.10 }}
                    className="flex items-center py-5 text-slate-300 font-sans capitalize font-bold tracking-tighter text-base">
                        Khristopher Pineda
                    </motion.div>
                </div>
                <div className="flex md:flex items-center space-x-1">
                    <motion.div initial="hidden" animate="visible" variants={item} transition={{ duration: 0.2, delay: 0.3 }}
                    className="links">
                        <ol className='flex px-2 gap-3'>
                            <button className='w-7 h-7' onClick={() => changeLanguage(language.EN)}>
                                <img className={`rounded ${ lang == language.EN ? "opacity-100" : "opacity-75" }`} src={en.src} alt="en" />
                            </button>
                            <button className='w-7 h-7' onClick={() => changeLanguage(language.FR)}>
                                <img className={`rounded ${ lang == language.FR ? "opacity-100" : "opacity-75" }`} src={fr.src} alt="fr" />
                            </button>
                        </ol>
                    </motion.div>
                </div>
            </div>
        </nav>
    </motion.header>
}

export default Header;