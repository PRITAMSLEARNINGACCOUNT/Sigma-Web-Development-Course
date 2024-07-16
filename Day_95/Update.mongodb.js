use("CRUD_Operations");

// db.Create_Operation.updateOne(
//   { Student_Code: "BWU/BCA/23/152" },
//   { $set: { Gender: "Male" } }
// );

db.Create_Operation.updateMany(
  { Gender: "Female" },
  { $set: { Gender: "Animal" } }
);
