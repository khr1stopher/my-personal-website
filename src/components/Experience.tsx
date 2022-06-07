import React from "react";
import { ContainerCards, LineTitle, SectionPage, TitleCustom } from "./indexComponents";
import Card from "./utilities/CardCustom";

const Experience = () => {
    return <SectionPage 
        id="experienceSection"
        className="
        md:grid md:grid-cols-1 h-auto" maxHeight="auto" hScreem="h-auto">
        <div className="col-start-1 col-end-12 titulo w-full flex items-center font-bold mb-5">
            <TitleCustom className="font-sans text-slate-300 block">
                My Experience
            </TitleCustom>
            <LineTitle className="bg-slate-600 ml-5 w-[200px]"></LineTitle>
        </div>
        <div className="descripcion col-start-1 col-end-12 mb-5">
            <p className="mx-5 text-slate-400 mb-3">
                What you will see below are companies that I have provided services to, either hired as a freelancer or as an external developer (from another company).
            </p>
            <p className="mx-5 text-slate-400 mb-3 font-mono">
                01.- those with <span className="bg-orange-800 text-orange-200 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">freelancer</span> means that they contracted my services as freelance developer either to provide services to the same company or to provide services to a third
            </p>
            <p className="mx-5 text-slate-400 font-mono">
                02.- those with <span className="bg-teal-800 text-teal-200 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">by company</span> means that they are companies which I serve as an external developer
            </p>
        </div>
        <ContainerCards className="content
        md:grid grid-cols-2">
            {/* <Card description="financial services company" cargo="Desarrollador & Analistas de Software" tipe="by:apinterfaces" technologys={[
                'vue',
                'codeigneiter',
                'javascript',
                'typescript',
                'c#',
                'postgresql'
            ]} title="afore coppel" img="coppel"/> */}
            <Card technologys={[
                'vue',
                'codeigneiter',
                'javascript',
                'typescript',
                'c#',
                'postgresql'
            ]} description="company of services and consultancy TI" cargo="Desarrollador & Analistas de Software" tipe="contract" title="AP/Interfaces" img="/api.png"/>
            <Card technologys={[
                'html/css',
                '.net',
                'javascript',
                'selenium',
                'c#',
                'sql server'
            ]} description="Electronic Billing Technology Provider" cargo="Full Stack Software Developer & Tester." tipe="by:World Cloud Services" title="CENET S.A." img="cenet"/>
            <Card technologys={[
                'html/css',
                'javascript',
                'php'
            ]} description="company of digital payments" cargo="Full Stack Software Developer." tipe="by:buentipo anchor" title="Visa" img="visa"/>
            <Card technologys={[
                'bootstrap'
            ]} description="advertising services company" cargo="Full Stack Software Developer." tipe="by:World Cloud Services" title="BUENTIPO ANCHOR." img="/buentipo.png" />
            <Card technologys={[
                '.net',
                '.net core',
                'sql server',
                'dapper',
                'razor'
            ]} description="company of software development" cargo="Full Stack Software Developer." tipe="by:World Cloud Services" title="dataifx" img="dataifx"/>
            <Card technologys={[
                'angular',
                'entityframework',
                '.net core',
                'sql server'
            ]}  description="concessionaires chevrolet" cargo="Full Stack Software Developer." tipe="by:World Cloud Services" title="ChevyPlan Colombia" img="chevyplan"/>
            <Card technologys={[
                'html/css',
                'bootstrap',
                'javascript'
            ]} description="company of Software Factory" cargo="Full Stack Software Developer." tipe="contract" title="World Cloud Services" img="wcs"/>
        </ContainerCards>
    </SectionPage>
}

export default Experience;