import { useEffect, useRef, useState } from 'react';

interface HeroPortfolioScrollProps {
  heroContent: React.ReactNode;
  portfolioContent: React.ReactNode;
}

export default function HeroPortfolioScroll({ heroContent, portfolioContent }: HeroPortfolioScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // scroll progress: 0 when container top hits viewport top, 1 when sticky phase ends
      const stickyScrollRange = containerHeight - viewportHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / stickyScrollRange));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero slides left: from x=0 to x=-25%, scale 1 to 0.85
  const heroX = progress * -25;
  const heroScale = 1 - progress * 0.15;
  const heroOpacity = 1;

  // Portfolio slides in from right: x=100% to x=0
  const portfolioX = (1 - progress) * 100;
  const portfolioOpacity = progress;

  return (
    <>
      {/* Mobile / tablet: normal vertical stack */}
      <div className="lg:hidden">
        {heroContent}
        {portfolioContent}
      </div>

      {/* Desktop: scroll-linked side-by-side */}
      <div
        ref={containerRef}
        className="hidden lg:block relative"
        style={{ height: '250vh' }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-stretch">
          {/* Hero panel */}
          <div
            className="w-1/2 h-full transition-none"
            style={{
              transform: `translateX(${heroX}%) scale(${heroScale})`,
              transformOrigin: 'center center',
              transition: 'none',
            }}
          >
            <div className="h-full overflow-hidden">{heroContent}</div>
          </div>

          {/* Portfolio panel */}
          <div
            className="w-1/2 h-full overflow-y-auto"
            style={{
              transform: `translateX(${portfolioX}%)`,
              opacity: portfolioOpacity,
              transition: 'none',
              pointerEvents: progress > 0.05 ? 'auto' : 'none',
            }}
          >
            <div className="min-h-full flex items-center">{portfolioContent}</div>
          </div>
        </div>
      </div>
    </>
  );
}
