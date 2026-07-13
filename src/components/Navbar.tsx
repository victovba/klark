'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle, BookOpen, WandSparkles } from 'lucide-react';
import TiltCard from './TiltCard';

const links = [
  { href: '/', label: 'Accueil', icon: MessageCircle },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/tools/diplomat-o-matic', label: 'Diplomat', icon: WandSparkles },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/60 backdrop-blur-2xl border-b border-white/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <TiltCard intensity={5}>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00A8FF] to-[#70A1FF] bg-clip-text text-transparent">
                Klar
              </span>
            </TiltCard>
          </Link>

          <div className="flex items-center gap-1">
            {links.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00A8FF]/10 text-[#00A8FF]'
                      : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100/50'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
