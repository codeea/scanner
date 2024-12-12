import { createInterface, Interface } from "readline";

export default class Scanner {
  private readline: Interface;

  constructor() {
    this.readline = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public async question(questionText: string) {
    return new Promise<string>((resolve) =>
      this.readline.question(questionText, resolve)
    );
  }

  public async questionFloat(questionText: string) {
    return new Promise<string>((resolve) =>
      this.readline.question(questionText, resolve)
    ).then((value) => parseFloat(value ?? ""));
  }

  public async questionInt(questionText: string) {
    return new Promise<string>((resolve) =>
      this.readline.question(questionText, resolve)
    ).then((value) => parseInt(value ?? ""));
  }

  public close() {
    this.readline.close();
  }
}
