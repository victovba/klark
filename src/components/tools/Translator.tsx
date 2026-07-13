'use client';

import { useState, useCallback } from 'react';
import { WandSparkles } from 'lucide-react';
import MoodSelector from '@/components/tools/MoodSelector';
import OutputCard from '@/components/tools/OutputCard';
import ExampleChips from '@/components/tools/ExampleChips';
import { useTranslator } from '@/hooks/useTranslator';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { Mood, TranslationRecord } from '@/types';

export default function Translator() {
  const [input, setInput] = useState(
    "Arrête de me relancer toutes les deux minutes, je suis déjà sur trois trucs en même temps."
  );
  const [mood, setMood] = useState<Mood>('standard');
  const [output, setOutput] = useState('');
  const [hasTranslated, setHasTranslated] = useState(false);
  const { translate } = useTranslator();
  const [, setHistory] = useLocalStorage<TranslationRecord[]>('diplomat-history', []);

  const handleTranslate = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const result = translate(trimmed, mood);
    setOutput(result);
    setHasTranslated(true);

    const record: TranslationRecord = {
      id: Date.now().toString(),
      input: trimmed,
      output: result,
      mood,
      timestamp: Date.now(),
    };
    setHistory((prev) => [record, ...prev].slice(0, 50));
  }, [input, mood, translate, setHistory]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) handleTranslate();
  };

  const handleExample = (text: string) => setInput(text);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-5">
      <div className="text-center mb-2">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Corpo</h1>
        <p className="text-gray-400 text-sm mt-1 italic">Traducteur de pensées brutes en jargon corpo</p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Ta frustration brute
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tape ici ce que tu penses vraiment..."
          rows={4}
          className="w-full bg-white/70 backdrop-blur-xl border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm leading-relaxed resize-y min-h-[100px] transition-all duration-200 placeholder:text-gray-300 focus:outline-none focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/20 shadow-sm"
        />
      </div>

      <MoodSelector value={mood} onChange={setMood} />

      <button
        onClick={handleTranslate}
        className="w-full py-4 bg-gradient-to-r from-[#00A8FF] to-[#70A1FF] rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00A8FF]/30 active:translate-y-0 cursor-pointer shadow-md"
      >
        <WandSparkles size={18} />
        Traduire en Corpo
      </button>

      <OutputCard
        text={hasTranslated ? output : 'Le résultat apparaîtra ici...'}
        isPlaceholder={!hasTranslated}
      />

      <ExampleChips onSelect={handleExample} />

      <p className="text-center text-gray-300 text-xs">
        <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-400 text-[11px] border border-gray-200">Ctrl+Enter</kbd> pour traduire
      </p>
    </div>
  );
}
