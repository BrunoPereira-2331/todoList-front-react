import React from 'react'
import './styles/menu.css'

const Menu = props => {
    return (
        <div className="div">

            <nav className="menu-nav">
                <ul className="menu-nav-ul">
                    <li>
                        <a href="/todoList">Todo List</a>
                    </li>
                    <li>
                        <a href="/history">History</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu