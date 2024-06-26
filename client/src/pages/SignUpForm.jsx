import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import usebaseUrl from "../hooks/usebaseUrl";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../store/userSlice/userSlice";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
    fullName: "",
  });
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      toast.error(`Please enter a valid email`);
      return false;
    }
    if (!formData.password.trim()) {
      toast.error(`Please enter a valid password`);
      return false;
    }
    if (!formData.userName.trim()) {
      toast.error(`Please enter a valid username`);
      return false;
    }
    if (!formData.fullName.trim()) {
      toast.error(`Please enter a valid fullname`);
      return false;
    }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // console.log("handleLogin", usebaseUrl());

    if (validateForm()) {
      try {
        const response = await axios.request({
          method: "POST",
          url: `${usebaseUrl()}/api/auth/signup`,
          data: formData,
        });
        console.log(response.data)
        if (response.data.success) {
          dispatch(setUserInfo(response.data.data));
          localStorage("validationToken", response.data.token);
          setFormData({
            email: "",
            password: "",
            userName: "",
            fullName: "",
          });
          toast.success(response.data.message);
          navigate("/");
        } else {
          toast.error(response.data.message);
        }

        // console.log(response)
      } catch (error) {
        toast.error(error.response.data.message);
        console.log("error in signUpForm -> handleSignup", error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Join With Us</p>
          <div className="mt-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              value={formData.fullName}
              name="fullName"
              onChange={(e) => handleEditChange(e)}
              required
            />
          </div>
          <div className="mt-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User Name
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              required
              value={formData.userName}
              name="userName"
              onChange={(e) => handleEditChange(e)}
            />
          </div>
          <div className="mt-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
              value={formData.email}
              name="email"
              onChange={(e) => handleEditChange(e)}
            />
          </div>
          <div className="mt-1 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              value={formData.password}
              name="password"
              onChange={(e) => handleEditChange(e)}
            />
          </div>
          <div className="mt-8">
            <button
              onClick={handleSignup}
              className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
          <a
            href="#"
            className=" flex items-center justify-center mt-1 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <div className="flex px-5 justify-center w-full py-3">
              <div className="min-w-[30px]">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <div className="flex w-full justify-center">
                <h1 className="whitespace-nowrap text-gray-600 font-bold">
                  Sign Up with Google
                </h1>
              </div>
            </div>
          </a>
          <div className="mt-1 flex items-center w-full text-center">
            <p className="text-xs text-gray-500 capitalize text-center w-full">
              Already have a account?
              <Link to="/login" className="text-blue-700">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
      </div>
    </div>
  );
};
export default SignUpForm;
