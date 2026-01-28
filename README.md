This is the playground for JavaScript

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
| Dart / Flutter           | npm equivalent                              |
| ------------------------ |---------------------------------------------|
| `dart pub add pkg`       | `npm install pkg`                           |
| `dart pub add --dev pkg` | `npm install -D pkg`                        |
| `dart pub get`           | `npm install`                               |
| `dart pub install`       | `npm install`                               |
| `flutter clean`          | `rm -rf node_modules && rm package-lock.json` |
| `dart pub global activate pkg`   | `npm install -g pkg`                        |
| `dart pub global deactivate pkg` | `npm uninstall -g pkg`                      |

## Dart testing components equivalent in Javascript (with mocha)
This is a setup if you're building a JavaScript library. For testing
React  components, you should use `jest` library instead of `mocha`
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