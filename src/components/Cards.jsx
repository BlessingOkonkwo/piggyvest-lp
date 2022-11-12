import React from 'react'

import cardIcon1 from '../assets/imgs/card-icon1.png'
import cardIcon2 from '../assets/imgs/card-icon2.png'
import cardIcon3 from '../assets/imgs/card-icon3.png'
import cardIcon4 from '../assets/imgs/card-icon4.png'
import arrow1 from '../assets/imgs/arrow1.svg'
import arrow2 from '../assets/imgs/arrow2.svg'
import arrow3 from '../assets/imgs/arrow3.svg'
import arrow4 from '../assets/imgs/arrow4.svg'


const Cards = () => {
  return (
    <section className="cards">
        <div className="container">
            <div className="row">
                <div className='four-ways-div'>
                    <div className="column four-ways" data-aos="fade-up" data-aos-duration="1000">
                        <h4 style={{fontSize: '40px'}}>4 ways to build your savings</h4>
                        <p>Earn 5%-15% when you save with any of these PiggyVest plans</p>
                        <a href="https://dashboard.piggyvest.com/register" target="_blank" className="btn bold btn-bcb" rel="noreferrer">
                            Start Saving
                        </a>
                    </div>
                </div>

                <div className="column card" data-aos="fade-up" data-aos-duration="1000">
                    <a href="https://www.piggyvest.com/piggybank">
                        <img src={cardIcon1} width="50px" height="50px" alt="" className="card-icon" />
                        <h5>Automated Savings</h5>
                        <p>Build a dedicated Build a dedicated savings faster on your terms automatically or manually.</p>
                        <div>
                            <img src={arrow1} alt="arrow1" />
                            Piggybank
                        </div>
                    </a>
                </div>

                <div className="column card" data-aos="fade-up" data-aos-duration="1000">
                    <a href="https://www.piggyvest.com/safelock">
                        <img src={cardIcon2} width="50px" height="50px" alt="" className="card-icon" />
                        <h5>Fixed Savings</h5>
                        <p>Lock money away for a fixed duration with no access to it until maturity. 
                            It's like having a custom fixed deposit.
                        </p>
                        <div>
                            <img src={arrow2} alt="arrow2" />
                            Safelock
                        </div>
                    </a>
                </div>

                <div className="column card" data-aos="fade-up" data-aos-duration="1000">
                    <a href="https://www.piggyvest.com/targets">
                        <img src={cardIcon3} width="50px" height="50px" alt="" className="card-icon" />
                        <h5>Goal-oriented Savings</h5>
                        <p>
                            Reach all your savings goals faster. Save towards multiple goals on your own 
                            or with a group.
                        </p>
                        <div>
                            <img src={arrow3} alt="arrow3" />
                            Target Savings
                        </div>
                    </a>
                </div>
                <div className="column card" data-aos="fade-up" data-aos-duration="1000">
                    <a href="https://www.piggyvest.com/flex-naira">
                        <img src={cardIcon4} width="50px" height="50px" alt="" className="card-icon" />
                        <h5>Flexible Savings</h5>
                        <p>
                            Save, transfer, withdraw, manage and organise your money for free at any time.
                        </p>
                        <div>
                            <img src={arrow4} alt="arrow4" />
                            Flex Naira
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cards
