import React from 'react'

import Investify from '../assets/imgs/investify.png'
import bigCircle from '../assets/imgs/big-circle.svg'
import pinkDots from '../assets/imgs/pink-dots.svg'


const Invest = () => {
  return (
    <section>
        <div className="container">
            <div className="investify">
                <div style={{position: 'relative', width: 'auto'}} className="investify-imgs">
                    <img src={Investify} width="256px" alt="" />
                    <img src={bigCircle} alt="" id="invest-circle" data-aos="fade-up" data-aos-duration="2000" />
                    <img src={pinkDots} alt="" id="invest-dots" data-aos="fade-up" data-aos-duration="2000"/>
                </div>
                <div className="invest-text-div">
                    <div id="invest-text">
                        <p id="percent" data-aos="fade-up" data-aos-duration="2000">Up to 25% Returns</p>
                        <h2 data-aos="fade-up" data-aos-duration="2000">Access investment opportunities</h2>
                        <p id="invest-p">Invest securely and confidently on the go. Grow your money confidently by investing in 
                            pre-vetted investment opportunities.
                        </p>
                        <a href="https://www.piggyvest.com/investify">Learn more about Investments &gt;</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Invest
