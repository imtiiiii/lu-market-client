import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
import { UserContext } from "../contexts/UserContext";
axios.defaults.withCredentials = true;
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { userLoading, user } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const studentId = form.studentId.value;
    try {
      const res = await axios.post("http://localhost:3333/auth/register", {
        name,
        email,
        password,
        student_id: studentId,
      });
      if (res.data) {
        toast.success("Account created successfully! ");
      }
      form.reset();
    } catch (error) {
      if (error?.response?.status === 500) {
        toast.error("Internal Server Error!");
      }
      toast.error(error?.response?.data?.message ?? "Something went wrong!");
    }

    // sign up using email and password
    // createUser(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     toast.success("Account created successfully! ");
    //     form.reset();

    //     // update user's name
    //     updateName(name).then(() => {
    //       console.log(user);
    //     });

    //     // Verified user's email
    //     verifyEmail().then(() => {
    //       toast.success(
    //         "Email verification link has been sent, please check your email!"
    //       );
    //     });
    //     navigate(from, { replace: true });
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
  };

  // // Google sign in
  // const handleSignInWithGoogle = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log(user);
  //       toast.success("Successfully sign in with google.");
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //     });
  // };

  // GitHub sign in
  // const handleSignInWithGithub = () => {
  //   signInWithGithub()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       toast.success("Successfully sign in with github.");
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-col p-4 rounded-md sm:p-10 bg-gray-100 w-96 sm:w-1/4 md:w-1/3 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                autoComplete="off"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                autoComplete="off"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Student ID
              </label>
              <input
                type="text"
                name="studentId"
                id="student_id"
                placeholder="Enter Your Student ID Here"
                autoComplete="off"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        {/* <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Sign up with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div> */}
        {/* <div className="flex justify-center space-x-4">
          <button
            onClick={handleSignInWithGoogle}
            aria-label="Log in with Google"
            className="p-3 rounded-sm hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button
            aria-label="Log in with Facebook"
            className="p-3 rounded-sm hover:text-blue-500"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </svg>
          </button>
          <button
            onClick={handleSignInWithGithub}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div> */}
        <p className="px-6 pt-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="hover:underline text-blue-700">
            sign in
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
