# ECMAScript: Classic JS vs Modern JS

**English** | [Español](README.es.md)

> 📦 **Legacy project.** These are study notes from my early days learning web development. The repository is kept as-is for reference and is no longer maintained.

A collection of short, side-by-side examples comparing **classic JavaScript (ES5)** with the features introduced in each ECMAScript release from **ES6 (2015) through ES13 (2022)**.

## How it's organized

Each folder under `src/` covers one ECMAScript version. Most files are split into two blocks:

```js
/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/
var data = Math.pow(3, 4);

/*
|--------------------------------------------------------------------------
| ECMAScript
|--------------------------------------------------------------------------
*/
const data = 3 ** 4;
```

The first block shows how the problem was solved before the feature existed. The second block shows the modern syntax. Code comments are in Spanish.

## Contents

| Version | Year | Topics |
|---|---|---|
| [ES6](src/ECMAScript%C2%A06) | 2015 | `let` / `const`, arrow functions, template literals, default parameters, destructuring, spread operator, object property shorthand, promises, classes (getters/setters), modules, generators, `Set` |
| [ES7](src/ECMAScript%C2%A07) | 2016 | Exponentiation operator `**`, `Array.prototype.includes` |
| [ES8](src/ECMAScript%C2%A08) | 2017 | `Object.entries`, `Object.values`, `padStart` / `padEnd`, trailing commas, `async` / `await` |
| [ES9](src/ECMAScript%C2%A09) | 2018 | Regex capture groups, object rest/spread, `Promise.prototype.finally`, async generators and `for await...of` |
| [ES10](src/ECMAScript%C2%A010) | 2019 | `flat` / `flatMap`, `trimStart` / `trimEnd`, optional `catch` binding, `Object.fromEntries` |
| [ES11](src/ECMAScript%C2%A011) | 2020 | Optional chaining `?.`, `BigInt`, nullish coalescing `??`, `Promise.allSettled`, `globalThis`, `matchAll`, dynamic `import()` |
| [ES12](src/ECMAScript%C2%A012) | 2021 | Numeric separators, `replaceAll`, `Promise.any`, private class methods |
| [ES13](src/ECMAScript%C2%A013) | 2022 | `Array.prototype.at`, top-level `await` |

## Running the examples

Requirements: [Node.js](https://nodejs.org/) 18 or later.

```bash
git clone https://github.com/jcomte23/ECMA-Script.git
cd ECMA-Script
npm install
node "src/ECMAScript 13/01_at.js"
```

Things to keep in mind:

- The project uses ES modules (`"type": "module"` in `package.json`).
- Folder names contain a non-breaking space between `ECMAScript` and the version number. Use tab completion in your terminal instead of typing the path.
- Many files declare the classic and the modern version with the same variable names, because they were written as notes rather than runnable scripts. To run one of those, comment out one of the two blocks.
- The dynamic import example (`src/ECMAScript 11/07_DinamicImport.js/`) runs in the browser. Serve the folder with a static server (for example `npx serve`) and open `index.html`.
- The top-level `await` example (`src/ECMAScript 13/02_top_level_await.js`) fetches data from the public [Platzi Fake Store API](https://fakeapi.platzi.com/).

## Author

**Javier Cómbita Téllez** — [@jcomte23](https://github.com/jcomte23)

## License

This project is licensed under the [MIT License](LICENSE).
