import { platform } from "os";
import React from "react";
import { CardProjectCustomProps } from '../interfaces/CardProjectCustomProps'
import ButtonCustom from "./ButtonCustom";
import CardProjectCustom from "./cardsprojects";
import { SectionCustom, TitleCustom } from "./indexComponents";
import { Link } from "gatsby"

const Works = () => {

    const Works: Array<CardProjectCustomProps> = [{
        projectName: 'kompresor',
        projectDescription: "CLI para facilitar la compresion 'br' para archivos.",
        technologys: ['javacript', 'brotli', 'express'],
        links: [{
            platform: 'npm',
            link: 'https://www.npmjs.com/package/kompresor'
        }, {
            platform: 'gitlab',
            link: 'https://gitlab.com/khristopher_pineda/compresor'
        }]
    }, {
        projectName: 'log-style',
        projectDescription: "sirve para establecer un estandar de colores en consola",
        technologys: ['typescript'],
        links: [{
            platform: 'npm',
            link: 'https://www.npmjs.com/package/log-styled'
        }, {
            platform: 'gitlab',
            link: 'https://gitlab.com/khristopher_pineda/cmd-style'
        }]
    }, {
        projectName: 'kompresor-interface',
        projectDescription: "interface para el cli de node kompresor",
        technologys: [
            'typescript',
            'vue',
            'bulma',
            'electron'
        ],
        links: [{
            platform: 'gitlab',
            link: ''
        }]
    }, {
        projectName: 'page-coffe-shop',
        projectDescription: 'landing page para una tienda de cafe',
        technologys: [
            'html/css',
            'bootstrap',
            'javascript'
        ],
        links: [
            {
                platform: 'github',
                link: 'https://github.com/khr1stopher/page_Coffe_shop'
            }
        ]
    },
    {
        projectName: 'landing-kudiska',
        projectDescription: 'landing page desarrollada para el lanzamiento de una nueva App.',
        technologys: [
            'bootstrap',
            'angular',
            'typescript'
        ],
        links: [
            {
                platform: 'github',
                link: 'https://github.com/khr1stopher/landing_kudiska'
            }
        ]
    },{
        projectName: 'App-init-electron',
        projectDescription: 'repositorio creado para facilitar la creacion de apps con electronjs',
        technologys: [
            'javascript',
            'electronjs'
        ],
        links: [
            {
                platform: 'github',
                link: 'https://github.com/khr1stopher/App_init_electron'
            }
        ]
    }]

    return <SectionCustom
        id="worksSection"
        className="
        flex
        flex-col
        items-center
        justify-center
        px-[150px]
        py-[100px]">
        <div className="titulo w-full flex items-center justify-center mb-3">
            <TitleCustom className="font-sans text-slate-300 block text-center font-bold">
                Other Projects
            </TitleCustom>
        </div>
        <a href="">
            <p className="sub text-cyan-300 mb-3">Timeline of the projects that I have developed since I am a software developer</p>
        </a>
        <div className="w-full content grid grid-cols-3 mb-3">
            {
                Works.map((work, index) => {
                    return <CardProjectCustom
                        projectName={work.projectName}
                        projectDescription={work.projectDescription}
                        technologys={work.technologys}
                        links={work.links}
                        key={index} />
                })
            }
        </div>
        <div className="buton">
            <Link
            to="/timeline"
            partiallyActive={true}>
                <ButtonCustom text="view timeline projects" />
            </Link>
        </div>
    </SectionCustom>
}

export default Works;