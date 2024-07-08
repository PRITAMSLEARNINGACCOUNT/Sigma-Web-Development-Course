import { toast } from "react-toastify";
import { useContext } from "react";
import Mode from "../Context/Light_Dark_Mode";
import PassContext from "../Context/Passwords";
function Passwords_Table({ setValue }) {
  const mode = useContext(Mode);
  const Passes = useContext(PassContext);
  function CopyPass(Pass) {
    navigator.clipboard.writeText(Pass);
  }

  async function Edit(ele) {
    setValue("user", ele.user);
    setValue("Password", ele.Password);
    setValue("Website", ele.Website);
    Delete(ele, "option");
    
  }
  async function Delete(element, option = null) {
    let NewPasses = Passes.Passwords.filter((e) => {
      return e._id !== element._id;
    });
    console.log(NewPasses);
    await Passes.setPasswords(NewPasses);
    await fetch(import.meta.env.VITE_DELETE_PASSWORDS, {
      method: "DELETE",
      headers: {
        token: localStorage.getItem("Auth-Token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: element._id }),
    });
    if (!option) {
      if (Mode.ToggleMode) {
        toast("Password Deleted Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast("Password Deleted Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }
  return (
    <>
      {mode.ToggleMode ? (
        <h1 className="text-purple-400 text-3xl font-bold w-[70%] underline italic">
          Saved Passwords
        </h1>
      ) : (
        <h1 className="text-white text-3xl font-bold w-[70%] underline italic">
          Saved Passwords
        </h1>
      )}
      {Passes.Passwords.length === 0 ? (
        <>
          {mode.ToggleMode ? (
            <h3 className="text-green-500 text-3xl w-[70%]">
              No Saved Passwords To Show
            </h3>
          ) : (
            <h3 className="text-white text-3xl w-[70%]">
              No Saved Passwords To Show
            </h3>
          )}
        </>
      ) : (
        <div className="rounded-md flex justify-center items-center border-pink-300 md:w-[70%] w-[100%] border bg-green-400  overflow-hidden">
          <table className="md:table-auto table:fixed w-[100%] border text-lg">
            <thead>
              <tr>
                <th className="md:text-center md:p-3 md:table-cell hidden">
                  Website URL
                </th>
                <th className="text-center p-3">Username</th>
                <th className="text-center p-3">Passwords</th>
                <th className="md:text-center md:p-3 md:table-cell hidden">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Passes.Passwords.map((element, index) => {
                return (
                  <tr key={index}>
                    <td className="md:text-center md:p-3 md:table-cell hidden">
                      <a
                        href={element.Website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {element.Website}
                      </a>
                    </td>

                    <td className="text-center p-3">
                      <div className="flex justify-center items-center gap-3">
                        {element.user}
                        <lord-icon
                          src="https://cdn.lordicon.com/lyrrgrsl.json"
                          trigger="hover"
                          style={{
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            // console.log("Copy Button Is Going To Work");
                            CopyPass(element.user);
                          }}
                        ></lord-icon>
                      </div>
                    </td>
                    <td className="text-center p-3">
                      <div className="flex justify-center items-center gap-3">
                        {"*".repeat(element.Password.length)}
                        <lord-icon
                          src="https://cdn.lordicon.com/lyrrgrsl.json"
                          trigger="hover"
                          style={{
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            // console.log("Copy Button Is Going To Work");
                            CopyPass(element.Password);
                          }}
                        ></lord-icon>
                      </div>
                    </td>
                    <td className="md:text-center md:p-3 md:table-cell hidden">
                      <div className="flex justify-center items-center">
                       
                        <lord-icon
                          src="https://cdn.lordicon.com/wuvorxbv.json"
                          trigger="hover"
                          onClick={() => {
                            Edit(element);
                          }}
                          style={{
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                          }}
                        ></lord-icon>
                        <lord-icon
                          src="https://cdn.lordicon.com/drxwpfop.json"
                          trigger="hover"
                          style={{
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            Delete(element);
                          }}
                        ></lord-icon>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Passwords_Table;
