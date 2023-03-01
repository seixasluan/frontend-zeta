 import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container">
                <Link className="navbar-brand" to='/'>Zeta</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/solucoes">Soluções</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="contato">Contato</Link>
                    </li>
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sobre nós
                        </a>
                        <ul className="dropdown-menu pr-10" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item " to="/quem-somos">Quem Somos</Link></li>
                            <li><Link className="dropdown-item " to="/quem-somos">Missão e Valores</Link></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
)}

export default Header;