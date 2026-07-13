'use client';

import { ChevronDown } from 'lucide-react';
import type { Mood } from '@/types';

interface Props {
  value: Mood;
  onChange: (mood: Mood) => void;
}

const moods: { value: Mood; label: string }[] = [
  { value: 'standard', label: 'Standard' },
  { value: 'firme', label: 'Ferme mais poli' },
  { value: 'urgence', label: 'Urgence absolue' },
];

export default function MoodSelector({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
        Niveau de diplomatie
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as Mood)}
          className="w-full appearance-none bg-white/70 backdrop-blur-xl border border-gray-200 rounded-xl px-4 py-3.5 pr-10 text-gray-800 text-sm cursor-pointer transition-all duration-200 focus:outline-none focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/20 shadow-sm"
        >
          {moods.map((m) => (
            <option key={m.value} value={m.value} className="bg-white text-gray-800">
              {m.label}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}
