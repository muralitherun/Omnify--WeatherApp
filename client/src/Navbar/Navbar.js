import './Navbar.css';
import navImg from './navImg.png';

function Navbar() {
    return (
        <nav class="navbar">
            <div class="navbar-content">
                <img src={navImg} alt="Weather Icon" class="navbar-icon" />
                <h1 class="navbar-title">WEATHER APPLICATION</h1>
            </div>
        </nav>
    );
}

export default Navbar;