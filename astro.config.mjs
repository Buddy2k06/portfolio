import { defineConfig } from 'astro/config';
// Mermaid blocks are left untouched by the highlighter and rendered in the browser (see Base.astro).
export default defineConfig({
  markdown: { syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid'] }, shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } } },
});
