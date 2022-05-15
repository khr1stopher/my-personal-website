import React from "react";
import { CardProjectCustomProps } from "../interfaces/CardProjectCustomProps";
import { FiFolder, FiGithub, FiGitlab } from 'react-icons/fi'
import { FaNpm } from 'react-icons/fa'

const CardProjectCustom = (props: CardProjectCustomProps) => {
    return <div className="card m-3" style={{backgroundColor: 'var(--c5)'}}>
        <div className="relative flex flex-col h-full items-center justify-between p-5 shadow-lg">
            <div className="flex justify-between icons w-full mb-3">
                <div className="folder">
                    <FiFolder color="var(--c3)" fontSize="2rem"/>
                </div>
                <div className="linksicon flex items-center">
                    { props.links != undefined ? props.links.map((link, index) => {
                            return <a className="mr-2" target="_blank" href={link.link} key={index}>{
                                link.platform == 'github' ? <FiGithub className="text-slate-500" /> :
                                link.platform == 'gitlab' ? <FiGitlab className="text-slate-500" /> :
                                link.platform == 'npm' ? <FaNpm className="text-slate-500" fontSize="1.25rem"/> :
                                ''
                            }</a>
                        }) : ''
                    }
                </div>
            </div>
            <h2 className="title w-full text-xl font-bold text-slate-200">
                { props.projectName }
            </h2>
            <p className="w-ful text-md text-slate-500 mb-3">
                { props.projectDescription }
            </p>
            <div className="w-full tecnologias flex">
                {
                    props.technologys != undefined ? props.technologys.map((tecnologi, index)=> {
                        return <div className="tecnologi capitalize text-slate-500 text-xs font-mono mb-2" key={index}>
                            { tecnologi }<span className="mx-1">{ props.technologys != undefined ?
                            props.technologys.length == (index + 1) ?
                            '' :
                            '•' :
                            '' }
                            </span>
                        </div>
                    }) : ['']
                }
            </div>
        </div>
    </div>
}

export default CardProjectCustom;