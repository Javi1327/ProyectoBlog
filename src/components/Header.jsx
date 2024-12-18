import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  

const Menu = () => {
    const menuItems = [
        { className: "Inicio", to: "/", text: "Inicio"},
        { className: "CreaBlog", to: "/crear-blog", text: "Crer Blog" },
        { className: "MisBlogs", to: "/mis-blogs", text: "Mis blogs" },
        { className: "Login", to: "/login", text: "Login" },
        { className: "Register", to: "/register", text: "Register" },
    ];

    return (
        <nav className="menu">
            <ul>
                {menuItems.map((link) => (
                    <li key={link.to}>
                    <Link className={link.className} to={link.to}>
                        {link.text}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;