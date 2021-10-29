export const cleanIdInput = (id: string) => {
  const idWithOnlyNumbers = id.replace(/\D/g, "");
  if (idWithOnlyNumbers.length === 12) {
    return idWithOnlyNumbers.slice(2, 12);
  }
  return idWithOnlyNumbers;
};

export const validateDate = (id: string, isOrdination: boolean) => {
  id = convertIdToTwelveDigit(id);
  if (id.length !== 12) {
    return false;
  }
  const { year, month, day } = {
    year: parseInt(id.slice(0, 4)),
    month: parseInt(id.slice(4, 6)),
    day: parseInt(id.slice(6, 8)),
  };

  if (new Date(year, month, 0).getDate() < (isOrdination ? day - 60 : day)) {
    return false;
  }
  return true;
};

const convertIdToTwelveDigit = (id: string) => {
  if (id.length === 12) {
    return id;
  }
  if (id.length === 10) {
    return `19${id}`;
  }
  if (id.includes("-")) {
    const replacedId = id.replace("-", "");
    if (replacedId.length === 10) {
      return `19${replacedId}`;
    }
    return replacedId;
  }
  if (id.includes("+")) {
    return `18${id.replace("+", "")}`;
  }
  return id;
};
