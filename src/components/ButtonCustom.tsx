import * as React from 'react'
import ButtonProps from '../interfaces/ButtonProps'
import { ButtonStyle } from './indexComponents'  

const ButtonCustom = (props: ButtonProps) => {
    return <>
        <ButtonStyle
        className={`
            border
            py-2
            px-3
            bg-transparent
            text-sm
            font-semibold
            rounded-sm
            transition duration-150 ease-out
            hover:bg-cyan-300/25
            focus:outline-none
        `}>
            { props.text }.
        </ButtonStyle>
    </>
}

export default ButtonCustom;