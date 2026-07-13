import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white/50 backdrop-blur-sm mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-gray-400">
        <span>&copy; {new Date().getFullYear()} Klar</span>
        <span className="flex items-center gap-1">
          Fait avec <Heart size={12} className="text-red-300" /> pour des échanges plus clairs
        </span>
      </div>
    </footer>
  );
}
