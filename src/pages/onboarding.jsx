import './onboarding.css';
import { useState } from 'react';
import menuIcon from './images/menu.svg';
import closeIcon from './images/close.svg';
import arrowDrop from './images/arrow_drop_up.svg';
import googleIcon from './images/google_icon.png';

const Onboarding = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownActive(!dropdownActive);

  return (
    <div className="Page">
      <nav className="navbar">
        <div className="logo">Eventrio</div>
        <img
          src={menuOpen ? closeIcon : menuIcon}
          alt="Menu Toggle"
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
              <img src={arrowDrop} alt="Dropdown Arrow" className={`arrow ${dropdownActive ? 'rotate' : ''}`} />
            </span>
            <div className="dropdownContent">
              <a href="/dashboard/create" className="link">Create Event</a>
              <a href="/dashboard/attendees" className="link">Attendees</a>
            </div>
          </li>
          <li>
            <a href="/signin">
              <button className="signinBtn">Sign In</button>
            </a>
          </li>
        </ul>
      </nav>

      <div className="Container">
        {/* Left Side: Flyer + Form */}
        <div className="formAndFlyerWrapper">
          <div className="flyerUpload">
            <span>Upload Event Flyer</span>
            <div className="event_flyer">
              <div className="eventflyer_image" />
            </div>
          </div>

          <div className="createFormSection">
            <form>
              <div className="event_name">
                <label htmlFor="eventName">Name of Event</label>
                <input id="eventName" type="text" placeholder="Event Name" required />
              </div>
              <div className="event_date">
                <label htmlFor="eventDate">Date of Event</label>
                <input id="eventDate" type="date" required />
              </div>
              <div className="event_location">
                <label htmlFor="eventLocation">Location</label>
                <input id="eventLocation" type="text" placeholder="Location" required />
              </div>
              <div className="description">
                <label htmlFor="eventDescription">Description</label>
                <textarea id="eventDescription" placeholder="Event Description" required></textarea>
              </div>
              <button type="submit" className="createEventBtn">Create Event</button>
            </form>
          </div>
        </div>

        {/* Right Side: Login Section */}
        <div className="loginInfoSection">
          <h1>Log In</h1>
          <p className="welcomeText">Hi! Welcome back</p>
          
          <div className="inputGroup">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" defaultValue="Tee" />
          </div>

          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" defaultValue="qwert1234" />
          </div>

          <button className="signinNow">Log In</button>

          <div className="divider">or sign in with</div>

          <a href="/auth/google-signup" className="googleSignupBtn">
            <img src={googleIcon} alt="Google logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
