import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths in production (use '/' if deploying to the root of a domain)
  build: {
    outDir: 'dist', // Default is 'dist'; no need to change unless required
  },
});
