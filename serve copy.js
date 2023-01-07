const http = require("http");
const esbuild = require("esbuild");

const serve = async (servedir, listen) => {
  const { host, port } = await esbuild.serve({ servedir }, {
    entryPoints: ["./src/index.js"],
    outfile: "./public/assets/app.js",
    bundle: true,
    watch: true,
    loader: {
      ".js": "jsx",
    },
  });
  const proxy = http.createServer((req, res) => {
    const forwardRequest = (path) => {
      const options = {
        hostname: host,
        port,
        path,
        method: req.method,
        headers: req.headers,
      };

      const proxyReq = http.request(options, (proxyRes) => {
        if (proxyRes.statusCode === 404) {
          return forwardRequest("/");
        }
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
      });

      req.pipe(proxyReq, { end: true });
    };
    forwardRequest(req.url);
  });
  proxy.listen(listen);
};

serve("public", 1234);