"use client";
import React from "react";
import { Button } from "../ui/button";
import Nav from "./Nav";
import Hero from "./Hero";

function Buildpage() {
  const [start, setStart] = React.useState(true);
  return (
    <>
      <div className=" w-full  ">
        {start ? (
          <div className=" text-4xl flex-col gap-5 h-full w-full flex justify-center items-center">
            Build your own website !
            <Button
              size="lg"
              className="ml-4 bg-sky-500 font-bold"
              onClick={() => {
                setStart(false);
              }}
            >
              Get Started
            </Button>
          </div>
        ) : (
          <div className=" bg-gray-950 w-full h-full ">
            <div className=" p-2">
              <Nav />
              {/* <Hero /> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Buildpage;
