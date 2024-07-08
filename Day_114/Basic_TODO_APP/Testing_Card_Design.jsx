const Card_Design = () => {
  return (
    <div>
      <div className="w-full max-w-sm mb-4 md:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[45vh] max-h-[45vh] text-wrap overflow-auto">
        {/* <div className="flex justify-end px-4 pt-4">
            <div className="relative">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  onClick={HandleClick}
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
              <div
                id="dropdown"
                className={`absolute mt-1 z-10 ${
                  first ? "" : "hidden"
                } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        {/* --->Dropdown Menu Code */}
        <div className="flex flex-col items-center justify-between h-[100%] py-5">
          <h1 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Note Title
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 p-5">
            Note Description
            <br />
            veritatis fuga nisi voluptates minus facilis aut officiis natus.
            Tenet, omnis harum? Adipisci molestias dolor possimus placeat
            nostrum, temporibus similique dolores non veritatis fuga nisi
          </p>
          <div className="flex mt-4 md:mt-6 pb-3">
            <button className="inline-flex  items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <CiEdit className="text-xl" />
            </button>
            <button className="py-2 px-4 redclass ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <MdDeleteForever className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_Design;
