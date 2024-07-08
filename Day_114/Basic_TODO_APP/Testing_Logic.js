let Tasks = [
  {
    Task_Key: "Today",
  },
  {
    Task_Key: "Twomorrow",
  },
  {
    Task_Key: "Future",
  },
];
localStorage.setItem("Tasks", JSON.stringify(Tasks));
let Todo = [
  {
    Todo_Title: "Aaj Karna Hain",
    Todo_Description: "This is a simple todo description",
    Belongs_To: "Twomorrow",
  },
  {
    Todo_Title: "Aaj Karna Hain",
    Todo_Description: "This is a simple todo description",
    Belongs_To: "Twomorrow",
  },
  {
    Todo_Title: "Future Mein Karna Hain",
    Todo_Description: "This is a simple future todo description",
    Belongs_To: "Future",
  },
  {
    Todo_Title: "Aaj Karna Hain",
    Todo_Description: "This is a simple todo description",
    Belongs_To: "Twomorrow",
  },
  {
    Todo_Title: "Aaj Karna Hain",
    Todo_Description: "This is a simple todo description",
    Belongs_To: "Twomorrow",
  },
  {
    Todo_Title: "Aaj Karna Hain",
    Todo_Description: "This is a simple todo description Today",
    Belongs_To: "Today",
  },
  {
    Todo_Title: "Aaj Karna Hain",
    Todo_Description: "This is a simple todo description Today",
    Belongs_To: "Today",
  },
  {
    Todo_Title: "Future Mein Karna Hain",
    Todo_Description: "This is a simple future todo description",
    Belongs_To: "Future",
  },
];

localStorage.setItem("Todos", JSON.stringify(Todo));
let Todos = localStorage.getItem("Todos");
Todos = JSON.parse(Todos);
console.log(Todos);
// let GetTasks = ;
// console.log(GetTasks[0].Task_Key);
console.log(
  Todos.filter((item) => {
    return (
      item.Belongs_To === JSON.parse(localStorage.getItem("Tasks"))[0].Task_Key
    );
  })
);
