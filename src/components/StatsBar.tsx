export default function StatsBar() {
  const stats = [
    { number: '122+', label: 'Projects' },
    { number: '5★', label: 'Ratings' },
    { number: '24+', label: 'Clients' },
    { number: '3+', label: 'Years' },
  ];

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center group slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <p className="text-gray-400 text-sm md:text-base mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
