This mono repository is the playground learning-ground for JavaScript.
Most of the learning materials are written as code examples. But Some notes or useful images are here in README as well.

# Introduction

The JavaScript language was initially created for web browsers. Since then, it has evolved into a language with many uses and platforms.

A platform may be a browser, or a web-server or another host, or even a "smart" coffee machine if it can run JavaScript. Each of these provides platform-specific functionality. The JavaScript specification calls that a host environment.

A host environment provides its own objects and functions in addition to the language core. Web browsers give a means to control web pages. Node.js provides server-side features, and so on.

Here's a bird's-eye view of what we have when JavaScript runs in a web browser:

#### Browser:

![image](./images/js_window.png)

#### Node:

![image](./images/nodejs_runtime_structure.png)

# Simple notes

- scripts inside HTML docs can only access the document lines above so. if a script is inside <head> it cannot read <body>
- JavaScript introduced ES Modules with import and export as the modern, standardized module system, while Node originally used its own older system called CommonJS, which loads modules using require() and module.exports.

## DOM Node classes

![image](./images/dom_nodes.png)
READ more at https://javascript.info/basic-dom-node-properties

## NPM Commands:

| Dart / Flutter                   | npm equivalent                                |
| -------------------------------- | --------------------------------------------- |
| `dart pub add pkg`               | `npm install pkg`                             |
| `dart pub add --dev pkg`         | `npm install -D pkg`                          |
| `dart pub get`                   | `npm install`                                 |
| `dart pub install`               | `npm install`                                 |
| `flutter clean`                  | `rm -rf node_modules && rm package-lock.json` |
| `dart pub global activate pkg`   | `npm install -g pkg`                          |
| `dart pub global deactivate pkg` | `npm uninstall -g pkg`                        |

## Dart testing components equivalent in Javascript (with mocha)

This is a setup if you're building a JavaScript library. For testing
React components, you should use `jest` library instead of `mocha`

- group → describe
- test → it
- setUp → beforeEach
- tearDown → afterEach
- setUpAll → before
- tearDownAll → after

#### Test Structure:

```
my-lib/
  src/
    math.js
  test/
    math.test.js
  package.json
```

#### Basic requirements in package.json

```json
{
  "name": "my-lib",
  "type": "module",
  "scripts": {
    "test": "mocha",
    "test:watch": "mocha --watch"
  },
  "devDependencies": {
    "mocha": "^10.0.0",
    "chai": "^4.0.0"
  }
}
```

Then run `npm test` to run the `test` script defined in `package.json`

# React

### Simple notes:

- Use vite for creating new projects
- Similar to Flutter `main.jsx` is the entrypoint for our application.
- `App.jsx` is usually where the root component is defined.
- The main style file for the whole app is in `src/index.css` other than that each component has its own css file by convention eg: `Btn.jsx` has a `Btn.css`. That being said, there is no limitation on how many css files can be imported in a component file.
- Whatever put in `/public` will be directly available after build.
- Whatever put in `/src/assets` will be processed by vite base on the set configuration during build.

### Vite Project

Vite is a frontend build tool.

- To create a new react/vue/angular/etc project run `npm create vite@latest`
- choose React and then "Javascript" or "Typescript"

##### Vite config:

`vite.config.js` controls how the app runs and builds.

- plugins: extend Vite (React, PWA, SVG, etc.)
- server: dev server settings (port, proxy, HTTPS)
- build: production output (bundling, chunks, sourcemaps)
- resolve: path aliases for cleaner imports
- css / define / base: styling, globals, deploy path

##### What is Module Resolution?

Module resolution = how Vite finds files when you use `import`.

- Relative imports: ./ and ../ paths from current file
- Node modules: packages from node_modules (e.g. 'react')
- Aliases: custom path shortcuts (e.g. '@' → '/src')
  Vite controls these rules via the `resolve` option.

### Prettier + ESLint setup + WebStorm config

ESLint for code quality and Prettier for code formatting.
like dart analyze and dart format

After setup. you must get lints from eslint in your code. and format from prettier on file save.

Also you can run format and lint manually

##### 1️⃣ Install

`npm i -D prettier eslint eslint-config-prettier`

Add following scripts to `package.json`. These commands allows you to run lint and format manually.

```
"lint": "eslint .",
"format": "prettier --write ."
```

##### 2️⃣ Add Prettier config

Create `.prettierrc` in project root:

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80
}
```

Create `.prettierignore`:

```
node_modules
dist
build
coverage
```

##### 3️⃣ Configure ESLint

Create or edit `.eslintrc`:

```
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ]
}
```

`eslint-config-prettier` disables ESLint rules that conflict with Prettier.
It does NOT replace Prettier.

##### 4️⃣ Important clarification

- You STILL use Prettier when using `eslint-config-prettier`.
- `eslint-config-prettier` only prevents rule conflicts.
- `.prettierrc` is still required for formatting rules.

##### 5️⃣ Enable in WebStorm

Settings → Languages & Frameworks → JavaScript → Prettier

- Set package to `node_modules/prettier`
- Enable "On save"

## Tailwind

To Add tailwind to vite setup go to https://tailwindcss.com/docs/installation/using-vite

## Common React Hooks

React Hooks let you use state, lifecycle behavior, and other React features inside functional components.

| Pattern                  | Hooks         |
| ------------------------ | ------------- |
| Local component state    | `useState`    |
| API calls / side effects | `useEffect`   |
| Prevent child re-renders | `useCallback` |
| Derived state            | `useMemo`     |
| DOM access               | `useRef`      |
| Global state             | `useContext`  |
| Complex state management | `useReducer`  |

List of all built-in react hooks https://react.dev/reference/react/hooks

#### Functional State Update (React)

Use:

```js
setCount((prev) => prev + 1);
```

instead of:

```js
setCount(count + 1);
```

**Why:** React may **batch updates**, so `count` can be **stale**.

Example:

```js
setCount(count + 1);
setCount(count + 1);
```

Result: `+1`

Correct:

```js
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

Result: `+2`
