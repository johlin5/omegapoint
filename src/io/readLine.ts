import readline from "readline";
import { ValidityCheckForId } from "../ValidityCheck";
const readFromInput = () => {
  const rl = readline.createInterface({
    input: process.stdin,
  });

  let input = "";

  rl.on("line", (line) => {
    input = line;
  });

  rl.on("close", () => {
    console.log(
      `The id ${input} is ${
        ValidityCheckForId(input) ? "a valid id" : "not a valid id"
      }`
    );
  });
};

readFromInput();
