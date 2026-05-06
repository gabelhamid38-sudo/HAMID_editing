import { X } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'Short-Form' | 'Long-Form';
  vimeoUrl: string;
  vimeoId: string;
}

interface VideoModalProps {
  video: PortfolioItem;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
        >
          <X size={32} />
        </button>

        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src={`https://player.vimeo.com/video/${video.vimeoId}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold text-white">{video.title}</h3>
          <p className="text-yellow-400 mt-2">{video.category}</p>
        </div>
      </div>
    </div>
  );
}
