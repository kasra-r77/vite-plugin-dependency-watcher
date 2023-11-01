# vite-plugin-dependency-watcher

Allows watching for changes in dependencies and reload the browser when they change. it also resets the cache for the changed dependencies.<br>
this plugin is only useful in development mode for watching certain dependencies and reloading the browser on file changes.

[![NPM version](https://img.shields.io/npm/v/vite-plugin-dependency-watcher.svg?logo=npm)](https://npmjs.com/package/vite-plugin-dependency-watcher)

## Install

```bash
npm i -D vite-plugin-dependency-watcher
```

## Usage

```js
import dependencyWatcher from 'vite-plugin-dependency-watcher'

export default {
  plugins: [
    dependencyWatcher({
      // package paths
      [path.resolve(
          process.cwd(),
          'node_modules/package-name'
        ),
        ...
        ],
      // package names
        ['package-name',...]
    })
  ]
}
```

**Note**: if the dependency you want to watch has a nested CJS dependency, you need to add the nested dependency to `optimizeDeps.include` in vite config file. example from [Vite docs](https://vitejs.dev/config/dep-optimization-options.html#optimizedeps-exclude):

```js
export default defineConfig({
  optimizeDeps: {
    include: ["esm-dep > cjs-dep"],
  },
});
```

## API

```js
dependencyWatcher(
  // Array of package paths
  packagePaths: string[],
  // Array of package names
  packageNames: string[],
)
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/kasra-r77/vite-plugin-dependency-watcher
