import React from "react";
import ModalProps from "../interfaces/ModalProps";
import { VscChromeClose } from "react-icons/vsc";
import { FaCodepen } from "react-icons/fa"
import { FiGitlab, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'

interface infoContact{
    icon?: JSX.Element,
    name?: string,
    link?: string,
    color?: string
}

const ModalContact = (props: ModalProps) => {

    const infoContacts: infoContact[] = [
        {
            icon: <FaCodepen />,
            name: 'Codepen',
            color: '#bada55',
        },
        {
            icon: <FiGithub />,
            name: 'Github',
        },
        {
            icon: <FiGitlab/>,
            name: 'Gitlab',
        },
        {
            icon: <FiInstagram/>,
            name: 'Instagram',
        },
        {
            icon: <FiLinkedin/>,
            name: 'Linkedin',
        },
        {
            icon: <FiMail/>,
            name: 'Email',
        }
    ];

    const { Close } = props;

    return <div className={`ModalContact py-[100px] px-10 bg-c2 w-full min-h-screen h-auto fixed top-0 left-0 ${props.active ? 'active' : 'hidden'}`}>
        <div className="bar block">
            <div className="close cursor-pointer w-10 hover:bg-c5 h-10 p-3" onClick={Close}>
                <VscChromeClose className="text-slate-300" />
            </div>
        </div>
        <div className="content grid grid-cols-1">
            {
                infoContacts.map((infoContact) => {
                    return <a className="button w-full" href={infoContact?.link}>
                        <button className={`bg-[${infoContact?.color}]` + " p-3 w-full flex items-center"}>
                            <span className="mr-2">{ infoContact.icon }</span><span>{ infoContact.name }</span>
                        </button>
                    </a>
                })
            }
        </div>
    </div>
}

export default ModalContact;