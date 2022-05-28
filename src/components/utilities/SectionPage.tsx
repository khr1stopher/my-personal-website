import React from "react";
import SectionPageProps from "../../interfaces/SectionPageProps";

const prueba = false

const SectionPage = (props: SectionPageProps) => {
    return <section id={props.id} className={`
        mx-auto
        max-w-[1536px] ${props.hScreem ?? 'md:h-screen'}
        flex flex-col justify-center box-border px-8 py-4
        min-h-[480px] max-h-[${props.maxHeight ?? "760px"}]
        sm:h-auto
        md:max-h-['760px']
        ${prueba ? 'sm:bg-black' : ''} sm:px-[4.5rem]
        ${prueba ? 'md:bg-red-900' : ''} md:min-h-[580px] md:px-[7.450rem]
        ${prueba ? 'lg:bg-amber-900' : ''} lg:px-[7rem] 
        ${prueba ? 'xl:bg-emerald-900' : ''} xl:px-[9.375rem]
        ${prueba ? '2xl:bg-blue-900' : ''}
        ` + props.className}>{props.children}</section> 
}

export default SectionPage;