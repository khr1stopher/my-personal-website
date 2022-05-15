import React from "react";
import { SectionCustom, Social, TitleCustom } from "./indexComponents";
import { FaNpm } from 'react-icons/fa'
import { FiCodepen, FiGithub, FiGitlab, FiInstagram } from "react-icons/fi";
import ButtonCustom from "./ButtonCustom";

const Contact = () => {
    return <SectionCustom
        id="contactSection"
        className="flex
        flex-col
        items-center
        justify-center
        px-[150px]
        py-[100px]">
            <div className="titulo w-full flex items-center justify-center mb-3">
                <TitleCustom className="font-sans text-slate-300 block text-center font-bold">
                    Contact
                </TitleCustom>
            </div>
            <h2 className="text-slate-200 text-2xl mb-3 font-extrabold">You have something to ask me?</h2>
            <div className="font-mono contenido w-[50%] text-center text-slate-400 mb-5">
                If you are a recruiter, you have any questions about my work or you need any help that you think I can offer you. do not hesitate to contact me it will be a pleasure to answer you
            </div>
            <div className="buttom">
                <ButtonCustom text="Contact me" />
            </div>
        <div style={{ left: `calc(50% - (32rem / 2))` }} className="p-5 w-[32rem] SocialLink shadow-xl backdrop-blur-sm fixed bottom-4 flex items-center">
            <a href="https://codepen.io/khristopher-pineda" target="_blank">
                <Social>
                    <FiCodepen color="white"/>
                </Social>
            </a>
            <a href="https://github.com/khr1stopher" target="_blank">
                <Social>
                    <FiGithub color="white"/>
                </Social>
            </a>
            <a href="https://gitlab.com/khristopher_pineda" target="_blank">
                <Social>
                    <FiGitlab color="white"/>
                </Social>
            </a>
            <a href="https://www.instagram.com/khristophito/" target="_blank">
                <Social>
                    <FiInstagram color="white"/>
                </Social>
            </a>
            <a href="https://www.npmjs.com/~khr1stopher" target="_blank">
                <Social>
                    <FaNpm color="white" style={{ height: '2rem', width: '2rem' }}/>
                </Social>
            </a>
            <span style={{color: 'white'}} >
            •
            </span>
            <a>
                <Social style={{color: 'white'}}>
                    kkromans009@gmail.com
                </Social>
            </a>
        </div>
    </SectionCustom>
}

export default Contact