import React, { useState } from "react";
import loginIcons from "../assest/user-circle-svgrepo-com.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import imageTobase64 from "../helpers/imageTobase64";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import signUpBg from "../assest/pexels-erika-andrade-1358382831-28347063.jpg";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageTobase64(file);

    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
      toast.error("Please check password and confirm password");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-start p-4 md:p-20 mb-16">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col">
        <img src={signUpBg} className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 h-auto md:h-full bg-[#f5f5f5] flex flex-col p-4 md:p-20 justify-between items-center">
        <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
          <div>
            <img src={data.profilePic || loginIcons} alt="login icons" />
          </div>
          <form>
            <label>
              <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                Upload Photo
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleUploadPic}
              />
            </label>
          </form>
        </div>

        <form
          className="w-full flex flex-col max-w-[500px]"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={data.name}
              onChange={handleOnChange}
              required
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              required
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <div className=" p-2 flex">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={data.password}
                name="password"
                onChange={handleOnChange}
                required
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              <div
                className="cursor-pointer text-xl pt-4"
                onClick={() => setShowPassword((preve) => !preve)}
              >
                <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>
            <div className=" p-2 flex">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={data.confirmPassword}
                name="confirmPassword"
                onChange={handleOnChange}
                required
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />

              <div
                className="cursor-pointer text-xl pt-4"
                onClick={() => setShowConfirmPassword((preve) => !preve)}
              >
                <span>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>
          </div>

          <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
            Sign Up
          </button>
        </form>

        <p className="my-5">
          Already have account ?{" "}
          <Link
            to={"/login"}
            className=" font-semibold underline underline-offset-2 cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
