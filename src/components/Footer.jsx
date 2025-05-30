import logo from '../assets/logo-footer.png';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <img src={logo} alt="Logo" className="logo-footer" />
                <p className="footer-text">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer