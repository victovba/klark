'use client';

import { dictionary, defaultResponses } from '@/data/dictionary';
import type { Mood } from '@/types';

export function useTranslator() {
  const translate = (text: string, mood: Mood): string => {
    const moodDict = dictionary[mood];
    const lower = text.toLowerCase();

    for (const entry of moodDict) {
      for (const pattern of entry.patterns) {
        if (lower.includes(pattern)) return entry.response;
      }
    }

    return defaultResponses[mood];
  };

  return { translate };
}
