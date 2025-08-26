import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Disable SSR for static hosting on GitHub Pages
  ssr: false,
  // Set basename for GitHub Pages deployment
  basename: "/",
} satisfies Config;
