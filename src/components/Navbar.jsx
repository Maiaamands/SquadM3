import { Link } from "react-router-dom"

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src="https://i.imgur.com/rpLVe8d.png" alt="logo"/>
        <ul>
            <li>
                <Link to={`/start`}>Início</Link>
            </li>
            <li>
                <Link to={`/`}>Livros</Link>
            </li>
            <li>
                <Link to={`/new`} className="new-btn">Cadastrar</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar