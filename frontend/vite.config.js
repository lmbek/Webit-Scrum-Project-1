import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteHtmlPlugin from 'vite-plugin-html';

export default defineConfig({
  plugins: [react(), ViteHtmlPlugin()],
})



