import React from "react"
import './Nav.css'

import NavItem from './NavItem'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            {/* 
                <a href="#/"> 
                    <i className="fa fa-home"></i> Início
                </a>
                <a href="#/users">
                    <i className="fa fa-users"></i> Usuários
                </a>
            */}
            <NavItem link="/" icon="home" text="Início" />
            <NavItem link="/users" icon="users" text="Usuários" />
        </nav>
    </aside>