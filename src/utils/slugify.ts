import { transliterate } from 'transliteration';

export const slugify = (text: string) => {
  return transliterate(text.toLowerCase())
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^-|-$/g, '');
};
