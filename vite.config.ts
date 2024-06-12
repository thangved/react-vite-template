import html from "@tomjs/vite-plugin-html";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { optimizeCssModules } from "vite-plugin-optimize-css-modules";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default () => {
	return defineConfig({
		plugins: [
			react(),
			nodePolyfills(),
			optimizeCssModules(),
			html({ minify: true }),
			ViteImageOptimizer(),
			VitePWA({
				registerType: "autoUpdate",
				devOptions: {
					enabled: true,
				},
				manifest: {
					name: "Vite React App",
					short_name: "Vite React App",
					description: "A Vite React app with PWA support",
					background_color: "#ffffff",
					theme_color: "#000000",
					start_url: "/",
					display_override: ["window-controls-overlay"],
					icons: [
						{
							src: "pwa-64x64.png",
							sizes: "64x64",
							type: "image/png",
						},
						{
							src: "pwa-192x192.png",
							sizes: "192x192",
							type: "image/png",
						},
						{
							src: "pwa-512x512.png",
							sizes: "512x512",
							type: "image/png",
						},
						{
							src: "maskable-icon-512x512.png",
							sizes: "512x512",
							type: "image/png",
							purpose: "maskable",
						},
					],
				},
			}),
		],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
		build: {
			assetsInlineLimit: 100000000,
		},
	});
};
