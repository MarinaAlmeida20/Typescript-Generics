// Using Generica in interface

interface Data<T extends string | number>{ // type contraints
  id: T;
}

// normal way
interface Data2 {
  id: number;
}

// using in function
const filterById = <T extends string | number>(id: T, data: Data<T>[]) => {
  return data.filter((x) => x.id !== id);
}

const nData = [{ id: 123}, {id: 321}]
const sData = [{id: '123'}, {id: '321'}]

console.log(filterById(123, nData)[0].id)
console.log(filterById('123', sData)[0].id)


// this doesnt work, because of the type contraints
// filterById({}, [{id: {}}])
