import React from 'react';

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="/terms-and-conditions">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">help center</a></li>
                                <li><a href="#">help forum</a></li>
                                <li><a href="#">video tutorials</a></li>
                                <li><a href="#">payment options</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Community</h4>
                            <ul>
                                <li><a href="#">forum</a></li>
                                <li><a href="#">content</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="https://facebook.com/hongdangcseiu/" target="_blank"><img style={{ width:'40px', height:'40px' }} src="https://raw.githubusercontent.com/hongdangcseiu/HTMLCSSproject/master/images/facebook-2020-2-1.svg" className="fab"/></a>
                                <a href="https://twitter.com/hongdangcseiu/" target="_blank"><img style={{ width:'40px', height:'40px' }} src="https://raw.githubusercontent.com/hongdangcseiu/HTMLCSSproject/master/images/twitter-6.svg" className="fab"/></a>
                                <a href="https://instagram.com/hongdangcseiu/" target="_blank"><img style={{ width:'40px', height:'40px' }} src="https://raw.githubusercontent.com/hongdangcseiu/HTMLCSSproject/master/images/instagram-5.svg" className="fab" /></a>
                                <a href="https://linkedin.com/in/hongdangcseiu/" target="_blank"><img style={{ width:'40px', height:'40px' }} src="https://raw.githubusercontent.com/hongdangcseiu/HTMLCSSproject/master/images/linkedin-icon.svg" className="fab" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;