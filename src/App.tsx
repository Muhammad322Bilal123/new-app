import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import HowItWorks from './components/HowItWorks';
import Applications from './components/Applications';
import Vision from './components/Vision';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <video
      autoPlay
      loop
      muted
      playsInline
      controls
      className="absolute inset-0 w-full h-full object-cover"
      >
      <source src="/bg-vid/a.mp4" type="video/mp4" />
      </video>

      <div className="relative bg-black text-white overflow-x-hidden">
      <Hero scrollY={scrollY} />
      <Introduction scrollY={scrollY} />
      <HowItWorks scrollY={scrollY} />
      <Applications scrollY={scrollY} />
      <Vision />
      <Demo />
      <Footer />
      </div>
    </div>
  );
}

export default App;
