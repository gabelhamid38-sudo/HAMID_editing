import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'Short-Form' | 'Long-Form';
  vimeoUrl: string;
  vimeoId: string;
  thumbnail: string;
}

function App() {
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'OMAR PROJECT',
      category: 'Short-Form',
      vimeoUrl: 'https://vimeo.com/1183479819?fl=pl&fe=sh',
      vimeoId: '1183479819',
      thumbnail: '/ChatGPT_Image_Apr_22,_2026,_11_42_15_PM.png',
    },
    {
      id: '2',
      title: 'PABLO PROJECT',
      category: 'Short-Form',
      vimeoUrl: 'https://vimeo.com/1106128036?fl=pl&fe=sh',
      vimeoId: '1106128036',
      thumbnail: '/ChatGPT_Image_Apr_22,_2026,_11_51_01_PM.png',
    },
    {
      id: '3',
      title: 'MIKE PROJECT',
      category: 'Short-Form',
      vimeoUrl: 'https://vimeo.com/1178169360?fl=pl&fe=sh',
      vimeoId: '1178169360',
      thumbnail: '/ChatGPT_Image_Apr_22,_2026,_11_45_01_PM.png',
    },
    {
      id: '4',
      title: 'PROJECT 3',
      category: 'Short-Form',
      vimeoUrl: 'https://vimeo.com/1136622682?fl=pl&fe=sh',
      vimeoId: '1136622682',
      thumbnail: '/Capture_d\'ecran_2026-04-22_234744.png',
    },
    {
      id: '5',
      title: 'ARABIC PODCAST',
      category: 'Short-Form',
      vimeoUrl: 'https://vimeo.com/1106113576?fl=pl&fe=sh',
      vimeoId: '1106113576',
      thumbnail: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '6',
      title: 'SIMON SQUIBB',
      category: 'Long-Form',
      vimeoUrl: 'https://vimeo.com/1185684464?fl=pl&fe=sh',
      vimeoId: '1185684464',
      thumbnail: 'https://images.pexels.com/photos/3938020/pexels-photo-3938020.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Portfolio items={portfolioItems} onSelectVideo={setSelectedVideo} />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  );
}

export default App;
