import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),
        // other kit options...
    },

    // Vite configuration should be at the top level
    vite: {
        server: {
            hmr: {
                clientPort: 5173,
                host: "localhost"
            }
        }
    }
};

export default config;
