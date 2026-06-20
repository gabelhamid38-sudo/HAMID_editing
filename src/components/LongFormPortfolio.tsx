import { Play } from 'lucide-react';

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
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 slide-up">
          <p className="label-accent">YOUTUBE EDITING</p>
          <h2 className="section-heading">
            Long-Form <span className="text-yellow-400">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer slide-up aspect-video bg-gradient-to-br from-gray-800 to-black"
              onClick={() => onSelectVideo(item)}
              style={{ animationDelay: `${index * 0.1}s` }}
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
