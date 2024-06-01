import { useForm } from "react-hook-form";
import AlertComponent from "./Alert";
import Loader from "./Loader";
function Login_Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const Custom_Delay = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };
  async function Submit_Function() {
    await Custom_Delay();
  }

  return (
    <>
      {isSubmitting ? (
        <Loader />
      ) : (
        <form className="my-4" onSubmit={handleSubmit(Submit_Function)}>
          <div className="mb-3">
            <h5 htmlFor="User_Name" className="my-3 form-label">
              Username
            </h5>
            <input
              type="text"
              className="form-control"
              id="User_Name"
              required
              {...register("username", {
                minLength: {
                  value: 3,
                  message: "Please Provide A Valid Username With Minimum Value",
                },
              })}
            />
          </div>
          {errors.username && (
            <AlertComponent Error={errors.username.message} />
          )}

          <div className="mb-3">
            <h5 htmlFor="exampleInputPassword1" className="my-3 form-label">
              Password
            </h5>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              {...register("pass", {
                maxLength: {
                  value: 8,
                  message: "Please Provide A Password Within 8 Charecters",
                },
              })}
            />
          </div>
          {errors.pass && <AlertComponent Error={errors.pass.message} />}

          <div className="Container my-1">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={errors.pass || errors.username ? true : false}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default Login_Form;
