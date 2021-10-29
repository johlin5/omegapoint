export const luhnAlgorithm = (inputId: string): boolean => {
  if (inputId.length !== 10) {
    return false;
  }

  let sum = "";
  inputId
    .split("")
    .splice(0, 9)
    .map((char, index) => {
      const currentNumber = parseInt(char);
      if (index % 2 === 0) {
        sum += currentNumber * 2;
      } else {
        sum += currentNumber;
      }
    });

  //Split, parse and calculate sum
  const total = sum
    .split("")
    .map((num) => {
      return parseInt(num);
    })
    .reduce((acc, curr) => {
      return curr + acc;
    });

  const expectedLastDigit = total % 10 === 0 ? 0 : 10 - (total % 10);
  const actualLastDigit = parseInt(inputId.slice(-1));

  if (expectedLastDigit === actualLastDigit) {
    return true;
  }

  return false;
};
