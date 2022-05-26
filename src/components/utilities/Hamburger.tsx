import React, { useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components';
import HamburgerProps from '../../interfaces/HamburgerProps';
import _EventBus from '../../services/EventBus'

const SVGHam = styled.svg`
  &.ham ~ div{
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s, opacity .2s;
  }
  &.ham.active ~ div{
    background: var(--c2);
    visibility: visible;
    opacity: 1;
    transition: all 0.5s, opacity .2s;
  }
  &.ham.active ~ div{
    background: var(--c2);
    visibility: visible;
    opacity: 1;
    transition: all 0.5s, opacity .2s;
  }
  &.ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  &.hamRotate.active {
    transform: rotate(45deg);
  }
  &.hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke:rgb(148 163 184 / 1);
    stroke-width:3.5;
    stroke-linecap:round;
  }
  &.ham8 .top {
    stroke-dasharray: 40 160;
  }
  &.ham8 .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  &.ham8 .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
  &.ham8.active .top{
    stroke-dashoffset: -64px;
  }
  &.ham8.active .middle{
    //stroke-dashoffset: -20px;
    transform: rotate(90deg);
  }
  &.ham8.active .bottom{
    stroke-dashoffset: -64px;
  }
  // https://codepen.io/ainalem/details/LJYRxz
`


const Hamburger = (props: HamburgerProps) => {

    const [HamburgerRef, setHamburgerRef] = useState(false) 

    const Cambio = () => {
      setHamburgerRef(!HamburgerRef);
      _EventBus.$emit("hamburguer:click")
    }

    useLayoutEffect(() => {
      _EventBus.$on({EventName: "list:click", fn: () => {
        setHamburgerRef(false)
      }})
      window.addEventListener('resize', () => {
        _EventBus.$emit("hamburguer:resize")
      });
      return () => {
        window.removeEventListener('resize', () => {
          _EventBus.$emit("hamburguer:resize")
        });
      }
    }, [])

    return <>
      <SVGHam className={`ham hamRotate ham8 ${HamburgerRef ? 'active' : ''}`} viewBox="0 0 100 100" width="80" onClick={Cambio}>
          <path
              className="line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
          <path
              className="line middle"
              d="m 30,50 h 40" />
          <path
              className="line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
      </SVGHam>
      { props.children }
    </>
    
}

export default Hamburger