import React from "react";
import { Contenido, SocialContainerCustom, SectionPage, Social, TitleCustom } from "./indexComponents";
import { FaNpm } from 'react-icons/fa'
import { FiLinkedin, FiCodepen, FiGithub, FiGitlab, FiInstagram } from "react-icons/fi";
import ButtonCustom from "./utilities/ButtonCustom";

const Contact = () => {
    return <SectionPage
        id="contactSection"
        className="justify-center align-center mg:max-h-[600px] 2xl:max-h-[740px]" hScreem='h-screen'>
        <div className="titulo w-full flex items-center justify-center mb-3">
            <TitleCustom className="font-sans text-slate-300 block text-center font-bold">
                Contact
            </TitleCustom>
        </div>
        <h2 className="text-slate-200 text-2xl text-center mb-3 font-extrabold">You have something to ask me?</h2>
        <Contenido className="mx-auto lg:w-8/12 font-mono contenido text-center text-slate-400 mb-5">
            If you are a recruiter, you have any questions about my work or you need any help that you think I can offer you. do not hesitate to contact me it will be a pleasure to answer you
        </Contenido>
        <div className="md:mx-auto buttom">
            <ButtonCustom text="Contact me" />
        </div>
        <SocialContainerCustom className="p-5 w-auto
            hidden
            SocialLink contactfixed shadow-xl
            md:flex md:backdrop-blur-sm md:w-[35rem] md:fixed md:bottom-4
            items-center grid grid-cols-5 mx-auto">
            <a href="https://codepen.io/khristopher-pineda" target="_blank">
                <Social>
                    <FiCodepen color="white" />
                </Social>
            </a>
            <a href="https://github.com/khr1stopher" target="_blank">
                <Social>
                    <FiGithub color="white" />
                </Social>
            </a>
            <a href="https://gitlab.com/khristopher_pineda" target="_blank">
                <Social>
                    <FiGitlab color="white" />
                </Social>
            </a>
            <a href="https://www.instagram.com/khristophito/" target="_blank">
                <Social>
                    <FiInstagram color="white" />
                </Social>
            </a>
            <a href="#">
                <Social>
                    <FiLinkedin color="white" />
                </Social>
            </a>
            <a href="https://www.npmjs.com/~khr1stopher" target="_blank">
                <Social>
                    <FaNpm color="white" style={{ height: '2rem', width: '2rem' }} />
                </Social>
            </a>
            <span style={{ color: 'white' }} className="">
                •
            </span>
            <a >
                <Social style={{ color: 'white' }}>
                    kkromans009@gmail.com
                </Social>
            </a>
        </SocialContainerCustom>
    </SectionPage>
}

export default Contact