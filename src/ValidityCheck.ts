import { cleanIdInput, validateDate } from "./util";
import {
  isValidPersonalIdRegexTest,
  isValidOrdinationNumberRegexTest,
  isValidOrganisationNumberRegexTest,
} from "./regex";
import { luhnAlgorithm } from "./luhnAlgorithm";
import readline from "readline";

export const ValidityCheckForPersonalId = (id: string): boolean => {
  // 1: Check regex for personal ID
  // 2: Validate correct date
  // 3: Validate checksum with lunn algorithm
  if (isValidPersonalIdRegexTest(id)) {
    if (!validateDate(id, false)) {
      return false;
    }
    return luhnAlgorithm(cleanIdInput(id));
  }

  // 1: Check regex for ordination ID
  // 2: Validate correct date
  // 3: Validate checksum with lunn algorithm
  if (isValidOrdinationNumberRegexTest(id)) {
    if (!validateDate(id, true)) {
      return false;
    }
    return luhnAlgorithm(cleanIdInput(id));
  }

  // 1: Check regex for organization ID
  // 2: Validate checksum with lunn algorithm
  if (isValidOrganisationNumberRegexTest(id)) {
    return luhnAlgorithm(cleanIdInput(id));
  }
  return false;
};

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
        ValidityCheckForPersonalId(input) ? "a valid id" : "not a valid id"
      }`
    );
  });
};

readFromInput();
