use("CRUD_Operations");

db.Create_Operation.deleteOne({
  Gender: "Male",
});

db.Create_Operation.deleteMany({
  Gender: "Animal",
});
