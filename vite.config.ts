import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/rec-mainpuri-timetable---electrical-/',
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['campus.jpg','icons/icon-64.png','official-timetable.pdf'],
    manifest: {
      name: 'REC Mainpuri', short_name: 'REC Timetable', description: 'Electrical Engineering timetable — B.Tech First Year I Semester',
      theme_color: '#6e1b25', background_color: '#f8f4ed', display: 'standalone', orientation: 'portrait', start_url: '/', scope: '/',
      icons: [{src:'/icons/icon-192.png',sizes:'192x192',type:'image/png',purpose:'any maskable'},{src:'/icons/icon-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'}]
    },
    workbox: { navigateFallback: '/', globPatterns: ['**/*.{js,css,html,png,jpg,svg,pdf}'] }
  })]
});
