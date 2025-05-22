import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-fit px-4 py-2 cursor-pointer bg-zinc-100 text-black rounded-full flex items-center justify-between gap-4">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
