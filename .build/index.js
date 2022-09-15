const mustBeEqual = (x, y) => {
  if (x !== y)
    throw new Error(`${x} must be equal to ${y}`);
  console.log(`${x} is equal to ${y}`);
};
mustBeEqual(123, 123);
mustBeEqual(123, "abc");
const numMustBeEqual = (x, y) => {
  if (x !== y)
    throw new Error(`${x} must be equal to ${y}`);
};
const strMustBeEqual = (x, y) => {
  if (x !== y)
    throw new Error(`${x} must be equal to ${y}`);
};
const anyMustBeEqual = (x, y) => {
  if (x !== y)
    throw new Error(`${x} must be equal to ${y}`);
};
//# sourceMappingURL=index.js.map
