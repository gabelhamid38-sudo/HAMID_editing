import { Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 fade-in">
          <div className="flex items-center gap-8">
            <a
              href="https://instagram.com/hamid__kbl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors hover:scale-110"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://twitter.com/hamidediting07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors hover:scale-110"
              title="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:gabelhamid38@gmail.com"
              className="text-gray-400 hover:text-yellow-400 transition-colors hover:scale-110"
              title="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-gray-500 text-sm text-center md:text-right">
            © 2024 Gabel Abdelhamid. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
