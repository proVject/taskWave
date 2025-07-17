import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
    base: "/taskWave/",
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    plugins: [
        vue(),
        tailwindcss(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.png'],
            devOptions: {
                enabled: false
            },
            manifestIcons: {
                src: 'favicon.png',
                sizes: [96, 128, 192, 256, 384, 512],
                purpose: 'any maskable'
            },
            manifest: {
                name: 'TaskWave',
                short_name: 'TaskWave',
                description: 'Kanban-style task manager',
                theme_color: '#3B82F6',
                icons: [
                    {
                        "src": "pwa-64x64.png",
                        "sizes": "64x64",
                        "type": "image/png"
                    },
                    {
                        "src": "pwa-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "pwa-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    },
                    {
                        "src": "maskable-icon-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "maskable"
                    }
                ]

            },
            workbox: {
                runtimeCaching: [
                    // {
                    //     urlPattern: ({ request }) => request.destination === 'document',
                    //     handler: 'NetworkFirst',
                    //     options: {
                    //         cacheName: 'html-cache',
                    //     }
                    // },
                    // {
                    //     urlPattern: ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
                    //     handler: 'StaleWhileRevalidate',
                    //     options: {
                    //         cacheName: 'asset-cache',
                    //     }
                    // },
                    {
                        urlPattern: ({ request }) => request.destination === 'document',
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'html-cache',
                        }
                    },
                    {
                        urlPattern: ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'asset-cache',
                        }
                    },
                    {
                        urlPattern: ({ request }) => request.destination === 'image',
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'image-cache',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                            }
                        }
                    }
                ]
            }
        })
    ],
})
