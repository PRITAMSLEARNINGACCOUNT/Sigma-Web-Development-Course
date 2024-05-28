//Spread Operator With Javascript Object
let obj = {
  name: "Pritam",
  surname: "Saha",
};
let obj_2 = { ...obj, name: "Papia", surname: "Saha" };
console.log(obj_2, obj);
let obj_3 = {
  name: "Papia",
};
obj = obj_3;
console.log(obj);
//Spread Operator With Array
let arr = [1, 2];
console.log([...arr, 5, 6]);
