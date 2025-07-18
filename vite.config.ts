import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgSpritePlugin from 'vite-plugin-svg-sprite';


export default defineConfig({
  plugins: [react(), tailwindcss(),  tsconfigPaths(),
        svgSpritePlugin({
      symbolId: 'icon-[name]', 
      include: ['src/assets/**/*.svg'],
    }),
  ],
})
