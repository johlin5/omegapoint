import { cleanIdInput, validateDate } from "./util";
import {
  personalIdRegexTest,
  ordinationNumberRegexTest,
  organisationNumberRegexTest,
} from "./regex";
import { luhnAlgorithm } from "./luhnAlgorithm";
import readline from "readline";

export const ValidityCheckForPersonalId = (id: string): boolean => {
  const isValidPersonalId = personalIdRegexTest(id);
  const isValidOrdinationNumber = ordinationNumberRegexTest(id);
  const isValidOrganisationNumber = organisationNumberRegexTest(id);

  switch (true) {
    case isValidPersonalId:
      if (!validateDate(id, false)) {
        return false;
      }
      return luhnAlgorithm(cleanIdInput(id));

    case isValidOrdinationNumber:
      if (!validateDate(id, true)) {
        return false;
      }
      return luhnAlgorithm(cleanIdInput(id));

    case isValidOrganisationNumber:
      return luhnAlgorithm(cleanIdInput(id));
    default:
      return false;
  }
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
