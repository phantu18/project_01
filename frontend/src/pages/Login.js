import React, { useContext, useState } from "react";
import loginBg from "../assest/pexels-erika-andrade-1358382831-28347064.jpg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
      fetchUserDetails();
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  console.log("data login", data);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-start p-4 md:p-20 mb-16">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col">
        <img src={loginBg} className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 h-auto md:h-full bg-[#f5f5f5] flex flex-col p-4 md:p-20 justify-between items-center">
        <h1 className="text-xl text-[#060606] font-semibold">
          Interactive Brand
        </h1>

        <form
          className="w-full flex flex-col max-w-[500px]"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">
              Welcome back! Please enter your details.
            </p>
          </div>
          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <div className=" p-2 flex">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={data.password}
                name="password"
                onChange={handleOnChange}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              <div
                className="cursor-pointer text-xl pt-4"
                onClick={() => setShowPassword((preve) => !preve)}
              >
                <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>
            <Link
              to={"/notfound"}
              className="block w-fit ml-auto hover:underline cursor-pointer underline underline-offset-2"
            >
              Forgot password ?
            </Link>
          </div>

          <div className="w-full my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Login
            </button>
          </div>
        </form>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Don't have an account?{" "}
            <Link
              to={"/sign-up"}
              className=" font-semibold underline underline-offset-2 cursor-pointer"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
