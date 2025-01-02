import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSignUp = () => {
    
    if (email.includes("@") && email?.length > 0 && !email?.includes(" ") && password?.length > 0 && !password?.includes(" ")){
      alert("SignUp Succesfully!");
      navigate("/login");
    }
    else {
      alert("Invalid Inputs");
    }

  };

  return (
    <div className="flex flex-col bg-black items-center justify-center h-[100vh] w-full">
      <div className="bg-white p-10 flex flex-col justify-evenly items-center rounded-md gap-5">
        <h1 className="text-black font-bold text-3xl pb-5">SignUp Portal</h1>
        <input
          className="px-5 p-2 bg-neutral-300 rounded-md  text-black"
          placeholder="Enter your email"
          value={email}
          onChange={(email) => {
            setEmail(email.target.value);
          }}
        />
        <input
          className="px-5 p-2 bg-neutral-300 rounded-md text-black"
          placeholder="Enter your Password"
          value={password}
          onChange={(password) => {
            setPassword(password.target.value);
          }}
        />
        <button
          onClick={() => {
            handleSignUp();
          }}
          className="w-full rounded-md p-2 bg-red-600 text-white font-bold"
        >
          <h1>SignUp</h1>
        </button>
        <h1 className="text-black py-5">Already have an Account? <a href="/login"><span className="text-blue-600"> Login</span></a></h1>

      </div>
    </div>
  );
};

export default SignUp;
