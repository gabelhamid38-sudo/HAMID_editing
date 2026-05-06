import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 slide-up">
          <p className="label-accent">LET'S WORK TOGETHER</p>
          <h2 className="section-heading">
            Ready to Make <span className="text-yellow-400">Something Great?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Got a project in mind? Let's talk. I'm ready to bring your vision to life.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 slide-up">
          <a
            href="http://www.fiverr.com/s/zWDoqgv"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Order on Fiverr <ArrowRight size={20} />
          </a>
          <a
            href="https://wa.me/213542888414"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            WhatsApp Me
          </a>
        </div>

        <div className="pt-12 border-t border-gray-800 slide-up">
          <a
            href="mailto:gabelhamid38@gmail.com"
            className="inline-flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition-colors text-lg font-semibold"
          >
            <Mail size={24} />
            <span>gabelhamid38@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
