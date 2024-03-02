import React from "react";

function Hero() {
  return (
    <div className=" flex w-fill bg-gray-500 ">
      <div className="flex flex-col justify-start items-start gap-5 ">
        <h1 className="text-3xl font-bold">Welcome to my website!</h1>
        <p className="text-xl">
          This is a simple hero section made with React and Tailwind.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
