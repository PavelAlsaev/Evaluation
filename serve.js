const esbuild = require("esbuild");

esbuild
  .serve(
    {
      servedir: "public",
      port: 8000,
    },
    {
      entryPoints: ["./src/index.js"],
      outfile: "./public/assets/app.js",
      bundle: true,
      watch: true,
      loader: {
        ".js": "jsx",
      },
    }
  )
  .catch(() => process.exit());