import * as React from 'react'
import ButtonProps from '../../interfaces/ButtonProps'
import { ButtonStyle } from '../indexComponents'  

const ButtonCustom = (props: ButtonProps) => {
    return <>
        <button className={`w-full border py-2 px-3 text-cyan-300 border-cyan-300 bg-transparent text-sm font-semibold rounded-sm transition duration-150 ease-out hover:bg-cyan-300/25 focus:outline-none select-none md:w-auto`}>
            { props.text }.
        </button>
    </>
}

export default ButtonCustom;