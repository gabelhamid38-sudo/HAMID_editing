import { Star, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: 'Honestly, this is great work. This is the first time I\'ve dealt with an editor who\'s done such professional work.',
      author: 'Mike Mak',
    },
    {
      stars: 5,
      text: 'يا خويا الله يبارك بروفيسيونال بزاف انت ما شاء الله.',
      author: 'Abdullah Drici',
    },
    {
      stars: 4,
      text: 'خدمه نقيه وفي الوقت الله يبارك.',
      author: 'Mohammed',
    },
    {
      stars: 5,
      text: 'Working with hamid was a fantastic experience. I needed an advanced motion graphics video, and he delivered a premium Instagram Reel right on time',
      author: 'Deepak',
    },
    {
      stars: 5,
      text: 'عمل متقون ورائع من دواعي سرور ان نعمل معا لمده اطول.',
      author: 'ARTEX AGENCY',
    },
    {
      stars: 5,
      text: 'GOOD WORK MAN KEEP GOING.',
      author: 'IDRIS (SCROLIA AGENCY)',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 slide-up">
          <p className="label-accent">TESTIMONIALS</p>
          <h2 className="section-heading">
            What Clients <span className="text-yellow-400">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 hover:border-yellow-400/50 p-8 rounded-2xl transition-all duration-300 slide-up hover:translate-y-[-8px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center border border-yellow-400/20">
                  <User className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="font-semibold text-white">— {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
