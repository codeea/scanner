# PT-BR 🇧🇷

Biblioteca Scanner - Entrada de dados via terminal (console) com suporte a TypeScript!

Essa biblioteca foi criada para ser usada apenas com objetivos educacionais.

Funções disponíveis:

- `question()`: retorna apenas valores em texto (string)
- `questionFloat()`: converte o texto em float e retorna um number
- `questionInt()`: converte o texto em integer e retorna um number

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

Available functions:

- `question()`: returns only text (string) values
- `questionFloat()`: converts the text to float and returns a number
- `questionInt()`: converts the text to integer and returns a number

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
