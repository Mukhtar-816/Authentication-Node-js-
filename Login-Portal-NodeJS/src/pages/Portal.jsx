import React from "react";
import {useNavigate} from "react-router-dom";

const Portal = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-neutral-950 px-10 h-[100vh] w-full top-0 flex items-center justify-center flex-col gap-20">
      <h1 className="text-3xl text-white font-bold">Authentication Portal</h1>
      <div className="bg-white p-10 sm:flex-row flex-col justify-evenly rounded-md items-center px-20 space-x-10">
        <button onClick={() => {navigate("/login")}} className="bg-red-500 rounded-md px-10 py-5 text-white font-bold hover:bg-blue-900">
          <p>Login</p>
        </button>
        <button onClick={() => {navigate("/signup")}} className="bg-red-500 rounded-md px-10 py-5 text-white font-bold hover:bg-blue-900">
          <p>Sign-Up</p>
        </button>
      </div>
    </div>
  );
};

export default Portal;
