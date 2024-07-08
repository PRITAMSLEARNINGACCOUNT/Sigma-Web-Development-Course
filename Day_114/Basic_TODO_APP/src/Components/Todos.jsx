import { useContext, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import Modal from "./Modal";
import { IoAddCircleOutline } from "react-icons/io5";
import { Todo_Context } from "../Context/Todo_Context";
import { useNavigate } from "react-router-dom";
function Todos({ setProgress }) {
  let { Notes, SetNote, SetNotes, setTodo, setDesc } = useContext(Todo_Context);
  function HandleModal() {
    SetNote(true);
  }
  // Dropdown Handling Code
  //   const [first, setFirst] = useState(false);
  //   function HandleClick() {
  //     // if (first === true) {
  //     //   setFirst(false);
  //     // } else {
  //     //   setFirst(true);
  //     // }
  //     // Alternate Logic
  //     if (first) {
  //       setFirst(!first);
  //     } else {
  //       setFirst(!first);
  //     }
  //   }
  function EditTodo(Todo) {
    HandleModal();
    setTodo(Todo.Todo);
    setDesc(Todo.Desc);
    DeleteTodo(Todo);
  }
  function DeleteTodo(Todo) {
    let NewTodos = Notes.filter((ele) => {
      return ele !== Todo;
    });
    localStorage.clear();
    localStorage.setItem("Todos", JSON.stringify(NewTodos));
    SetNotes(NewTodos);
  }
  let Navigate = useNavigate();
  useEffect(() => {
    for (let index = 10; index <= 100; index += 10) {
      setProgress(index);
    }
    let Todos = JSON.parse(localStorage.getItem("Todos"));
    if (!Todos) {
      Navigate("/");
    } else {
      SetNotes(Todos);
      console.log(Notes.length === 0);
    }
  }, []);
  return (
    <div className="p-5">
      <div className="bg-white min-h-[90vh] rounded-xl mt-5 md:mt-5 p-5 md:grid md:grid-cols-5 md:Custom-Grid gap-5 overflow-auto">
        <Modal />
        {Notes.length === 0
          ? ""
          : Notes.map((note, index) => {
              return (
                <div
                  key={index}
                  className="w-full mb-4 md:mb-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[45vh] max-h-[45vh] text-wrap overflow-auto"
                >
                  <div className="flex flex-col items-center justify-between h-[100%] py-5">
                    <h1 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {note.Todo}
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 p-5">
                      {note.Desc}
                    </p>
                    <div className="flex mt-4 md:mt-6 pb-3">
                      <button
                        onClick={() => {
                          EditTodo(note);
                        }}
                        className="inline-flex  items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <CiEdit className="text-xl" />
                      </button>
                      <button
                        onClick={() => {
                          DeleteTodo(note);
                        }}
                        className="py-2 px-4 redclass ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        <MdDeleteForever className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

        <button
          type="button"
          data-modal-target="crud-modal"
          data-modal-toggle="crud-modal"
          className="w-full flex justify-center items-center mb-4 md:mb-0 max-w-sm bg-white border border-gray-200 rounded-3xl shadow min-h-[45vh] max-h-[45vh]"
          onClick={HandleModal}
        >
          <IoAddCircleOutline className="text-7xl" />
        </button>
      </div>
    </div>
  );
}

export default Todos;
