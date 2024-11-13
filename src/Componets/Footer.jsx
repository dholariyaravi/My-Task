import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';
import logo from '../IMG/c0c589de013e8edd08676bebdb10f698.png';
import '../Style/Footer.css';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section company-info">
                    <div className='navbar-logo'>
                        <img src={logo} className='my-3' alt="Agency logo" />
                        <h2 className='text-dark'>Agency</h2>
                    </div>
                    <p>Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.</p>
                    <span>© Skyrev Theme 2020</span>
                </div>

                <div className="footer-section">
                    <h3>COMPANY</h3>
                    <ul>
                        <li>Donec dignissim</li>
                        <li>Curabitur egestas</li>
                        <li>Nam posuere</li>
                        <li>Aenean facilisis</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>SERVICES</h3>
                    <ul>
                        <li>Cras convallis</li>
                        <li>Vestibulum faucibus</li>
                        <li>Quisque lacinia purus</li>
                        <li>Aliquam nec ex</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>RESOURCES</h3>
                    <ul>
                        <li>Suspense porttitor</li>
                        <li>Nam posuere</li>
                        <li>Curabitur egestas</li>
                    </ul>
                </div>

                <div className="footer-section social-language">
                    <div className="social-icons">
                        <FaFacebook />
                        <FaLinkedin />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                    <div className="language-select my-3">
                        <FaGlobe />
                        <select className='px-2'>
                            <option>English - En</option>
                            <option>Spanish - Es</option>
                            <option>English - En</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
