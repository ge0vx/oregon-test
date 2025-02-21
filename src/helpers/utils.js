export function hideString(value) {
  return value.replace(/./g, "•");
}

export function isEmailFormat(str) {
  return /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(str);
}

export const isEmptyObjectProperty = (inputObject) => {
  return Object.values(inputObject).some((o) => o === null);
};
