# ECMAScript: JS clásico vs JS moderno

[English](README.md) | **Español**

> 📦 **Proyecto legacy.** Son apuntes de mis primeros años aprendiendo desarrollo web. El repositorio se conserva tal cual como referencia y ya no recibe mantenimiento.

Una colección de ejemplos cortos que comparan, lado a lado, **JavaScript clásico (ES5)** con las características que introdujo cada versión de ECMAScript, desde **ES6 (2015) hasta ES13 (2022)**.

## Cómo está organizado

Cada carpeta dentro de `src/` corresponde a una versión de ECMAScript. La mayoría de los archivos tienen dos bloques:

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

El primer bloque muestra cómo se resolvía el problema antes de que existiera la característica. El segundo muestra la sintaxis moderna.

## Contenido

| Versión | Año | Temas |
|---|---|---|
| [ES6](src/ECMAScript%C2%A06) | 2015 | `let` / `const`, funciones flecha, template literals, parámetros por defecto, desestructuración, operador de propagación, propiedades abreviadas en objetos, promesas, clases (getters/setters), módulos, generadores, `Set` |
| [ES7](src/ECMAScript%C2%A07) | 2016 | Operador exponencial `**`, `Array.prototype.includes` |
| [ES8](src/ECMAScript%C2%A08) | 2017 | `Object.entries`, `Object.values`, `padStart` / `padEnd`, trailing commas, `async` / `await` |
| [ES9](src/ECMAScript%C2%A09) | 2018 | Grupos de captura en regex, rest/spread en objetos, `Promise.prototype.finally`, generadores asíncronos y `for await...of` |
| [ES10](src/ECMAScript%C2%A010) | 2019 | `flat` / `flatMap`, `trimStart` / `trimEnd`, `catch` sin parámetro, `Object.fromEntries` |
| [ES11](src/ECMAScript%C2%A011) | 2020 | Encadenamiento opcional `?.`, `BigInt`, operador nullish `??`, `Promise.allSettled`, `globalThis`, `matchAll`, `import()` dinámico |
| [ES12](src/ECMAScript%C2%A012) | 2021 | Separadores numéricos, `replaceAll`, `Promise.any`, métodos privados en clases |
| [ES13](src/ECMAScript%C2%A013) | 2022 | `Array.prototype.at`, `await` de nivel superior (top-level await) |

## Cómo ejecutar los ejemplos

Requisitos: [Node.js](https://nodejs.org/) 18 o superior.

```bash
git clone https://github.com/jcomte23/ECMA-Script.git
cd ECMA-Script
npm install
node "src/ECMAScript 13/01_at.js"
```

Ten en cuenta:

- El proyecto usa módulos ES (`"type": "module"` en `package.json`).
- Los nombres de las carpetas tienen un espacio no separable entre `ECMAScript` y el número de versión. Usa el autocompletado de la terminal (Tab) en lugar de escribir la ruta a mano.
- Muchos archivos declaran la versión clásica y la moderna con los mismos nombres de variables, porque se escribieron como apuntes y no como scripts ejecutables. Para ejecutar uno de ellos, comenta uno de los dos bloques.
- El ejemplo de import dinámico (`src/ECMAScript 11/07_DinamicImport.js/`) se ejecuta en el navegador. Sirve la carpeta con un servidor estático (por ejemplo `npx serve`) y abre `index.html`.
- El ejemplo de top-level `await` (`src/ECMAScript 13/02_top_level_await.js`) consulta la API pública [Platzi Fake Store API](https://fakeapi.platzi.com/).

## Autor

**Javier Cómbita Téllez** — [@jcomte23](https://github.com/jcomte23)

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).
