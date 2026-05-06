import { Film, Zap, Clapperboard, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Film,
      title: 'YouTube Video Editing',
      description: 'Engaging long-form content that keeps viewers watching and grows your channel.',
    },
    {
      icon: Zap,
      title: 'Short-Form & Reels',
      description: 'Scroll-stopping vertical videos optimized for TikTok, Instagram Reels, and YouTube Shorts.',
    },
    {
      icon: Clapperboard,
      title: 'Brand & Commercial Edits',
      description: 'Cinematic brand videos that communicate your story with impact.',
    },
    {
      icon: Sparkles,
      title: 'Motion Graphics',
      description: 'Dynamic text animations, titles, and visual effects that elevate your footage.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 slide-up">
          <p className="label-accent">WHAT I OFFER</p>
          <h2 className="section-heading">
            Services That <span className="text-yellow-400">Convert & Captivate</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 hover:border-yellow-400/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10 slide-up hover:translate-y-[-8px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                  <Icon className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
