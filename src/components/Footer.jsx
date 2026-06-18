import { Heart, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © 2024 Krati Gupta. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 flex items-center gap-1.5">
          Made with <Heart size={14} className="text-red-400 fill-red-400" /> and lots of <Coffee size={14} className="text-amber-400" />
        </p>
      </div>
    </footer>
  );
}
