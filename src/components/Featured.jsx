import React from 'react'

import techpoint1 from '../assets/imgs/techpoint1.svg'
import techpoint2 from '../assets/imgs/techpoint2.png'
import theGuardian1 from '../assets/imgs/theguardian1.svg'
import theGuardian2 from '../assets/imgs/theguardian2.png'
import techcrunch1 from '../assets/imgs/techcrunch1.svg'
import techcrunch2 from '../assets/imgs/techcrunch2.png'


const Featured = () => {
  return (
    <section style={{backgroundColor: '#f9f9f9'}} className="featured tac">
        <div className="container">
            <div className="row">
                <div className="column">
                    <h4 data-aos="fade-up" data-aos-duration="2000">As featured in</h4>
                </div>
                <div className="column">
                    <a data-aos="fade-up" data-aos-duration="1000" href="https://techpoint.africa/2019/05/31/piggybank-secures-1-1-million-funding/" target="_blank" rel="noreferrer">
                        <div style={{position: 'relative', display:'inline-block'}}>
                            <img src={techpoint1} alt="TechPoint Box" />
                            <img src={techpoint2} alt="TechPoint Img" style={{width: '137px', position: 'absolute', left: 0}} />
                        </div>
                    </a>
                    
                    
                    <a data-aos="fade-up" data-aos-duration="1000" href="https://guardian.ng/news/nigeria/piggybank-asserts-expansion-plans-becomes-piggyvest" target="_blank" rel="noreferrer" >
                        <div style={{position: 'relative', display: 'inline-block'}}>
                            <img src={theGuardian1} alt="The Guardian Box" />
                            <img src={theGuardian2} alt="The Guardian Img" style={{width: '137px', position: 'absolute', left: 0}} />
                        </div>
                    </a>
                    

                    <a data-aos="fade-up" data-aos-duration="1000" href="https://techcrunch.com/2018/05/31/nigerias-piggybank-ng-raises-1-1m-announces-group-investment-product/" target="_blank" rel="noreferrer" >
                        <div style={{position: 'relative', display: 'inline-block'}}>
                            <img src={techcrunch1} alt="TechCrunch Box" />
                            <img src={techcrunch2} alt="TechCrunch Img" style={{width: '137px', position: 'absolute', left: 0}} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured
