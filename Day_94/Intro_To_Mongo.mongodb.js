use("Database_Name");

db.getCollection("Collection_Name").insertMany([
  {
    Student_Name: "PRITAM SAHA",
    Programme_Name: "BCA",
    Student_Code: "BWU/BCA/23/152",
    Student_Hobby: "Coding",
    IsAdmitted: false,
  },
  {
    Student_Name: "ANITA SHARMA",
    Programme_Name: "MCA",
    Student_Code: "BWU/MCA/23/153",
    Student_Hobby: "Reading",
    IsAdmitted: true,
  },
  {
    Student_Name: "RAHUL VERMA",
    Programme_Name: "BBA",
    Student_Code: "BWU/BBA/23/154",
    Student_Hobby: "Sports",
    IsAdmitted: false,
  },
  {
    Student_Name: "SNEHA KAPOOR",
    Programme_Name: "MBA",
    Student_Code: "BWU/MBA/23/155",
    Student_Hobby: "Music",
    IsAdmitted: true,
  },
  {
    Student_Name: "VIKAS KUMAR",
    Programme_Name: "B.Tech",
    Student_Code: "BWU/BTECH/23/156",
    Student_Hobby: "Gaming",
    IsAdmitted: false,
  },
]);

console.log(`Documents Inserted Successfully In The Mongodb Database`);
