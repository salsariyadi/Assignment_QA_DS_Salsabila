import { kalkulator } from "./rumus.js";
import readline from "readline";

const inputUser = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

inputUser.question("Angka pertama: ", (a) => {
  inputUser.question("Angka kedua: ", (b) => {
    inputUser.question("Operator (+ - * /): ", (op) => {

      const hasil = kalkulator(Number(a), Number(b), op);
      console.log("Hasil =", hasil);

      inputUser.close();
    });
  });
});
