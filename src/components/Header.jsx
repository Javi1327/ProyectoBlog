import { useContext, useEffect } from "react"
import {AuthContext} from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./Header.css"

const Header = () => {
    const {isLogged, setIsLogged, setAccessToken, setRefreshToken } = useContext(AuthContext)
 
    const navigate = useNavigate(); // Inicializa useNavigate

    const links = [{ to: "/", text: "Inicio" }];
    const linksLogin = [
        { to: "/mis-blogs", text: "Mis Blogs" },
        { to: "/crear-blog", text: "Crear Blog" },
    ];
    const linksLogout = [
        { to: "/login", text: "Login" },
        { to: "/register", text: "Register" },
    ];

    const handleLogout = () => {
        setIsLogged(false); // Cambia el estado de autenticación
        setAccessToken(null);
        setRefreshToken(null);
        //alert("Logout"); // serrar sesion
        navigate("/"); // Redirige al usuario a la página de inicio
    };

    return (
        <nav className="topnav">
            <div className="links-start">

                {links.map((link) => (
                    <Link key={link.to} to={link.to}> {link.text} </Link>
                ))}
            </div>

            <div className="links-end">

                {isLogged && linksLogin.map((link) => (
                    <Link key={link.to} to={link.to}> {link.text} </Link>
                ))}

                {isLogged && <a onClick={handleLogout}>Cerrar Sesion</a>}
                
                {!isLogged && linksLogout.map((link) => (
                    <Link key={link.to} to={link.to}> {link.text} </Link>
                ))}
            </div>
             
        </nav>
    )
}

export default Header