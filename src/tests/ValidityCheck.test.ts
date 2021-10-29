import { ValidityCheckForPersonalId } from "../ValidityCheck";

describe("Test valid and invalid personal numbers", () => {
  const validPersonalNumbers = [
    "201701102384",
    "141206-2380",
    "20080903-2386",
    "7101169295",
    "198107249289",
    "19021214-9819",
    "190910199827",
    "191006089807",
    "192109099180",
    "4607137454",
    "194510168885",
    "900118+9811",
    "189102279800",
    "189912299816",
  ];
  const invalidPersonalNumbers = ["201701272394", "190302299813"];
  const validOrdinationNumbers = ["190910799824"];
  const validOrganizationNumbers = [
    "556614-3185",
    "16556601-6399",
    "262000-1111",
    "857202-7566",
  ];
  validPersonalNumbers.map((id) => {
    it(`Should pass valid personal number ${id}`, () => {
      expect(ValidityCheckForPersonalId(id)).toBe(true);
    });
  });

  invalidPersonalNumbers.map((id) => {
    it(`Should fail invalid personal number ${id}`, () => {
      expect(ValidityCheckForPersonalId(id)).toBe(false);
    });
  });
  validOrdinationNumbers.map((id) => {
    it(`Should pass valid ordination number ${id}`, () => {
      expect(ValidityCheckForPersonalId(id)).toBe(true);
    });
  });
  validOrganizationNumbers.map((id) => {
    it(`Should pass valid organisationNumber number ${id}`, () => {
      expect(ValidityCheckForPersonalId(id)).toBe(true);
    });
  });
});
