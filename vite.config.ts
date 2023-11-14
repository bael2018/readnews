import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      store: '/src/store',
      pages: '/src/pages',
      types: '/src/types',
      utils: '/src/utils',
      hooks: '/src/hooks',
      scss: '/src/scss',
      assets: '/src/assets',
      constants: '/src/constants',
    }
  }
})
