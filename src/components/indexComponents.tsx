import styled from "styled-components";
import TitleProps from "../interfaces/TitleProps";

const hch = "4rem"
export const fz1 = "2.25rem"
export const ml1 = "1.6rem"
export const mb1 = '.5rem'

export const Contenido = styled.div`
    @media (max-width: 640px) {
        width: 100%;
        text-aling: center;
    }
`

export const SocialContainerCustom = styled.div`
left: calc(50% - (32rem / 2));

@media (max-width: 640px) {
    position: relative;
    bottom: 0;
}
`

export const HeaderCustom = styled.header`
@media (max-width: 640px) { 
}
`

export const NavCustom = styled.header`
    @media (max-width: 640px) { 
        height: auto;
    }
    `

export const Kcontainer = styled.div`
    @media (max-width: 640px) { 
        display: flex;
        padding-left: ${ml1};
    }
    `

export const Logo = styled.a`
    @media (max-width: 640px) { 
        padding-left: 0px;
    }
    `

export const SectionCustom = styled.section`
    min-height: 100vh;
    
    @media (max-width: 640px) {
        padding: 2.5rem ${ml1};
    }
    `

export const ContactSectionCustom = styled(SectionCustom)`
    @media (max-width: 640px) {
    }
`
export const SectionInicioCustom = styled(SectionCustom)`
    @media (max-width: 640px) {
        margin-top: 1rem;
    }
`

export const H1Custom = styled.h1`
    @media (max-width: 640px) { 
        width: 100%;
        text-align: left;
        margin-bottom: ${mb1};
    }
`

export const H1PresentCustom = styled(H1Custom)`
    @media (max-width: 640px) { 
        font-size: 1rem
    }
    @media (max-width: 395px) {
        font-size: 1.5rem;
    }
`
export const H2Custom = styled.h2`
    @media (max-width: 640px) { 
        font-size: ${fz1};
        margin-bottom: ${mb1};
    }
    @media (max-width: 395px) {
        font-size: 3.75rem;
    }
`
export const H3Custom = styled.h2`
    @media (max-width: 640px) { 
        font-size: ${fz1};
        margin-bottom: ${mb1};
    }
    @media (max-width: 395px) {
        font-size: 2.85rem;
    }
`
export const PCustom = styled.p`
    @media (max-width: 640px) { 
        font-size: inherit;
        line-height: inherit;
    }
    @media (max-width: 395px) {
        font-size: 1.30rem;
        width: 100%;
    }
`

export const ButtonStyle = styled.button`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-color: var(--c3);
    color: var(--c3);

    @media (max-width: 395px) {
        font-size: 1rem;
        width: 100%;
    }
`

export const ListCustom = styled.li`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
export const LineTitle = styled.div`
    height: 1px;
    border: none;

    @media (max-width: 640px) { 
        display: none
    }
`

export const AboutCols = styled.div`
    @media (max-width: 640px) { 
        grid-column-end: 13;
        grid-column-start: 1;
    }
`

export const TitleCustom = styled.h2<TitleProps>`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 26px;
    &:before{
        color: var(--c3);
        font-size:20px;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;;
        counter-increment: section 1;
        content: "0" counter(section) ". ";
        position: relative;
        height: 1px;
        width: 100%;
    }
    
    @media (max-width: 640px) { 
        width: 100%;
        text-align: center;
    }
`

export const LinkCustom = styled.a`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: var(--c3);
    cursor: pointer;
`

export const WorksContainer = styled.div`
    @media (max-width: 640px) { 
        grid-template-columns: 1fr;
        width: inherit;

        .card {
            margin-left: 0px;
            margin-right: 0px;
        }

    }
`

export const Social = styled.div`
    // background-color: var(--c2);
    margin: 0 1rem;
`

export const ContainerCards = styled.div`
    @media (max-width: 640px) { 
        grid-template-columns: 1fr;
    }
    & > .card {
        flex-direction: column;
    }
`

export const CardContainer = styled.div`
@media (max-width: 640px) { 
    flex-direction: column;
    img {
        height: inherit;
        min-height: 100px;
        max-height 150px;
    }
    .tarjeta {
        margin: 0
    }
}
`