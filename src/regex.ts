export const personalIdRegexTest = (id: string): boolean => {
  const validIdRegex = new RegExp(
    /^(18|19|20)?(\d{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[+-]?(\d{4}))$/
  );
  return validIdRegex.test(id);
};
export const ordinationNumberRegexTest = (id: string): boolean => {
  const validIdRegex = new RegExp(
    /^(18|19|20)?(\d{2}(0[1-9]|1[0-2])(6[1-9]|7[0-9]|8[0-9]|9[0-1])[+-]?(\d{4}))$/
  );
  return validIdRegex.test(id);
};
export const organisationNumberRegexTest = (id: string): boolean => {
  const validIdRegex = new RegExp(/^((16|18|19|20)?[2-9]\d{5}[-]\d{4})$/);
  return validIdRegex.test(id);
};
