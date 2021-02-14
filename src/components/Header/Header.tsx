import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './header.css';

const Header: React.FunctionComponent = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = React.useState(true);
  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false);
      } else {
          setButton(true);
      }
  }
window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="family-logo" onClick={closeMobileMenu}>
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
            </ul>
            { button &&
                <Button buttonSize="btn--medium" buttonStyle="btn--outline">
                    REGISTER FOR RAFFLE
                </Button>
            }
        </div>
    </nav>
  );
}

export default (Header);