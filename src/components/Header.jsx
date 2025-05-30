import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" className='logo-header' />
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/a-propos">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header