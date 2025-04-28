import  './Home.css';
import { useState } from 'react';
import menuIcon from './images/menu.svg';
import closeIcon from './images/close.svg';
import arrowDrop from './images/arrow_drop_up.svg';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    return (
        <div className='home'>
            <nav className="navbar">
                <div className="logo">Eventrio</div>

                <img 
                    src={menuOpen ? closeIcon : menuIcon} 
                    alt="menu" 
                    className="menuToggle" 
                    onClick={toggleMenu} 
                />

                <ul className={`navLinks ${menuOpen ? 'show' : ''}`}>
                    <li><a href="/" className="link">Home</a></li>
                    <li><a href="/allEvents" className="link">All Events</a></li>
                    <li 
                        className={`dropdown ${dropdownActive ? 'active' : ''}`}
                        onClick={toggleDropdown}
                        onMouseEnter={() => setDropdownActive(true)}
                        onMouseLeave={() => setDropdownActive(false)}
                    >
                        <span>
                            Dashboard 
                            <img src={arrowDrop} alt="arrow" className={`arrow ${dropdownActive ? 'rotate' : ''}`} />
                        </span>
                        <div className="dropdownContent">
                            <a href="dashboard/create" className="link">Create Event</a>
                            <a href="dashboard/attendees" className="link">Attendees</a>
                        </div>
                    </li>
                    {/* Sign In button placed under navLinks */}
                    <li>
                        <a href="/signin">
                            <button className="signinBtn">Sign in</button>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="heroContent">
                <h1>Create or book your next event with ease.<br />Find, plan and secure all in one place.</h1>
                <div className="buttons">
                    <a href='/signin'><button className="getStarted">Get Started</button></a>
                    <a href="/create"><button className="createEvent">Create Event</button></a>
                </div>
            </div>
        </div>
    );
};

export default Home;
