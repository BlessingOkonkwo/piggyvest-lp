import React from 'react'

import arrow5 from '../assets/imgs/arrow5.svg'

const Saver = () => {
  return (
    <section className="saver">
        <div id="blue" data-aos="zoom-in" data-aos-duration="2000" className='dfc'>
            <div className="blue-content">
                <h2>Meet the saver of the month!</h2>
                <p>
                    Every month, we shine a spotlight on one saver, asking them questions about their savings 
                    culture and how the product is specifically helping them shape how they spend and save for 
                    future responsibilities.
                </p>
                <a href="https://youtu.be/qa_x5ie3eP8" target="_blank" rel="noreferrer">
                    <img src={arrow5} alt="arrow5" />
                    Meet Tito
                </a>
            </div>
        </div>
        <div id="background" data-aos="zoom-in" data-aos-duration="2000">
            {/* <!-- <p>lets hjfjbf hfbjg jjf </p> --> */}
        </div>
    </section>
  )
}

export default Saver
