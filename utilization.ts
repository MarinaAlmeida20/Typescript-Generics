// commun way
type NumArr1 = number[]
// generic way
type NumArr2 = Array<number>

const last = <T>(arr: T[]): T => arr[arr.length -1]

const nArr = [123, 456]

last(nArr)

// explicit generic way
last<number>(nArr)

// Can't pass string, because it is type number
last<string>(nArr)