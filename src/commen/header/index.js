import React, { useEffect, useState } from 'react';
import './header.scss';
import logo from '../../assets/images/png/logo.png';
import blackLogo from '../../assets/images/png/blackLogo.png';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled300, setIsScrolled300] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logo);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      if (window.scrollY > 500) {
        setIsScrolled300(true);
        setLogoSrc(blackLogo);
      } else {
        setIsScrolled300(false);
        setLogoSrc(logo);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`${isScrolled ? 'scrolled' : ''} ${isScrolled300 ? 'scrolled-300' : ''}`}>
        <div className="header-first">
          <span></span>
          <a href="introducing">Introducing the Free Plan →</a>
        </div>
        <div className="header-main">
          <div className="container">
            <div className="header-main-div">
              <div className="hmg-flex">
                <div className="hmg-flex-logo">
                  <Link to={'./'}>
                    <img src={logoSrc} alt="logo" />
                  </Link>
                </div>
                <div className="hmg-flex2">
                  <div className="hmg-flex2-ancer">
                    <div className="hmg-flex2-list">
                      <a href="Features">Features</a>
                      <IoIosArrowDown className='drop-down' />
                    </div>
                    <div className="hmg-flex2-list">
                      <a href="Resources">Resources</a>
                      <IoIosArrowDown className='drop-down' />
                    </div>
                    <div className="hmg-flex2-list">
                      <a href="Pricing">Pricing</a>
                    </div>
                    <div className="hmg-flex2-list">
                      <a href="Case studies">Case studies</a>
                      <IoIosArrowDown className='drop-down' />
                    </div>
                    <div className="hmg-flex2-list">
                      <a href="Log in">Log in</a>
                    </div>
                  </div>
                  <div className="hmg-flex2-button">
                    <button>Start Your Free Trial</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
