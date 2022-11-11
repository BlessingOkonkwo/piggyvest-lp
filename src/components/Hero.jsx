import React from 'react'
import apple from '../assets/imgs/apple-logo.svg'
import android from '../assets/imgs/playstore-icon.svg'
import rect from '../assets/imgs/rect.png'
import headerImg from '../assets/imgs/headerImg.png'
import card1 from '../assets/imgs/card1.png'
import card2 from '../assets/imgs/card2.png'
import circle from '../assets/imgs/circle.svg'
import cross from '../assets/imgs/cross.svg'
import dots from '../assets/imgs/dots.svg'





const Hero = () => {
  return (
    <section className="top-sec">
    <div className="container">
        <div className="row">
            <div className="column top-div">
                <div className="text">
                    <h1 data-aos="fade-up" data-aos-duration="1000">The Better Way to Save & Invest.</h1>
                    <p>PiggyVest helps over 4 million customers achieve their financial 
                        goals by helping them save and invest with ease. 
                    </p>
                </div>
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

            <div className="column dfc">
                <div className="img-group">
                    <img src={rect} alt="rect" className="rect" />
                    <img src={headerImg} alt="" className="headerImg" />
                    <img src={card1} width="215px" alt="" className="card1" />
                    <img src={card2} width="215px" alt="" className="card2" />
                    <img src={circle} alt="circle" className="circle" data-aos="fade-up" data-aos-duration="1000" />
                    <img src={cross} alt="cross" className="cross" data-aos="fade-up" data-aos-duration="1000" />
                    <img src={dots} alt="dots" className="dots" data-aos="fade-up" data-aos-duration="1000" />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Hero
