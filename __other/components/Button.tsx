import * as React from 'react'
import styled from 'styled-components'
import ButtonProps from '../interfaces/button'

const ButtonStyle = styled.button`
    border: 1px solid #000
`

export const ButtonCustom = (props: ButtonProps) => {
    return <ButtonStyle>{ props.text }</ButtonStyle>
}