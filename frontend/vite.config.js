import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
    base: "/Websolution/", // 👈 very important!

  plugins: [react()],
});
