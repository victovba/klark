export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  coverGradient: string;
  tags: string[];
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'blockquote'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'tip'; text: string }
  | { type: 'callout'; text: string };

export type Mood = 'standard' | 'firme' | 'urgence';

export interface DictionaryEntry {
  patterns: string[];
  response: string;
}

export type Dictionary = Record<Mood, DictionaryEntry[]>;

export interface TranslationRecord {
  id: string;
  input: string;
  output: string;
  mood: Mood;
  timestamp: number;
}
