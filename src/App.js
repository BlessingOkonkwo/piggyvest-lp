import Cards from './components/Cards.jsx';
import Featured from './components/Featured.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx';
import Invest from './components/Invest.jsx';
import Saver from './components/Saver.jsx';
import Security from './components/Security.jsx';
import Testimonials from './components/Testimonials.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header/>
      <Hero/>
      <Security/>
      <Cards/>
      <Invest/>
      <Saver/>
      <Testimonials/>
      <Featured/>
      <Footer/>
    </div>
  
  );
}

export default App;
