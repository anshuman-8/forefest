import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { MdReportGmailerrorred } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ForefestTitle from "../public/images/forefest-title.png";


function login() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      if (passwordInput.length < 6) {
        throw "Password should be atleast 6 characters long!";
      }
      setTimeout(() => {
        setLoading(false);
        const data = new FormData(e.target);
        data = Object.fromEntries(data.entries());
        console.log(data);
      }, 3000);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary h-screen w-full relative p-2">

      <form
      action="#"
      method="POST"
      onSubmit={handleOnSubmit}
      >
      <div className="max-w-xl min-w-fit mx-auto mt-24 py-10 flex flex-col bg-slate-300/40 z-10 shadow-xl rounded-lg items-center">
        <a href="/" className="mx-3 my-auto text-primary ">
          <Image src={ForefestTitle} height="55" width="210"></Image>
        </a>
        
          <h1 className="text-3xl my-5 font-bold text-white">Login</h1>

          <div className="my-3 mx-3">
            <div className="text-white mx-2 font-medium">Email</div>
            <input
              className=" border-2 border-primaryDark rounded-xl px-3 py-2 invalid:border-red-500"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmailInput(e.target.value)}
              type="email"
              required
            />
          </div>

          <div className="relative my-3 mx-3">
            <div className="text-white mx-2 font-medium ">Password</div>
            <input
              type={showPassword ? "text" : "password"}
              className="peer border-2 border-primaryDark rounded-xl px-3 py-2 focus:border-cyan-500 focus:outline-none focus:shadow-xl invalid:border-red-500"
              name="password"
              placeholder="Password"
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
            <div
              className="absolute peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-8 top-8 right-4 z-20 cursor-pointer"
              onClick={showPasswordHandler}>
              {showPassword ? (
                <AiFillEye size={26} />
              ) : (
                <AiFillEyeInvisible size={26} />
              )}
            </div>
          </div>

          <button
            onClick={() => alert("Nope!,We are not gonna help ????")}
            className="text-blue-500 my-1 hover:underline">
            Forgot password?
          </button>

          <div className="my-3 mx-10 text-white ">
            New to Forefest?{" "}
            <Link href="/signup">
              <span className="text-blue-500 hover:underline cursor-pointer">
                Signup
              </span>
            </Link>
          </div>

          {!loading ? (
            <button
              // className={error===""?"text-white px-5 py-3 my-2 bg-slate-600 font-semibold text-lg hover:bg-slate-800 active:scale-95 rounded-lg":"text-white px-5 py-3 my-2 bg-slate-600 font-semibold text-lg cursor-not-allowed"}
              className="text-white px-5 py-3 my-2 bg-slate-600 font-semibold text-lg hover:bg-slate-800 active:scale-95 rounded-lg"
              type="submit">
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

          {error !== "" ? (
            <div className="flex bg-red-300/40  border-l-2 border-red-700 my-1 flex-row items-center">
              <MdReportGmailerrorred size={28} className="fill-red-700" />
              <p className="text-red-700 mx-3 my-2 font-medium">{error}</p>
            </div>
          ) : (
            <></>
          )}
      </div>
      </form>
    </div>
  );
}

export default login;
