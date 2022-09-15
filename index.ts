// Create a function to assert that two numbers are the same
// if not, throw an Error
const numMustBeEqual = (x: number, y: number) => {
  if(x !== y) throw new Error (`${x} must be equal to ${y}`)
}