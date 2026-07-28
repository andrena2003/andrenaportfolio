import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig(async ({ command }) => {
     const plugins = [react()];
     if (command === 'serve') {
       try {
         plugins.unshift((await import('vite-plugin-iris')).default());
       } catch {
         // The optional preview helper is not required for production builds.
       }
     }
     return { plugins };
   });
