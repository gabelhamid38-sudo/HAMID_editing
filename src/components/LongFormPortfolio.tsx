import { Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'Short-Form' | 'Long-Form';
  vimeoUrl: string;
  vimeoId: string;
  thumbnail: string;
}

interface LongFormPortfolioProps {
  items: PortfolioItem[];
  onSelectVideo: (video: PortfolioItem) => void;
}

export default function LongFormPortfolio({ items, onSelectVideo }: LongFormPortfolioProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800/50"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <p className="label-accent">YOUTUBE EDITING</p>
          <h2 className="section-heading">
            Long-Form <span className="text-yellow-400">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-video bg-gradient-to-br from-gray-800 to-black"
              onClick={() => onSelectVideo(item)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

              <div className="absolute top-3 right-3 bg-yellow-400/90 text-black text-xs font-bold px-2 py-1 rounded-full">
                Long-Form
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/50">
                  <Play className="w-7 h-7 text-black fill-black" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-sm md:text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
