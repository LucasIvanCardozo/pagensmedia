// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.pagensmedia.com.ar',
  output: 'static',
  build: {
    format: 'directory',
  },
})
