import React from 'react'
import { useForm } from "react-hook-form";
import AlertComponent from './Alert';
function Login_Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    function Submit_Function(Submitted_Data) {
        console.log(errors.pass)
        console.log(errors.username)
    }

    return (
        <>
            {errors.username && <AlertComponent Error={errors.username.message} />}
            {errors.pass && <AlertComponent Error={errors.pass.message} />}
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
                        {...register("username", { minLength: { value: 2, message: "Minimum Length Exceded" }, maxLength: { value: 20, message: "Maximum Length Exceded" } })}
                    />
                </div>
                <div className="mb-3">
                    <h5 htmlFor="exampleInputPassword1" className="my-3 form-label">
                        Password
                    </h5>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        {...register("pass", { minLength: { value: 2, message: "Minimum Length Exceded" }, maxLength: { value: 20, message: "Maximum Length Exceded" } })}
                    />
                </div>
                <div className="Container my-1">
                    <button
                        type="submit"
                        className="btn btn-primary"

                    >
                        Submit
                    </button>
                </div>
            </form></>
    )
}

export default Login_Form
