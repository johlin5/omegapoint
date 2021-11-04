import { cleanIdInput, validateDate } from "./util";
import {
  isValidPersonalIdRegexTest,
  isValidOrdinationNumberRegexTest,
  isValidOrganisationNumberRegexTest,
} from "./regex";
import { luhnAlgorithm } from "./luhnAlgorithm";

export const ValidityCheckForId = (id: string): boolean => {
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
