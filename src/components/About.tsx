import { Star } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Premiere Pro', percentage: 96 },
    { name: 'After Effects', percentage: 85 },
    { name: 'Motion Graphics', percentage: 80 },
  ];

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

          <div className="space-y-6 fade-in">
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi, I'm Gabel Abdelhamid — a passionate video editor with over 3 years of experience turning raw footage into compelling visual narratives. I specialize in YouTube content, brand commercials, and viral short-form videos. My approach blends technical precision with creative storytelling.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every cut, transition, and color grade is intentional — designed to evoke emotion and drive results for my clients.
              </p>
            </div>

            <div className="space-y-6 pt-6">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Technical Skills</p>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <span className="text-yellow-400 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 transition-all duration-500"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
