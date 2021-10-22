import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@/": `${path.resolve(__dirname, "src")}/`,
		},
	},
	sourcemap: true,
	// css: { postcss: "./postcssapp.config.js" },
});
