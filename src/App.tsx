import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import LongFormPortfolio from './components/LongFormPortfolio';
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

  const shortFormItems: PortfolioItem[] = [
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
      title: 'OMAR PROJECT',
      category: 'Short-Form',
      vimeoUrl: 'https://vimeo.com/1194756630?fl=pl&fe=sh',
      vimeoId: '1194756630',
      thumbnail: '/thumbnails/ChatGPT_Image_Apr_22,_2026,_11_24_44_PM.png',
    },
    {
      id: '6',
      title: 'بودكاست مدرسة الاستثمار',
      category: 'Short-Form',
      vimeoUrl: 'https://vimeo.com/1106113576?fl=pl&fe=sh',
      vimeoId: '1106113576',
      thumbnail: 'https://vumbnail.com/1106113576.jpg',
    },
  ];

  const longFormItems: PortfolioItem[] = [
    {
      id: '7',
      title: 'Business Knowledge (Simon Squibb)',
      category: 'Long-Form',
      vimeoUrl: 'https://vimeo.com/1185684464?fl=pl&fe=sh',
      vimeoId: '1185684464',
      thumbnail: '/thumbnails/Capture_d\'ecran_2026-05-15_165454.png',
    },
    {
      id: '8',
      title: 'Mike Mak PROJECT',
      category: 'Long-Form',
      vimeoUrl: 'https://vimeo.com/1192654935?fl=pl&fe=sh',
      vimeoId: '1192654935',
      thumbnail: '/thumbnails/ChatGPT_Image_May_2,_2026,_01_58_32_PM.png',
    },
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Portfolio items={shortFormItems} onSelectVideo={setSelectedVideo} />
      <LongFormPortfolio items={longFormItems} onSelectVideo={setSelectedVideo} />
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
