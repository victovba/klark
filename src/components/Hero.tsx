'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <TiltCard intensity={8}>
            <span className="inline-block text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#00A8FF] via-[#70A1FF] to-[#A78BFA] bg-clip-text text-transparent tracking-tight">
              Klar
            </span>
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Clarifiez vos échanges
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Des principes concrets, des méthodes éprouvées et une dose de bon sens
            pour transformer votre communication professionnelle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <MagneticButton as="a" href="/blog">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00A8FF] to-[#70A1FF] text-white font-medium rounded-full shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-200 transition-shadow">
              Explorer le blog
              <ArrowRight size={16} />
            </span>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-1.5 text-gray-400 text-xs"
        >
          <Sparkles size={12} />
          <span>Communication claire &bull; Feedback constructif &bull; Travail d&apos;équipe</span>
        </motion.div>
      </div>
    </section>
  );
}
