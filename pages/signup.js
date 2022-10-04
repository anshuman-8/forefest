import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { MdReportGmailerrorred } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ForefestTitle from "../public/images/forefest-title.png";

function signup() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [error, setError] = useState("");

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    try{
      setError("");
      setLoading(true);
      if(passwordInput!==confirmPasswordInput){
        throw "Password and confirm password should be same!";
      }
      if(passwordInput.length<6){
        throw"Password should be atleast 6 characters long!";
      }
      setTimeout(() => {
        setLoading(false);
        const data=new FormData(e.target);
        data=Object.fromEntries(data.entries())
        console.log(data);
      }, 3000);
    }catch(e){
      setError(e);
      setLoading(false)
    }
  };
  
  return (
    <>
      <form
        className="bg-secondary h-screen w-full relative p-2"
        action="#"
        method="POST"
        onSubmit={handleOnSubmit}
      >
        <div className="max-w-xl min-w-fit mx-auto mt-24 py-10 flex flex-col bg-slate-300/40 z-10 shadow-xl rounded-lg items-center">
          <a href="/" className="mx-3 my-auto text-primary ">
            <Image src={ForefestTitle} height="55" width="210"></Image>
          </a>

          <h1 className="text-3xl my-5 font-bold text-white">Sign Up</h1>

          <div className="my-3 mx-3">
            <input
              className=" border-2 border-primaryDark rounded-xl px-3 py-2 active:border-2 focus:border-cyan-500 focus:outline-none focus:shadow-xl invalid:border-red-500"
              name="name"
              placeholder="Full Name"
              type="name"
              onChange={(e) => setNameInput(e.target.value)}
              required
            />
          </div>

          <div className="my-3 mx-3">
            <input
              className=" border-2 border-primaryDark rounded-xl px-3 py-2 focus:border-cyan-500 focus:outline-none focus:shadow-xl invalid:border-red-500"
              name="email"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
          </div>

          <div className="my-3 mx-3">
            <input
              className=" border-2 border-primaryDark rounded-xl px-3 py-2 focus:border-cyan-500 focus:outline-none focus:shadow-xl invalid:border-red-500"
              name="passowrd"
              placeholder="Password"
              type="password"
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
          </div>

          <div className="relative my-3 mx-3">
            <input
              type={showPassword ? "text" : "password"}
              className="peer border-2 border-primaryDark rounded-xl px-3 py-2 focus:border-cyan-500 focus:outline-none focus:shadow-xl invalid:border-red-500"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPasswordInput(e.target.value)}
              required/>
            <div
              className="absolute peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 top-3 right-4 z-20 cursor-pointer"
              onClick={showPasswordHandler}>
              {showPassword ? (
                <AiFillEye size={24} />
              ) : (
                <AiFillEyeInvisible size={24} />
              )}
            </div>
          </div>
          

          <div className="my-2 mx-10 text-white">
            Already a user?{" "}
            <Link href="/login">
              <span className="text-blue-500 hover:underline cursor-pointer">
                Login
              </span>
            </Link>
          </div>

          {!loading ? (
            <button
              // className={error===""?"text-white px-5 py-3 my-2 bg-slate-600 font-semibold text-lg hover:bg-slate-800 active:scale-95 rounded-lg":"text-white px-5 py-3 my-2 bg-slate-600 font-semibold text-lg cursor-not-allowed"}
              className="text-white px-5 py-3 my-2 bg-slate-600 font-semibold text-lg hover:bg-slate-800 active:scale-95 rounded-lg"       
              type="submit"
            >
              SignUp
            </button>
          ) : (
            <>
              <ImSpinner2
                className="animate-spin my-3"
                size={30}
                fill="white"
              />
            </>
          )}

        <div className="text-white my-3 mx-10">
          By continuing, you agree to Forefest's{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Privacy Policy
          </span>
        </div>

         {error!==""? <div className="flex bg-red-300/40  border-l-2 border-red-700 my-1 flex-row items-center">
            <MdReportGmailerrorred size={28} className="fill-red-700" />
            <p className="text-red-700 mx-3 my-2 font-medium">{error}</p>
          </div>:<></>}
        </div>
      </form>
    </>
  );
}

export default signup;
