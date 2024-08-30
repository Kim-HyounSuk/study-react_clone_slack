import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@layouts': path.resolve(__dirname, 'src/layouts'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@types': path.resolve(__dirname, 'src/types'),
			'@styles': path.resolve(__dirname, 'src/styles'),
		},
	},
});
