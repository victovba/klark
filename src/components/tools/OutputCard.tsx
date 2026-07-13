'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Props {
  text: string;
  isPlaceholder: boolean;
}

export default function OutputCard({ text, isPlaceholder }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (isPlaceholder) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6 relative min-h-[100px] shadow-lg shadow-black/5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Version corporate
        </span>
        {!isPlaceholder && (
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
              copied
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                : 'bg-white/80 text-gray-500 hover:text-gray-700 border border-gray-200 hover:border-gray-300'
            }`}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copié !' : 'Copier'}
          </button>
        )}
      </div>

      <div
        className={`text-sm leading-relaxed min-h-[40px] ${
          isPlaceholder ? 'text-gray-300 italic' : 'text-gray-800'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
