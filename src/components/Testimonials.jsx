import React from 'react'

import apple from '../assets/imgs/apple-logo.svg'
import android from '../assets/imgs/playstore-icon.svg'
import Tobenna from '../assets/imgs/Tobenna.jpeg'
import Michael from '../assets/imgs/Michael.jpeg'
import Oluwadamilola from '../assets/imgs/Oluwadamilola.jpeg'
import Joseph from '../assets/imgs/Joseph.jpeg'


const Testimonials = () => {
  return (
    <section className="testimonials tac">
        <div className="container">
            <div className="row">
                <div className="mil-div">
                    <div className="column mil">
                        <h4>4 Million + customers</h4>
                        <p>
                            Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money 
                            better, avoid over-spending and be more accountable.
                        </p>
                        <div className="btns">
                            <a href="https://dashboard.piggyvest.com/register" target="_blank" rel="noreferrer" className="btn bold btn-bcb">
                                Create free account
                            </a>
                            <div className="download">
                                <a href="https://apps.apple.com/ng/app/piggyvest/id1263117994" target="_blank" rel="noreferrer" className="download-btn btn-bcw" style={{marginRight:'10px'}}>
                                    <img src={apple} alt="apple download" />
                                    Get on iPhone
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.piggybankng.piggy" target="_blank" rel="noreferrer" className="download-btn btn-bcw">
                                    <img src={android} alt="android download" />
                                    Get on Android
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="column boxes">
                    <div className='kQOhaa'>
                        <div className="box">
                            <p>Thursday, 6th of October 2022 bt 11:42 AM</p>
                            <div>
                                <img src={Tobenna} alt="Tobenna A" width="35" height="10" />
                                <div>
                                    <h6>Tobenna A</h6>
                                    <p className="testimony">
                                        Thanks to piggyvest I've saved enough money to start up a really large business.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <p>Wednesday, 5th of October 2022 bt 03:08 AM</p>
                            <div>
                                <img src={Michael} alt="Michael F" width="35" height="10" />
                                <div>
                                    <h6>Michael F</h6>
                                    <p className="testimony">
                                        I just joined tho and I believe piggyVest won't disappoint me &#128522 &#10084;&#65039;
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <p>Tuesday, 4th of October 2022 bt 18:01 PM</p>
                            <div>
                                <img src={Oluwadamilola} alt="Oluwadamilola A" width="35" height="10" />
                                <div>
                                    <h6>Oluwadamilola A</h6>
                                    <p className="testimony">
                                        PiggyVest was introduced to me some years back and I have been able to save 
                                        multiple millions over the years. I look forward to more from PiggyVest.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <p>Saturday, 24th of September 2022 bt 19:58 PM</p>
                            <div>
                                <img src={Joseph} alt="Joseph A" width="35" height="10" />
                                <div>    
                                    <h6>Joseph A</h6>
                                    <p className="testimony">
                                        PiggyVest has helped me with buying my new iPhone and it is the most reliable app.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <p>Thursday, 6th of October 2022 bt 11:42 AM</p>
                            <div>
                                <img src={Tobenna} alt="Tobenna A" width="35" height="10" />
                                <div>
                                    <h6>Tobenna A</h6>
                                    <p className="testimony">
                                        Thanks to piggyvest I've saved enough money to start up a really large business.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <p>Wednesday, 5th of October 2022 bt 03:08 AM</p>
                            <div>
                                <img src={Michael} alt="Michael F" width="35" height="10" />
                                <div>
                                    <h6>Michael F</h6>
                                    <p className="testimony">
                                        I just joined tho and I believe piggyVest won't disappoint me &#128522 &#10084;&#65039;
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <p>Tuesday, 4th of October 2022 bt 18:01 PM</p>
                            <div>
                                <img src={Oluwadamilola} alt="Oluwadamilola A" width="35" height="10" />
                                <div>
                                    <h6>Oluwadamilola A</h6>
                                    <p className="testimony">
                                        PiggyVest was introduced to me some years back and I have been able to save 
                                        multiple millions over the years. I look forward to more from PiggyVest.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <p>Saturday, 24th of September 2022 bt 19:58 PM</p>
                            <div>
                                <img src={Joseph} alt="Joseph A" width="35" height="10" />
                                <div>
                                    <h6>Joseph A</h6>
                                    <p className="testimony">
                                        PiggyVest has helped me with buying my new iPhone and it is the most reliable app.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
