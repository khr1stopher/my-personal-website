import * as React from "react";
import LoadingPage from '../components/loadingPage'
import workspace from '../services/timelineInfo'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { CgNpm } from 'react-icons/cg'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { Link } from "gatsby";
import '../index.scss'

const Timeline = () => {

    const Icons = (listaLinks: string[]) => {
        return (
            listaLinks.map(element => {
                return <a href={element} target="_blank">{element.includes("npmjs.com") ? <CgNpm /> :
                element.includes("github.com") ? <FiGithub /> :
                <FiExternalLink />}</a> 
            })
        )
    } 

    const techs = (listaLinks: string[]) => {
        return (
            listaLinks.map((element, index) => {
                return <> <span>{element}</span> { index != listaLinks.length -1 ? "•" : ''}</>
            })
        )
    }                

    return <LoadingPage>
        <div className="container min-h-screen flex flex-col justify-center items-center md:px-8 px-2 py-4">
            <div className="return w-full pl-5 pt-5 text-slate-200">
                <Link to='/'>
                    <BsArrowReturnLeft className="return-icon text-slate-200 hover:text-cyan-300" style={{ height: "1.5rem", width: "1.5rem" }} />
                </Link>
            </div>
            <div className="pl-5 title text-left w-full md:pt-[25vh] py-10 mb-5">
                <h2 className="font-bold text-7xl text-slate-300">Timeline</h2>
                <p className="text-cyan-300">Timeline of the projects in which I have collaborated</p>
            </div>
            <div className="content w-full">
                <table className="w-full">
                    <thead className="text-left capitalize text-slate-200">
                        <th className="px-5">date</th>
                        <th className="px-2">title</th>
                        <th className="px-5 md:table-cell hidden">Made at</th>
                        <th className="px-2 md:table-cell hidden">Built with</th>
                        <th className="px-5">link</th>
                    </thead>
                    <tbody>
                        {workspace.map((item, index) => {
                            return <tr key={index} className="text-slate-400 hover:bg-slate-400/[.1] h-[55px]">
                                <td className="px-5">{item?.date}</td>
                                <td className="px-2">{item?.projectName}</td>
                                <td className="px-5 capitalize md:table-cell hidden">{item?.madeat}</td>
                                <td className="font-mono text-slate-500 px-2 capitalize md:table-cell hidden">{techs(item?.madewith)}</td>
                                <td className="px-5 hover:text-cyan-400">{Icons(item?.link)}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </LoadingPage >
}

export default Timeline;