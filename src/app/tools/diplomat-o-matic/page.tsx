import type { Metadata } from "next";
import Translator from "@/components/tools/Translator";

export const metadata: Metadata = {
  title: "Corpo — Klar",
  description: "Transforme tes pensées brutes en langage corporate poli. Choisis entre Standard, Ferme ou Urgence.",
};

export default function DiplomatOMaticPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70 pointer-events-none" />
      <div className="relative w-full max-w-2xl mx-auto px-6">
        <Translator />
      </div>
    </div>
  );
}
