import { useState } from 'react';
import { Play } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'Short-Form' | 'Long-Form';
  vimeoUrl: string;
  vimeoId: string;
  thumbnail: string;
}

interface PortfolioProps {
  items: PortfolioItem[];
  onSelectVideo: (video: PortfolioItem) => void;
}

export default function Portfolio({ items, onSelectVideo }: PortfolioProps) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Short-Form', 'Long-Form'];

  const filteredItems = selectedFilter === 'All'
    ? items
    : items.filter(item => item.category === selectedFilter);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <p className="label-accent">PORTFOLIO</p>
          <h2 className="section-heading">
            Recent <span className="text-yellow-400">Work</span>
          </h2>
        </div>

        <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                selectedFilter === filter
                  ? 'bg-yellow-400 text-black'
                  : 'border border-yellow-400/30 text-yellow-400 hover:border-yellow-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer slide-up"
              onClick={() => onSelectVideo(item)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-yellow-400/50">
                    <Play className="w-7 h-7 text-black fill-black" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1.5 rounded-full text-xs font-bold">
                  {item.category}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
