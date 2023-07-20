import React from "react";
import { ContainerCards, LineTitle, SectionPage, TitleCustom } from "./indexComponents";
import Card from "./utilities/CardCustom";

const Experience = () => {
    return <SectionPage 
        id="experienceSection"
        className="
        md:grid md:grid-cols-1 h-auto" maxHeight="auto" hScreem="h-auto">
        <ContainerCards className="content
        md:grid grid-cols-2">
            <Card description="financial services company" cargo="Desarrollador & Analistas de Software" tipe="by:apinterfaces" technologys={[
                'vue',
                'codeigneiter',
                'javascript',
                'typescript',
                'c#',
                'postgresql'
            ]} title="afore coppel" img="coppel"/>
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
            ]} description="Electronic Billing Technology Provider" cargo="Full Stack Software Developer & Tester." tipe="by:World Cloud Services" title="CENET S.A." img="/c3net.png"/>
            <Card technologys={[
                'html/css',
                'javascript',
                'php'
            ]} description="company of digital payments" cargo="Full Stack Software Developer." tipe="by:buentipo anchor" title="Visa" img="/vsacolombia.png"/>
            <Card technologys={[
                'bootstrap'
            ]} description="advertising services company" cargo="Full Stack Software Developer." tipe="by:World Cloud Services" title="BUENTIPO ANCHOR." img="/buentipo.png" />
            <Card technologys={[
                '.net',
                '.net core',
                'sql server',
                'dapper',
                'razor'
            ]} description="company of software development" cargo="Full Stack Software Developer." tipe="by:World Cloud Services" title="dataifx" img="/data.png"/>
            <Card technologys={[
                'angular',
                'entityframework',
                '.net core',
                'sql server'
            ]}  description="concessionaires chevrolet" cargo="Full Stack Software Developer." tipe="by:World Cloud Services" title="ChevyPlan Colombia" img="/chevy.png"/>
            <Card technologys={[
                'html/css',
                'bootstrap',
                'javascript'
            ]} description="company of Software Factory" cargo="Full Stack Software Developer." tipe="contract" title="World Cloud Services" img="/wc5.png"/>
        </ContainerCards>
    </SectionPage>
}

export default Experience;