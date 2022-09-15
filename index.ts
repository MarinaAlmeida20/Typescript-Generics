// Create a function to assert that two numbers are the same
// if not, throw an Error

// Generics Function 
const mustBeEqual = <T>(x: T, y: T) => { // T means type generic
  if(x !== y) throw new Error (`${x} must be equal to ${y}`)
  console.log(`${x} is equal to ${y}`)
}

mustBeEqual(123, 123)
mustBeEqual(123, 'abc')

// dont create many functions with the same purpose
const numMustBeEqual = (x: number, y: number) => {
  if(x !== y) throw new Error (`${x} must be equal to ${y}`)
}

const strMustBeEqual = (x: string, y: string) => {
  if(x !== y) throw new Error (`${x} must be equal to ${y}`)
}

// this will compare the type
const anyMustBeEqual = (x: any, y: any) => {
  if(x !== y) throw new Error (`${x} must be equal to ${y}`)
}

// anyMustBeEqual(123, 'abc')