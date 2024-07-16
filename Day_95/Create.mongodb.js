use("CRUD_Operations");

db.createCollection("Create_Operation");
db.Create_Operation.insertOne({
  Name: "PRITAM SAHA",
  Student_Code: "BWU/BCA/23/152",
});
db.Create_Operation.insertMany([
  {
    Name: "Pritam Saha",
    Student_Code: "BWU/BCA/23/152",
  },
  {
    Name: "Swati Madduney",
    Student_Code: "BWU/BCA/23/156",
  },
  {
    Name: "Debangana Roy",
    Student_Code: "BWU/BCA/23/139",
  },
]);
