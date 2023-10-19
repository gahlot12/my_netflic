
import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    // Add the event listener with the event handler function
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener with the same event handler function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array means this effect runs only once on component mount

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
