import React from 'react'
import './footer.scss';
import blackLogo from '../../assets/images/png/blackLogo.png';
import facebook from '../../assets/images/svg/facebook.svg';
import insta from '../../assets/images/svg/insta.svg';
import linkdin from '../../assets/images/svg/linkdin.svg';
import tweet from '../../assets/images/svg/tweet.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div className="footer-div">
        <div className="container4">
          <div className="footer-logo">
            <Link to={"/"}>
              <img src={blackLogo} alt="blackLogo" />
            </Link>
          </div>
          <div className="footer-flex">
            <div className="footer-flex1">
              <h2>Web analytics. Actionable, at scale</h2>
              <div className="footer-flex1-icon">
                <a target='blank' href="https://www.facebook.com/flowpoint.analytics">
                  <div className="footer-flex1-icon-box">
                    <img src={facebook} alt="facebook" />
                    <div className="icon-ticket">FacebooK</div>
                  </div>
                </a>
                <a target='blank' href="https://www.instagram.com/flowpoint.ai/">
                  <div className="footer-flex1-icon-box">
                    <img src={insta} alt="insta" />
                    <div className="icon-ticket">Instagram</div>
                  </div>
                </a>
                <a target='blank' href="https://www.linkedin.com/company/flowpoint-analytics/">
                  <div className="footer-flex1-icon-box">
                    <img src={linkdin} alt="linkdin" />
                    <div className="icon-ticket">Linkdin</div>
                  </div>
                </a>
                <a target='blank' href="https://x.com/flowpoint_ai">
                  <div className="footer-flex1-icon-box">
                    <img src={tweet} alt="tweet" />
                    <div className="icon-ticket">Twitter</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-flex2">
              <div className="footer-flex2-box">
                <h3>RESOURCES</h3>
                <a href="Documentation">Documentation</a>
                <a href="Blog">Blog</a>
                <a href="FAQs">FAQs</a>
                <a href="GDPR Statement">GDPR Statement</a>
              </div>
              <div className="footer-flex2-box">
                <h3>LEGAL</h3>
                <a href="Privacy Policy">Privacy Policy</a>
                <a href="Data Protection Agreement">Data Protection Agreement</a>
                <a href="Cookie Notice">Cookie Notice</a>
                <a href="Terms of Use">Terms of Use</a>
                <a href="Manage cookies">Manage cookies</a>
              </div>
            </div>
            <div className="footer-flex3">
              <h3>CONTACT</h3>
              <p>FLOWPOINT ANALYTICS LTD</p>
              <p>Company Number 14068900</p>
              <p>83-86 Prince Albert Road, London, UK</p>
            </div>
          </div >
          <div className="footer-copyright">
            <p>© 2023. All rights reserved @Flowpoint</p>
          </div>
        </div >
      </div >
    </div >
  )
}
