import React from "react";
import SectionPageProps from "../../interfaces/SectionPageProps";

const prueba = false

const SectionPage = (props: SectionPageProps) => {
    return <section id={props.id} className={`
        mt-0
        pt-32
        mx-auto
        max-w-6xl
        flex flex-col justify-center box-border px-8
        ` + props.className}>{props.children}</section> 
}

export default SectionPage;