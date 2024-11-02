import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Alias for the src directory
      '@shadcn/ui': resolve(__dirname, 'node_modules/@shadcn/ui'), // Alias for the shadcn UI
    },
  },
});
