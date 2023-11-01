import { ViteDevServer } from "vite";
import chokidar from "chokidar";

export default function dependencyWatcher(
  dependenciesPath: string[] = [],
  dependenciesName: string[] = []
) {
  return {
    name: "dependency-watcher",
    apply: "serve",
    //watching dependencies for file changes and reloads the browser
    configureServer(server: ViteDevServer) {
      const watcher = chokidar.watch(dependenciesPath);
      watcher.on("change", () => {
        server.ws.send({ type: "full-reload" });
      });

      server.middlewares.use((req, res, next) => {
        if (
          req.url &&
          dependenciesName.some((name) => req.url?.includes(name))
        ) {
          req.url += Date.now();
          res.setHeader("Expires", "0");
          res.setHeader("Pragma", "no-cache");
        }
        next();
      });
    },

    config() {
      return {
        optimizeDeps: {
          exclude: [...dependenciesName],
        },
      };
    },
  };
}
