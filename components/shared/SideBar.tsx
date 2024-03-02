import React from "react";
import { Input } from "../ui/input";
import { Search, SearchCheck } from "lucide-react";
import { Button } from "../ui/button";
import Nav from "./Nav";

function SideBar() {
  return (
    <>
      <div className=" w-1/3 bg-gray-800">
        <div className="flex w-full p-2 items-center space-x-2">
          <Input type="text" placeholder="Search" className="w-full p-1 h-11 bg-gray-700 rounded-xl" />
          <Button type="submit" className=" bg-sky-500"><Search/></Button>
        </div>
        <div className=" p-2 gap-5 flex flex-col">
          <div className=" text-2xl">Navbar</div>
          <Nav />
          <Nav />
          <Nav />
          <Nav />
        </div>
      </div>
    </>
  );
}

export default SideBar;
