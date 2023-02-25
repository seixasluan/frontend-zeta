 
const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Zeta</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Soluções</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contato</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sobre nós
                        </a>
                        <ul className="dropdown-menu pr-10" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item " href="#">Quem Somos</a></li>
                            <li><a className="dropdown-item " href="#">Missão e Valores</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
)}

export default Header;