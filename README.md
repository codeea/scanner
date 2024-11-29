# PT-BR 🇧🇷

Biblioteca Scanner - Entrada de dados via terminal (console) com suporte a TypeScript!

Essa biblioteca foi criada para ser usada apenas com objetivos educacionais.

Exemplo de utilização:

```ts
import Scanner from "@codeea/scanner";

const main = async () => {
  const scanner = new Scanner();
  for (let index = 0; index < 10; index++) {
    const name = await scanner.question(`${index + 1} - What is your name? `);
    console.log(`Hello ${name}!`);
  }
  scanner.close();
};

main();

```

# EN

Scanner Library - Input data via terminal (console) with TypeScript support!

This library was created for educational purposes only.

Example of use:

```ts
import Scanner from "@codeea/scanner";

const main = async () => {
  const scanner = new Scanner();
  for (let index = 0; index < 10; index++) {
    const name = await scanner.question(`${index + 1} - What is your name? `);
    console.log(`Hello ${name}!`);
  }
  scanner.close();
};

main();

```
