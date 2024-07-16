use("CRUD_Operations");

let Find_Result = db.Create_Operation.find();
console.log(Find_Result);
// Conditional Finding

db.Create_Operation.find({ Student_Code: "BWU/BCA/23/156" });
