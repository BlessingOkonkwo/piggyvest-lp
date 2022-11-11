import React from 'react'
import Logo from '../assets/imgs/logo1.svg'
import audit1 from '../assets/imgs/NDPR-audit1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row" data-aos="fade-up" data-aos-duration="2000">
                <div className="column audit">
                    <a href="https://www.piggyvest.com" className="logo">
                        <img src={Logo} alt="PiggyVest Logo" width="160px" />
                    </a>
                    <div></div>
                    <img id="audit-img" src={audit1} alt="Compliance Logo" width="140px" height="100px" />
                </div>

                <div className="column">
                    <h5>Products</h5>
                    <a href="https://www.piggyvest.com/piggybank">Piggybank</a>
                    <a href="https://www.piggyvest.com/invest">Invest</a>
                    <a href="https://www.piggyvest.com/safelock">Safelock</a>
                    <a href="https://www.piggyvest.com/targets">Target Savings</a>
                    <a href="https://www.piggyvest.com/flex-naira">Flex Naira</a>
                </div>

                <div className="column">
                    <h5>Company</h5>
                    <a href="https://www.piggyvest.com/about">About</a>
                    <a href="https://www.piggyvest.com/faq">FAQs</a>
                    <a href="https://blog.piggyvest.com">Blog</a>
                </div>

                <div className="column">
                    <h5>Legal</h5>
                    <a href="https://www.piggyvest.com/terms">Terms</a>
                    <a href="https://www.piggyvest.com/privacy">Privacy</a>
                    <a href="https://www.piggyvest.com/security">Security</a>
                </div>

                <div className="column" id="contact">
                    <div className="socials">
                        <a href="https://www.facebook.com/PiggyBankNG/"><FontAwesomeIcon icon={faSquareFacebook} size="xl" /></a>
                        <a href="https://mobile.twitter.com/PiggyBankNG/"><FontAwesomeIcon icon={faSquareTwitter} size="xl" /></a>
                        <a href="https://www.instagram.com/piggybankng/"><FontAwesomeIcon icon={faSquareInstagram} size="xl" /></a>
                    </div>
                    <div>
                        <a href="https://goo.gl/maps/NpjEYTjJuzxCUM9X7">Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</a>
                        <a href="mailto:contact@piggyvest.com">contact@piggyvest.com</a>
                        <a href="tel:+23481231300121">+234 700 933 933 933</a>
                    </div>
                </div>
            </div>

            <div className="about tac">
                <p id="about">
                    Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, 
                    our customers have saved and invested billions of Naira that they would normally be tempted to spend.
                </p>
                <p id="last-p" data-aos="flip-right" data-aos-duration="2000">
                    2016 - 2022 PiggyTech Global Limited - RC 1405222
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
