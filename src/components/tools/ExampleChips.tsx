'use client';

interface Props {
  onSelect: (text: string) => void;
}

const examples = [
  { text: "T'as pas encore fini ? C'est pas compliqué pourtant.", short: "T'as pas encore fini ?" },
  { text: "Mais qui a pondu ce truc ? C'est n'importe quoi.", short: "Qui a pondu ce truc ?" },
  { text: "Je t'ai déjà répondu t'es aveugle ?", short: "Je t'ai déjà répondu" },
  { text: "C'est encore cassé ton truc de merde", short: "C'est encore cassé" },
];

export default function ExampleChips({ onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {examples.map((ex) => (
        <button
          key={ex.text}
          onClick={() => onSelect(ex.text)}
          className="px-3.5 py-1.5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full text-xs text-gray-500 hover:text-[#00A8FF] hover:border-[#00A8FF]/30 hover:bg-[#00A8FF]/5 transition-all duration-200 cursor-pointer"
        >
          {ex.short}
        </button>
      ))}
    </div>
  );
}
