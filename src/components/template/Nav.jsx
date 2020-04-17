import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to='/'>
                <NavItem icon="home" label="Início"/>
            </Link>

            <Link to='users'>
                <NavItem icon="users" label="Usuários" />
            </Link>

        </nav>
    </aside>
