import React from 'react'
import blueIcon from '../assets/imgs/blue-icon.png'

const Security = () => {
  return (
    <section className="security">
        <div className="security-img" data-aos="zoom-in-up" data-aos-duration="1000">
            <img src={blueIcon} alt="" width="100px" height="116px" />
        </div>
        <div className="security-text">
            <h4>Your Security is our priority</h4>
            <p>
                PiggyVest uses the highest level of Internet Security and it is 
                secured by 256 bits SSL security encryption to ensure that your 
                information is completely protected from fraud.
            </p>
            <a href="https://www.piggyvest.com/security">Learn more &gt;</a>
        </div>
    </section>
  )
}

export default Security
