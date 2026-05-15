import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            // Provide multiple entries as an object
            entry: {
                index: 'index.js',
                utils: 'utils.js'
            },
            name: '@architg564/first',
            formats: ['es'],
            // Dynamically generate file names for each entry
            fileName: (format, entryName) => `${entryName}.js`
        }
    }
});