import styled from "styled-components";
import TitleProps from "../interfaces/TitleProps";

export const SectionCustom = styled.section`
    min-height: 100vh;
`

export const ButtonStyle = styled.button`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-color: var(--c3);
    color: var(--c3);
`

export const ListCustom = styled.li`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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

export const Social = styled.div`
    // background-color: var(--c2);
    margin: 0 1rem;
`