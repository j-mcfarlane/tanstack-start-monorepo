import { defineConfig } from '@tanstack/start/config'
import { pigment } from '@pigment-css/vite-plugin'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    vite: {
        optimizeDeps: {
            include: ['prop-types', 'react-is'],
        },
        plugins: [
            pigment({}),
            tsConfigPaths({
                projects: ['./tsconfig.json'],
            }),
        ],
    },
})
