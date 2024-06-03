let arr = [];
let obj = {
  key: "Pritam",
  key2: "Pritam",
  key3: "Pritam",
};
console.log(typeof JSON.stringify([...arr, obj]));
console.log(typeof JSON.parse(JSON.stringify([...arr, obj, obj])));
