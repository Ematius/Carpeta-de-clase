import { defineConfig } from 'vitest/config.js';

export default defineConfig({
    // Your configuration options here
    test: {
        globals: true,
        include: ['src/**/*.spec.ts'],
    },
});
