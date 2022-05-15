import * as React from 'react'
import styled from 'styled-components'
import configStyle from '../styled/config'
import listProps from '../interfaces/list'
let count = 0;

const HeaderCustom = styled.header`
    background-color: ${configStyle.bg};
    -webkit-box-align: center;
    box-shadow: 0 10px 30px -10px ${configStyle.BoxShadow};
    -webkit-box-pack: justify;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 6.25rem;
    backdrop-filter: blur(10px);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
`

const NavContainer = styled.nav`
    margin: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
`

const Links = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`

const ListContainer = styled.ol`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
`
const List = styled.li`
    margin: 0px 5px;
    position: relative;
    counter-increment: item 1;
    font-size: 0.8125rem;

    "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
`


const NavBar = () => {
    return <HeaderCustom>
        <NavContainer>
            <div className="logo">
                khristopher pineda
            </div>
            <Links>
                <ListContainer>
                    <List>About</List>
                    <List>Experience</List>
                    <List>Skils</List>
                    <List>Contact</List>
                </ListContainer>
            </Links>
        </NavContainer>
    </HeaderCustom>
}

export default NavBar;