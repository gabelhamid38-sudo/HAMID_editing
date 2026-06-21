import { Star } from 'lucide-react';

const stats = [
  { number: '122+', label: 'Projects' },
  { number: '5★', label: 'Ratings' },
  { number: '24+', label: 'Clients' },
  { number: '3+', label: 'Years' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 slide-up">
          <p className="label-accent">ABOUT ME</p>
          <h2 className="section-heading">
            Crafting Stories <span className="text-yellow-400">Frame by Frame</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative fade-in-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-2xl blur-3xl glow-pulse" />
            <div className="relative bg-gradient-to-br from-gray-900 to-black p-1 rounded-2xl overflow-hidden border border-yellow-400/20">
              <img
                src="/file_00000000ec64722faebf3e31c51bd67f.png"
                alt="Gabel Abdelhamid"
                className="w-full rounded-xl object-cover object-top"
              />
              <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-yellow-400/20">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm">Top Rated</span>
              </div>
            </div>
          </div>

          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi, I'm Gabel Abdelhamid — a passionate video editor with over 3 years of experience turning raw footage into compelling visual narratives. I specialize in YouTube content, brand commercials, and viral short-form videos. My approach blends technical precision with creative storytelling.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every cut, transition, and color grade is intentional — designed to evoke emotion and drive results for my clients.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-gray-800">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
