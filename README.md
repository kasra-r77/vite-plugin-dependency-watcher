# vite-plugin-dependency-watcher

Allows watching for changes in dependencies and reload the browser when they change. it also resets the cache for the changed dependencies.

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

## API

```js
dependencyWatcher(
  // Array of package paths
  packagePaths: string[],
  // Array of package names
  packageNames: string[],
)
```
