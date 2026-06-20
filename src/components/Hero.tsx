import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 slide-up">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold">AVAILABLE FOR PROJECTS</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight slide-up">
                Elite Video Editor Helping content creators{' '}
                <span className="text-yellow-400">turn passion into a career</span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl slide-up">
                Professional video editor specializing in YouTube content, brand videos, and viral short-form. Let's create something unforgettable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 slide-up">
              <a
                href="http://www.fiverr.com/s/zWDoqgv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Order on Fiverr <ArrowRight size={20} />
              </a>
              <a
                href="#portfolio"
                className="btn-secondary"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="relative flex justify-center fade-in-scale">
            <div className="relative w-full max-w-md float-animation">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-3xl blur-3xl glow-pulse" />

              <div className="relative bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl overflow-hidden border border-yellow-400/20">
                <div className="bg-black p-6 rounded-2xl space-y-4">
                  <img
                    src="/file_00000000ec64722faebf3e31c51bd67f.png"
                    alt="Gabel Abdelhamid"
                    className="w-full rounded-xl object-cover object-top"
                  />

                  <div className="relative">
                    <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-yellow-400/20">
                      <span className="text-yellow-400 text-xs font-bold">SKILLS</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Gabel Abdelhamid</h3>
                    <p className="text-yellow-400 font-semibold">Professional Video Editor</p>

                    <div className="flex gap-1 pt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
