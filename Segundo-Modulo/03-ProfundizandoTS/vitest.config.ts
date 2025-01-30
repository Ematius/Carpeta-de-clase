import { defineConfig } from 'vitest/config';

export default defineConfig({
    // Your configuration options here
    test: {
        globals: true,
        include: ['**/*.test.ts'],
    },
});
