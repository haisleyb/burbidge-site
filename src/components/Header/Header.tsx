import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="header">
        <div className="header-container">
            <Link to="/" className="family-logo">
                Burbidge
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"} >
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
                        Events
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/vacations" className="nav-links" onClick={closeMobileMenu}>
                        Vacations
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/weddings" className="nav-links" onClick={closeMobileMenu}>
                        Weddings
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default (Header);