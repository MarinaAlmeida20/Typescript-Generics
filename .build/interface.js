const filterById = (id, data) => {
  return data.filter((x) => x.id !== id);
};
const nData = [{ id: 123 }, { id: 321 }];
const sData = [{ id: "123" }, { id: "321" }];
console.log("yes", filterById(123, nData)[0].id);
console.log(filterById("123", sData)[0].id);
//# sourceMappingURL=interface.js.map
