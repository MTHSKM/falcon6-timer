import { HeaderContainer } from "./styles"

import falconLogo from '../../assets/falcon6-logo.png'
import { Scroll, Timer } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function Header() {
    return (
        <>
            <HeaderContainer>
                <img src={falconLogo} alt=""></img>
                <nav>
                    <NavLink to="/" title="Timer"><Timer size={24}></Timer></NavLink>
                    <NavLink to="/history" title="Historico"><Scroll size={24}></Scroll></NavLink>
                </nav>
            </HeaderContainer>
        </>
    )
}