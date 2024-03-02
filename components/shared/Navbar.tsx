import React from "react";
import DarkLightMode from "../DarkLightMode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlignJustify } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function Navbar() {
  return (
    <>
      <div className=" flex justify-between items-center p-4 bg-gray-900">
        <div className=" sm:text-4xl font-bold items-center">
          <span className=" text-sky-500">Web</span>Nirmata.in
        </div>
        <div className=" flex gap-5  items-center">
          <div className=" text-xl sm:flex hidden gap-8 font-light">
            <div>
              <a href="/" className=" hover:text-blue-500">
                Home
              </a>
            </div>
            <div>
              <a href="/about" className=" hover:text-blue-500">
                About
              </a>
            </div>
            <div>
              <a href="/contact" className=" hover:text-blue-500">
                Contact
              </a>
            </div>
            <div>
              <a href="/contact" className=" hover:text-blue-500">
                Help
              </a>
            </div>
          </div>

          <div className=" block sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <AlignJustify />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <div className=" flex justify-between">
                    <DarkLightMode />
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className=" sm:flex hidden items-center">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className=" hidden sm:flex">
            <DarkLightMode />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
