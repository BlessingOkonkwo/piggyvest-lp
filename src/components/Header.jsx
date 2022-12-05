import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBars, faXmark } from '@fortawesome/sharp-solid-svg-icons'
import Logo from '../assets/imgs/logo1.svg'
import cardIcon1 from '../assets/imgs/card-icon1.png'
import cardIcon2 from '../assets/imgs/card-icon2.png'
import cardIcon3 from '../assets/imgs/card-icon3.png'
import cardIcon4 from '../assets/imgs/card-icon4.png'

const Header = () => {
    const [display_nav, setDisplay] = useState(true)

    const nav_div = useRef(null)
    const bars = useRef(null)
    const x = useRef(null)
    const hover_dd = useRef(null)
    const hover_dd2 = useRef(null)


  
    const show = () => {
        hover_dd.current.classList.remove("dn");
        hover_dd.current.classList.add("df");
    };
    const hide = () => {
        hover_dd.current.classList.remove("df");
        hover_dd.current.classList.add("dn");
    };

    const show2 = () => {
        hover_dd2.current.classList.remove("dn");
        hover_dd2.current.classList.add("df");
    }
    const hide2 = () => {
        hover_dd2.current.classList.remove("df");
        hover_dd2.current.classList.add("dn");
    };

   

    const toggleNav = () =>{
        if (display_nav === true) {
            nav_div.current.classList.remove("dn");
            bars.current.classList.add("dn");
            x.current.classList.remove("dn");
            setDisplay(!display_nav)
        }else {
            nav_div.current.classList.add("dn");
            x.current.classList.add("dn");
            bars.current.classList.remove("dn");
            setDisplay(!display_nav)

        }
    };

  return (
    <header>
    <nav style={{position: 'relative'}} className='nav1'>
        <a href="/">
            <img src={Logo} alt="App Logo" className="logo" width="155px" />
        </a>

        <div className="hamburger" style={{marginLeft: '10px'}}>
            <FontAwesomeIcon icon={faBars} size="2x" style={{position: 'absolute', top: 0, right: 0}} onClick={toggleNav} ref={bars} id="bars" />
            <FontAwesomeIcon icon={faXmark} size="2x" style={{position: 'absolute', top: 0, right: 0}} className="dn" onClick={toggleNav} ref={x} id="x" />
        </div>

        <div className="dn nav-div" ref={nav_div}>
            <div className="nav-links">
                <ul style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <li id="save" onMouseOver={show}  onMouseOut={hide} style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <a href="/#save">Save</a>
                        <div id="hover-dd" ref={hover_dd} className="hover-dd dn">
                            <a href="https://piggyvest.com/piggybank">
                                <img src={cardIcon1} width="25px" alt="" />
                                Piggybank
                            </a>
                            <a href="https://piggyvest.com/safelock">
                                <img src={cardIcon2} width="25px" alt="" />
                                Safelock
                            </a>
                            <a href="https://piggyvest.com/targets">
                                <img src={cardIcon3} width="25px" alt="" />
                                Target Savings
                            </a>
                            <a href="https://piggyvest.com/flex-naira">
                                <img src={cardIcon4} width="25px" alt="" />
                                Flex Naira
                            </a>
                        </div>
                    </li>

                    <li>
                        <a href="https://www.piggyvest.com/invest">
                            Invest
                        </a>
                    </li>
                    <li>
                        <a href="https://www.piggyvest.com/stories">
                            Stories
                        </a>
                    </li>
                    <li>
                        <a href="https://www.piggyvest.com/faq">
                            FAQs
                        </a>
                    </li>
                    <li>
                        <a href="https://blog.piggyvest.com/">
                            Blog
                        </a>
                    </li>
                </ul>
            </div>

            <div className="btns dfc" style={{width: '100%'}}>
                <a href="https://dashboard.piggyvest.com/login" target="_blank" rel="noreferrer" className="btn bold btn-bcw" style={{width: '100%'}}>
                    Sign in
                </a>
                <a href="https://dashboard.piggyvest.com/register" target="_blank" rel="noreferrer"  className="btn bold btn-bcb" style={{width: '100%'}}>
                    Create free account
                </a>
            </div>
        </div>
    </nav>

    <nav style={{position: 'relative'}} className="nav2">
        <a href="/">
            <img src={Logo} alt="App Logo" className="logo" width="155px" />
        </a>

        <div className="nav-div2" style={{paddingTop:0}}>
            <div className="nav-links2">
                <ul>
                    <li id="save" onMouseOver={show2}  onMouseOut={hide2}>
                        <a href="/#save">Save</a>
                        <div id="hover-dd2" ref={hover_dd2} className="hover-dd dn">
                            <a href="https://piggyvest.com/piggybank">
                                <img src={cardIcon1} width="25px" alt="" />
                                Piggybank
                            </a>
                            <a href="https://piggyvest.com/safelock">
                                <img src={cardIcon2} width="25px" alt="" />
                                Safelock
                            </a>
                            <a href="https://piggyvest.com/targets">
                                <img src={cardIcon3} width="25px" alt="" />
                                Target Savings
                            </a>
                            <a href="https://piggyvest.com/flex-naira">
                                <img src={cardIcon4} width="25px" alt="" />
                                Flex Naira
                            </a>
                        </div>
                    </li>

                    <li>
                        <a href="https://www.piggyvest.com/invest">
                            Invest
                        </a>
                    </li>
                    <li>
                        <a href="https://www.piggyvest.com/stories">
                            Stories
                        </a>
                    </li>
                    <li>
                        <a href="https://www.piggyvest.com/faq">
                            FAQs
                        </a>
                    </li>
                    <li>
                        <a href="https://blog.piggyvest.com/">
                            Blog
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="btns">
            <a href="https://dashboard.piggyvest.com/login" target="_blank" rel="noreferrer" className="btn bold btn-bcw" style={{marginRight:'10px'}}>
                Sign in
            </a>
            <a href="https://dashboard.piggyvest.com/register" target="_blank" rel="noreferrer"  className="btn bold btn-bcb">
                Create free account
            </a>
        </div>
    </nav>
</header>
  )
}

export default Header
