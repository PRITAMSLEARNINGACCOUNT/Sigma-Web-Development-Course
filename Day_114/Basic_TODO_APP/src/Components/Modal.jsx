import { Todo_Context } from "../Context/Todo_Context";
import { useContext } from "react";

function Modal() {
  let { Note, SetNote, Notes, SetNotes, Todo, Desc, setTodo, setDesc } =
    useContext(Todo_Context);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const obj = { Todo, Desc };
    // console.log([...Notes, obj]);
    SetNotes([...Notes, obj]);
    localStorage.setItem("Todos", JSON.stringify([...Notes, obj]));
    SetNote(false);
    setDesc("");
    setTodo("");
  };
  const HandleNameChange = (e) => {
    setTodo(e.target.value);
  };
  const HandleDescChange = (e) => {
    setDesc(e.target.value);
  };

  return (
    <>
      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          Note ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Todo
              </h3>
            </div>
            <form className="p-4 md:p-5">
              <div className="col-span-2 mb-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Todo Title
                </label>
                <input
                  value={Todo}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Todo Title Here"
                  required=""
                  onChange={HandleNameChange}
                />
              </div>
              <div className="col-span-2 mb-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Todo Description
                </label>
                <textarea
                  id="description"
                  value={Desc}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write Todo Description Here"
                  onChange={HandleDescChange}
                ></textarea>
              </div>
              <div className="flex justify-center items-center mt-5">
                <button
                  type="submit"
                  onClick={HandleSubmit}
                  className="text-white inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
