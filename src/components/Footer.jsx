
import { personalInfo } from '../data/portfolioData';

export default function Footer() {

  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Krati Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
