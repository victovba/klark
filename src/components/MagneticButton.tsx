'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({ children, className = '', as = 'button', href, onClick }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 120) {
      const factor = (120 - dist) / 120;
      setPos({ x: dx * factor * 0.3, y: dy * factor * 0.3 });
    } else {
      setPos({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 12, mass: 0.5 }}
      className="inline-block"
    >
      {as === 'a' && href ? (
        <Link
          href={href}
          onClick={onClick}
          className={className}
        >
          {children}
        </Link>
      ) : (
        <motion.button
          onClick={onClick}
          className={className}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {children}
        </motion.button>
      )}
    </motion.div>
  );
}
